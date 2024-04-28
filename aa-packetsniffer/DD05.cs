using System.Reflection;

class DD05 {
    public static List<IGamePacket> Parse(Span<byte> bytes) {
        byte[] decrypted = StoCEncrypt(bytes);

        byte declaredCrc = decrypted[0];
        byte seq = decrypted[1]; // Increases with every sent DD05 packet, rolls back to 0 when max value.
        byte calculatedCrc = Crc8(decrypted.AsSpan(1, decrypted.Length - 1));

        if (declaredCrc != calculatedCrc) {
            throw new ArgumentException($"CRC mismatch: {declaredCrc} != {calculatedCrc}");
        }

        return IGamePacket.ParsePackets(decrypted.AsSpan().Slice(2).ToArray());
    }

    static byte Crc8(Span<byte> data)
    {
        uint checksum = 0;
        for (var i = 0; i < data.Length; i++)
        {
            checksum *= 0x13;
            checksum += data[i];
        }
        return (byte)checksum;
    }

    static byte Inline(ref uint cry)
    {
        cry += 0x2FCBD5U; //3132373
        byte n = (byte)(cry >> 0x10);
        n = (byte)(n & 0x0F7);
        return (byte)(n == 0 ? 0x0FE : n);
    }

    static byte[] StoCEncrypt(Span<byte> bodyPacket)
    {
        byte[] array = new byte[bodyPacket.Length];
        uint cry = (uint)(bodyPacket.Length ^ 0x1F2175A0); //522286496
        int n = 4 * (bodyPacket.Length / 4);
        for (int i = n - 1; i >= 0; i--)
            array[i] = (byte)(bodyPacket[i] ^ (uint)Inline(ref cry));
        for (int i = n; i < bodyPacket.Length; i++)
            array[i] = (byte)(bodyPacket[i] ^ (uint)Inline(ref cry));
        return array;
    }
}
