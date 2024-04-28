using System;
using System.IO;
using System.Reflection.PortableExecutable;

class Program
{
    static void Main(string[] args)
    {
        string filePath = @"C:\KakaoGames\ArcheAge\bin64\archeage.exe";

        try
        {
            using FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
            using PEReader peReader = new PEReader(stream);
            var ptr = peReader
                .PEHeaders
                .SectionHeaders
                .Where(header => header.Name == ".xlgames")
                .First()
                .PointerToRawData;

            stream.Seek(ptr, SeekOrigin.Begin);

            byte[] int32 = new byte[4];

            stream.ReadExactly(int32);

            Console.WriteLine(BitConverter.ToUInt32(int32));
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}
