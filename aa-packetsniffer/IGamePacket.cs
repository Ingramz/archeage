using System.Reflection;

interface IGamePacket {
    private static Dictionary<uint, Type> packetTypes = new Dictionary<uint, Type> {
        { 0x00F9, typeof(ChatMessagePacket) }
    };

    public static IGamePacket Parse(ParserContext ctx) => throw new NotImplementedException("Unimplemented Parse function.");

    public static List<IGamePacket> ParsePackets(byte[] bytes) {
        List<IGamePacket> packets = new List<IGamePacket>();
        ParserContext ctx = new ParserContext(bytes);

        while (!ctx.End()) {
            ushort type = ctx.ReadUInt16();
            var clazz = packetTypes.GetValueOrDefault(type);
            if (clazz == null) {
                //Console.WriteLine($"No parser found for type {Convert.ToHexString(BitConverter.GetBytes(type))}");
                break;
            } else {
                var gamePacket = clazz.GetMethod(nameof(Parse), BindingFlags.Static | BindingFlags.Public | BindingFlags.FlattenHierarchy)?.Invoke(null, [ctx]) as IGamePacket;
                if (gamePacket == null) {
                    Console.WriteLine("Parser returned null.");
                    break;
                } else {
                    packets.Add(gamePacket);
                }
            }
        }

        if (!ctx.End()) {
            //Console.WriteLine($"Incomplete parse, {ctx}");
        }

        return packets;
    }
}
