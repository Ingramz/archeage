local p_multi = Proto("archeage", "ArcheAge");

local f_length = ProtoField.string("archeage.length", "Length")
local f_type = ProtoField.string("archeage.type", "Type")
local f_text = ProtoField.string("archeage.text", "Packet bytes")
local f_crc = ProtoField.string("archeage.crc", "CRC")
local f_seq = ProtoField.string("archeage.seq", "Seqno")
local f_type2 = ProtoField.string("archeage.type2", "Type2")
local f_message = ProtoField.string("archeage.message", "Message")

p_multi.fields = { f_length, f_type, f_text, f_crc, f_seq, f_type2, f_message }

local data_dis = Dissector.get("data")

local function Inline(cry)
  cry[1] = cry[1] + 0x2FCBD5 -- 3132373
  local n = bit32.rshift(cry[1], 16)
  n = bit32.band(n, 0x0F7)
  return (n == 0) and 0x0FE or n
end

local function StoCEncrypt(bodyPacket2)
  print("First char: " .. tostring(bodyPacket2:get_index(0)))

  local bodyPacket = {}

  for i = 1, bodyPacket2:len() do
    bodyPacket[i] = bodyPacket2:get_index(i - 1)
  end

  local array = {}
  local cry = {bit32.bxor(#bodyPacket, 0x1F2175A0)} -- 522286496
  print(tostring(#bodyPacket))
  local n = 4 * math.floor(#bodyPacket / 4)
  for i = n, 1, -1 do
      array[i] = bit32.bxor(bodyPacket[i], Inline(cry))
  end
  for i = n + 1, #bodyPacket do
      array[i] = bit32.bxor(bodyPacket[i], Inline(cry))
  end

  print("First char 2: " .. tostring(array[1]))

  local byteArray = ByteArray.new()
  byteArray:set_size(#array)

  for i = 1, #array do
    byteArray:set_index(i - 1, array[i])
  end

  return byteArray
end

function p_multi.dissector(tvbuf, pkt, tree)
  local subtree = tree:add(p_multi)
  local pktlen = tvbuf:reported_length_remaining()
  local processed = 0
  while(processed < pktlen)
  do
    print("----------------")
    local length = tvbuf:range(processed, 2):le_uint()
    print("Processed: " .. tostring(processed))
    print("Total: " .. tostring(pktlen))
    print("LEN: " .. tostring(length))
    local _type = tvbuf:range(processed + 2, 2):bytes():tohex()

    local _buffer = tvbuf:range(processed + 4, length - 2)
    subtree:add(f_length, tvbuf:range(processed, 2), length)
    subtree:add(f_type, tvbuf:range(processed + 2, 2), _type)

    local decrypted = StoCEncrypt(_buffer:bytes()):tvb()

    subtree:add(f_text, decrypted:range(), "Decrypted")

    subtree:add(f_crc, decrypted:range(0, 1))
    subtree:add(f_seq, decrypted:range(1, 1))
    subtree:add(f_type2, decrypted:range(2, 2):bytes():tohex())

    if decrypted:range(2, 2):bytes():tohex() == "F900" then
      local buffer = "["
      local channel = decrypted:range(5, 1):le_uint()

      local chans = {}
      chans[255] = "Notice"
      chans[254] = "System"
      chans[253] = "Whisper"
      chans[252] = "Whisper"
      chans[0] = "White"
      chans[1] = "Shout"
      chans[2] = "Trade"
      chans[3] = "GroupFind"
      chans[4] = "Party"
      chans[5] = "Raid"
      chans[6] = "Nation"
      chans[7] = "Clan"
      chans[8] = "System2"
      chans[9] = "Family"
      chans[10] = "RaidLeader"
      chans[11] = "Judge"
      chans[14] = "Ally"
      chans[15] = "User"
      chans[18] = "Global"

      if channel == 0x00 then
        buffer = buffer .. ""
      elseif chans[channel] ~= nil then
        buffer = buffer .. chans[channel] .. ": "
      else
        buffer = buffer .. tostring(channel) .. ": "
      end

      local charnameLength = decrypted:range(30, 2):le_uint()
      local charname = decrypted:range(32, charnameLength):string(ENC_UTF_8)

      buffer = buffer .. charname

      buffer = buffer .. "]: "

      local messageLength = decrypted:range(32 + charnameLength, 2):le_uint()
      local message = decrypted:range(32 + charnameLength + 2, messageLength):string(ENC_UTF_8)

      buffer = buffer .. message

      pkt.cols['info'] = buffer

      subtree:add(f_message, buffer)
    end

    processed = processed + length + 2
  end
end

local tcp_encap_table = DissectorTable.get("tcp.port")

tcp_encap_table:add(1239, p_multi)
