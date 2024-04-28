class ParserContext {
    private byte[] Bytes = [];
    private int Offset = 0;

    public ParserContext(byte[] bytes) {
        this.Bytes = bytes;
    }

    public void Skip(int n = 1) {
        Offset += n;
    }

    public byte ReadByte() {
        byte ret = Bytes[Offset];
        Skip(1);
        return ret;
    }

    public ushort ReadUInt16() {
        ushort ret = BitConverter.ToUInt16(Bytes, Offset);
        Skip(2);
        return ret;
    }

    public string ReadUTF8String(int length) {
        string ret = System.Text.Encoding.UTF8.GetString(Bytes, Offset, length);
        Skip(length);
        return ret;
    }

    public bool End() {
        return Offset >= Bytes.Length;
    }

    public override string ToString()
    {
        return $"offset={Offset} bytes={Convert.ToHexString(Bytes)}";
    }
}
