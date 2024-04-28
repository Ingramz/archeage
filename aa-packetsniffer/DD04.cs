using System.IO.Compression;

class DD04 {
    public static List<IGamePacket> Parse(Span<byte> bytes) {
        int n = BitConverter.ToUInt16(bytes); // Number of encapsulated packets
        var bytes2 = UncompressBuffer(bytes.Slice(2).ToArray());

        // https://github.com/AAEmu/AAEmu/blob/e7d90335ea7661e1b62c624b8b8236b5e83d2dd7/AAEmu.Game/Core/Packets/CompressedGamePackets.cs#L39
        // This doesn't seem to be always zero.
        ushort unknown = BitConverter.ToUInt16(bytes2, 0);

        return IGamePacket.ParsePackets(bytes2.AsSpan().Slice(1).ToArray());
    }

    public static byte[] UncompressBuffer(byte[] compressed)
    {
        using MemoryStream stream = new MemoryStream(compressed);
        using Stream decompressor = new DeflateStream(stream, CompressionMode.Decompress);
        using MemoryStream output = new MemoryStream();
        decompressor.CopyTo(output);
        return output.ToArray();
    }
}
