enum Channel : byte {
    General = 0,
    Shout = 1,
    Trade = 2,
    PartySearch = 3,
    Party = 4,
    Raid = 5,
    Nation = 6,
    Guild = 7,
    System2 = 8,
    Family = 9,
    Commander = 10,
    Trial = 11,
    Ally = 14,
    User = 15,
    Team = 17,
    Global = 18,
    Whispered = 252,
    Whisper = 253,
    System = 254,
    Notice = 255,
}

enum ClientLanguage : byte
{
    Ko = 0,
    ZhCn = 1,
    EnUs = 2,
    Ja = 3,
    ZhTw = 4,
    Ru = 5,
    De = 6,
    Fr = 7,
    Th = 8,
    Ind = 9,
    EnSg = 10,
}

class ChatMessagePacket : IGamePacket {
    private ClientLanguage ClientLanguage;
    private Channel Channel;
    private string SenderName = string.Empty;
    private string Message = string.Empty;

    public static IGamePacket Parse(ParserContext ctx)
    {
        ChatMessagePacket cmp = new ChatMessagePacket();

        cmp.ClientLanguage = (ClientLanguage) ctx.ReadByte();
        cmp.Channel = (Channel) ctx.ReadByte();

        ctx.Skip(24);

        ushort senderNameLength = ctx.ReadUInt16();
        cmp.SenderName = ctx.ReadUTF8String(senderNameLength);

        ushort messageLength = ctx.ReadUInt16();
        cmp.Message = ctx.ReadUTF8String(messageLength);

        // Can have up to 4 possible links per message.
        for (int i = 0; i < 4; i++) {
            byte linkType = ctx.ReadByte();
            if (linkType == 8) ctx.Skip(8); // Craft link
            if (linkType == 7) ctx.Skip(341); // URL link
            if (linkType == 6) ctx.Skip(36); // Team link
            if (linkType == 5) ctx.Skip(28); // Raid link
            // 4 - does not seem to exist
            if (linkType == 3) ctx.Skip(9); // Quest link
            // 2 - character name link, dunno how to trigger
            if (linkType == 1) ctx.Skip(220); // Item link
            if (linkType == 0) continue; // Single byte, already consumed.
        }

        ctx.Skip(7);

        return cmp;
    }

    override public string ToString()
    {
        return Channel switch
        {
            Channel.General => $"[{SenderName}]: {Message}",
            Channel.Whisper => $"{SenderName} to you: {Message}",
            Channel.Whispered => $"To {SenderName}: {Message}",
            Channel.System => $"[System]: {Message}",
            _ when Enum.IsDefined(typeof(Channel), Channel) => $"[{ChannelName(Channel)}: {SenderName}]: {Message}",
            _ => $"[id={Channel}: {SenderName}]: {Message}"
        };
    }

    private static string ChannelName(Channel channel)
    {
        return channel switch
        {
            Channel.PartySearch => "Party Search",
            _ => channel.ToString(),
        };
    }
}
