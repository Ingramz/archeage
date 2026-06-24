using System.Reflection.PortableExecutable;
using System.Security.Cryptography;

class Program
{
    static void Main()
    {
        string filePath = @"bin64\archeage.exe";
        string dbPath = @"game\db\game.sqlite3";
        string destination = @"game\db\game_decrypted.sqlite3";

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

            Console.WriteLine("Revision: " + BitConverter.ToUInt32(int32));

            stream.Seek(68, SeekOrigin.Current);

            byte[] sKey = new byte[16];
            stream.ReadExactly(sKey);

            Console.WriteLine("Key: " + Convert.ToHexString(sKey));

            decryptDatabase(dbPath, destination, sKey);
            //encryptDatabase(destination, dbPath + ".new", sKey);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }

    static void decryptDatabase(string src, string dst, byte[] key)
    {
        using (Aes aes = Aes.Create())
        {
            aes.Key = key;
            aes.IV = new byte[16];
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.None;

            using (FileStream fsInput = new FileStream(src, FileMode.Open, FileAccess.Read))
            using (FileStream fsOutput = new FileStream(dst, FileMode.Create, FileAccess.Write))
            using (ICryptoTransform decryptor = aes.CreateDecryptor())
            using (CryptoStream cs = new CryptoStream(fsInput, decryptor, CryptoStreamMode.Read))
            {
                cs.CopyTo(fsOutput);
            }
        }

        Console.WriteLine("Decryption did not return any errors.");

        using (FileStream fsInput = new FileStream(dst, FileMode.Open, FileAccess.Read))
        {
            byte[] header = new byte[16];
            fsInput.ReadExactly(header);

            string str = System.Text.Encoding.ASCII.GetString(header);

            if (str == "SQLite format 3\0")
            {
                Console.WriteLine("Resulting file has SQLite header.");
            }
            else
            {
                Console.WriteLine("Resulting file is missing SQLite header. This could be due to invalid key or differences in encryption method.");
            }
        }
    }

    static void encryptDatabase(string src, string dst, byte[] key)
    {
        using (Aes aes = Aes.Create())
        {
            aes.Key = key;
            aes.IV = new byte[16];
            aes.Mode = CipherMode.CBC;
            aes.Padding = PaddingMode.None;

            using (FileStream fsInput = new FileStream(src, FileMode.Open, FileAccess.Read))
            using (FileStream fsOutput = new FileStream(dst, FileMode.Create, FileAccess.Write))
            using (ICryptoTransform encryptor = aes.CreateEncryptor())
            using (CryptoStream cs = new CryptoStream(fsOutput, encryptor, CryptoStreamMode.Write))
            {
                fsInput.CopyTo(cs);
            }
        }
    }
}
