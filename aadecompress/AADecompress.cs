using System.Reflection;
using System.Runtime.InteropServices;

public class AADecompress {
    [return: MarshalAs(UnmanagedType.I1)]
    private delegate bool DecompressDelegate([MarshalAs(UnmanagedType.LPArray, ArraySubType = UnmanagedType.LPStr)] string[] sources, [MarshalAs(UnmanagedType.I4)] int nSources, [MarshalAs(UnmanagedType.LPStr)] string destination);

    private const int START_OFFSET = 0x00377B18;
    private const int DECOMPRESS_OFFSET = 0x00044080;

    public static bool Decompress(string[] sources, string destination) {
        Assembly? assembly = Assembly.GetEntryAssembly();
        if (assembly == null) {
            Console.Error.WriteLine("Could not find main assembly.");
            return false;
        }

        IntPtr hModule = NativeLibrary.Load("patcher.dll", assembly, null);
        if (hModule == IntPtr.Zero) {
            Console.Error.WriteLine("NativeLibrary.Load(patcher.dll) failed.");
            return false;
        }

        IntPtr startAddress = NativeLibrary.GetExport(hModule, "Start");
        if (startAddress == IntPtr.Zero) {
            Console.Error.WriteLine("NativeLibrary.GetExport(patcher.dll, Start) failed.");
            return false;
        }

        DecompressDelegate _decompress = Marshal.GetDelegateForFunctionPointer<DecompressDelegate>(startAddress - (START_OFFSET - DECOMPRESS_OFFSET));

        return _decompress(sources, sources.Length, destination);
    }
}
