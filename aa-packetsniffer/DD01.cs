class DD01 {
    public static List<IGamePacket> Parse(Span<byte> bytes) {
        byte hash = bytes[0];
        byte n = bytes[1];

        return IGamePacket.ParsePackets(bytes.Slice(2).ToArray());
    }
}
