class DD02 {
    public static List<IGamePacket> Parse(Span<byte> bytes) {
        return IGamePacket.ParsePackets(bytes.ToArray());
    }
}
