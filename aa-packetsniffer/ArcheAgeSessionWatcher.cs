using PacketDotNet.Connections;

public class ArcheAgeSessionWatcher
{
    private static int IdCounter = 0;

    private int Id;

    private TcpStreamGenerator StreamGenerator0;
    private TcpStreamGenerator StreamGenerator1;

    private MemoryStream Buffer = new MemoryStream();

    public ArcheAgeSessionWatcher(TcpConnection c)
    {
        Id = ++IdCounter;
        Log($"New TCP session: {c}");

        StreamGenerator0 = new TcpStreamGenerator(c.Flows[0], new TimeSpan(0, 0, 60), null);
        StreamGenerator0.OnCallback += HandleStreamGeneratorOnCallback;

        StreamGenerator1 = new TcpStreamGenerator(c.Flows[1], new TimeSpan(0, 0, 60), null);
        StreamGenerator1.OnCallback += HandleStreamGeneratorOnCallback;
    }

    TcpStreamGenerator.CallbackReturnValue HandleStreamGeneratorOnCallback(TcpStreamGenerator tcpStreamGenerator, TcpStreamGenerator.CallbackCondition condition)
    {
        switch(condition)
        {
            // stop monitoring if we have an error condition
            case TcpStreamGenerator.CallbackCondition.SizeLimitReached:
            case TcpStreamGenerator.CallbackCondition.OutOfRange:
            case TcpStreamGenerator.CallbackCondition.ConnectionTimeout:
            case TcpStreamGenerator.CallbackCondition.StreamError:
                Log($"condition == {condition}, shutting down monitors");
                return TcpStreamGenerator.CallbackReturnValue.StopMonitoring;

            // early out if we don't have the next packet in sequence
            case TcpStreamGenerator.CallbackCondition.OutOfSequence:
                Log($"condition {condition} != TcpStreamMonitor.CallbackCondition.NextInSequence, returning ContinueMonitoring");
                return TcpStreamGenerator.CallbackReturnValue.ContinueMonitoring;

            case TcpStreamGenerator.CallbackCondition.DuplicateDropped:
                // nothing to do here, we dropped a duplicate entry
                return TcpStreamGenerator.CallbackReturnValue.ContinueMonitoring;

            // normal case, nothing to do here but fall through
            case TcpStreamGenerator.CallbackCondition.NextInSequence:
                break;

            default:
                throw new InvalidOperationException($"Unknown condition of '{condition}'");
        }

        var stream = tcpStreamGenerator.tcpStream;
        stream.CopyTo(Buffer);

        byte[] bytes = Buffer.GetBuffer();
        int bufferLength = (int)Buffer.Length;

        int bytesRead = 0;
        const int LENGTH_NBYTES = 2;
        const int TYPE_NBYTES = 2;
        while (bytesRead + LENGTH_NBYTES <= bufferLength)
        {
            ushort packetLength = BitConverter.ToUInt16(bytes, bytesRead);

            if (bytesRead + LENGTH_NBYTES + packetLength <= bufferLength) {
                ushort type = BitConverter.ToUInt16(bytes, bytesRead + LENGTH_NBYTES);
                //Log($"Type={Convert.ToHexString(BitConverter.GetBytes(type))} Len={packetLength}");

                if (type == 0x01DD || type == 0x02DD || type == 0x03DD || type == 0x04DD || type == 0x05DD || type == 0x06DD) {
                    try {
                        Span<byte> body = bytes.AsSpan(bytesRead + LENGTH_NBYTES + TYPE_NBYTES, packetLength - TYPE_NBYTES);
                        List<IGamePacket> gamePackets = type switch
                        {
                            //0x01DD => DD01.Parse(body),
                            //0x02DD => DD02.Parse(body),
                            //0x03DD => DD03.Parse(body),
                            //0x04DD => DD04.Parse(body),
                            0x05DD => DD05.Parse(body),
                            _ => []//throw new NotImplementedException($"Unimplemented packet type {Convert.ToHexString(BitConverter.GetBytes(type))}"),
                        };
                        gamePackets.ForEach(Console.WriteLine);
                    } catch (Exception e) {
                        Log(e.Message.ToString());
                    }
                    bytesRead += packetLength + LENGTH_NBYTES;
                } else {
                    // Skip over current byte until we recognize data.
                    Log("Skipping");
                    bytesRead++;
                }
            } else {
                System.Buffer.BlockCopy(bytes, bytesRead, bytes, 0, bufferLength - bytesRead);
                break;
            }
        }
        Buffer.SetLength(bufferLength - bytesRead);

        return TcpStreamGenerator.CallbackReturnValue.ContinueMonitoring;
    }

    private void Log(string? message) {
        Console.WriteLine("[c={0}] {1}", Id, message);
    }
}
