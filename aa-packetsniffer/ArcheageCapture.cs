using PacketDotNet;
using PacketDotNet.Connections;
using SharpPcap;

class ArcheageCapture {
    private TcpConnectionManager tcpConnectionManager = new TcpConnectionManager();

    public void Start() {
        var devices = CaptureDeviceList.Instance;

        Console.WriteLine("Available interfaces:");
        for (int i = 0; i < devices.Count; i++) {
            Console.WriteLine("{0}) {1}", i + 1, devices[i].Description);
        }
        Console.WriteLine();

        int interfaceIndex = -1;
        while (interfaceIndex < 0 || interfaceIndex >= devices.Count) {
            Console.Write("Your selection: ");

            try {
                interfaceIndex = int.Parse(Console.ReadLine()!) - 1;
            } catch {
                interfaceIndex = -1;
            }
        }

        var device = devices[interfaceIndex];
        tcpConnectionManager.OnConnectionFound += HandleTcpConnectionManagerOnConnectionFound;

        device.Open(mode: DeviceModes.None, read_timeout: -1);
        device.OnPacketArrival += device_OnPacketArrival;
        device.Capture();
    }

    void HandleTcpConnectionManagerOnConnectionFound(TcpConnection c)
    {
        var archeageSessionWatcher = new ArcheAgeSessionWatcher(c);
    }

    void device_OnPacketArrival(object sender, PacketCapture e)
    {
        var rawPacket = e.GetPacket();
        var packet = Packet.ParsePacket(rawPacket.LinkLayerType, rawPacket.Data);

        var tcpPacket = packet.Extract<TcpPacket>();
        if (tcpPacket != null)
        {
            int srcPort = tcpPacket.SourcePort;
            if (srcPort != 1239/* && srcPort != 1237*/) {
                return;
            }

            //Dump(e, tcpPacket);

            tcpConnectionManager.ProcessPacket(rawPacket.Timeval, tcpPacket);
        }
    }

    void Dump(PacketCapture e, TcpPacket tcpPacket)
    {
        var time = e.Header.Timeval.Date;
        var len = e.Data.Length;
        var ipPacket = (IPPacket)tcpPacket.ParentPacket;

        System.Net.IPAddress srcIp = ipPacket.SourceAddress;
        System.Net.IPAddress dstIp = ipPacket.DestinationAddress;

        int srcPort = tcpPacket.SourcePort;
        int dstPort = tcpPacket.DestinationPort;

        Console.WriteLine("{0}:{1}:{2},{3} Len={4} {5}:{6} -> {7}:{8} [tcplen={9}]",
                        time.Hour, time.Minute, time.Second, time.Millisecond, len,
                        srcIp, srcPort, dstIp, dstPort, tcpPacket.PayloadData.Length);
    }
}
