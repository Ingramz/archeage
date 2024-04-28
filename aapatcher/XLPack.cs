using System;
using System.Runtime.InteropServices;

public class XLPack
{
    [DllImport("xlpack.dll", EntryPoint = "?ApplyPatchPak@@YA_NPBD0@Z", CharSet = CharSet.Ansi, CallingConvention = CallingConvention.Cdecl)]
    public static extern bool ApplyPatchPak([MarshalAs(UnmanagedType.LPStr)] string to, [MarshalAs(UnmanagedType.LPStr)] string pathToPak);

    [DllImport("xlpack.dll", EntryPoint = "?Copy@@YA_NPBD0@Z", CharSet = CharSet.Ansi, CallingConvention = CallingConvention.Cdecl)]
    public static extern bool Copy([MarshalAs(UnmanagedType.LPStr)] string from, [MarshalAs(UnmanagedType.LPStr)] string to);

    [DllImport("xlpack.dll", EntryPoint = "?CopyDir@@YA_NPBD0@Z", CharSet = CharSet.Ansi)]
    public static extern bool CopyDir([MarshalAs(UnmanagedType.LPStr)] string from, [MarshalAs(UnmanagedType.LPStr)] string to);

    //?CopyListFile@@YA_NPBD00@Z

    [DllImport("xlpack.dll", EntryPoint = "?CreateFileSystem@@YA_NXZ", CallingConvention = CallingConvention.Cdecl)]
    public static extern bool CreateFileSystem();

    [DllImport("xlpack.dll", EntryPoint = "?CreatePak@@YA_NPBD_N@Z", CharSet = CharSet.Ansi, CallingConvention = CallingConvention.Cdecl)]
    public static extern bool CreatePak([MarshalAs(UnmanagedType.LPStr)] string to, [MarshalAs(UnmanagedType.Bool)] bool unk);

    //?DeleteDir@@YA_NPBD@Z

    //?DeleteList@@YA_NPBD0@Z

    [DllImport("xlpack.dll", EntryPoint = "?DestroyFileSystem@@YAXXZ", CallingConvention = CallingConvention.Cdecl)]
    public static extern void DestroyFileSystem();

    //?FClose@@YAXAAPAUFile@@@Z

    //?FDelete@@YA_NPBD@Z

    //?FEof@@YAHPAUFile@@@Z

    //?FFlush@@YAHPAUFile@@@Z

    //?FGetStat@@YA_NPAUFile@@PAUpack_stat_t@@@Z

    //?FOpen@@YAPAUFile@@PBD0@Z

    //?FRead@@YA_JPAUFile@@PAD_J@Z

    //?FReadAll@@YA_JPAUFile@@PAPADAA_J@Z

    //?FReserveSize@@YA_NPAUFile@@_J@Z

    //?FSeek@@YAHAAPAUFile@@_JH@Z

    //?FSetStat@@YA_NPAUFile@@PBUpack_stat_t@@@Z

    //?FSize@@YA_JPAUFile@@@Z

    //?FTell@@YA_JPAUFile@@@Z

    //?FWrite@@YA_JPAUFile@@PBD_J@Z

    ///?GetFileArchivePath@@YAPBDPAUFile@@@Z

    ///?GetModificationTime@@YA_JPAUFile@@@Z

    //?GetPakPath@@YAPBDPAUFile@@@Z

    //?Getc@@YAHPAUFile@@@Z

    //?IsFileExist@@YA_NPBD@Z

    //?IsInPak@@YA_NPAUFile@@@Z

    //?MergePatchDeletedList@@YAXPBD0@Z

    [DllImport("xlpack.dll", EntryPoint = "?Mount@@YAPAXPBD0_N@Z", CharSet = CharSet.Ansi, CallingConvention = CallingConvention.Cdecl)]
    public static extern IntPtr Mount([MarshalAs(UnmanagedType.LPStr)] string where, [MarshalAs(UnmanagedType.LPStr)] string which, [MarshalAs(UnmanagedType.Bool)] bool compress);

    //?ReadableLength@@YA_JPAUFile@@@Z

    //?Ungetc@@YAHHPAUFile@@@Z

    [DllImport("xlpack.dll", EntryPoint = "?Unmount@@YA_NPAX@Z", CharSet = CharSet.Ansi, CallingConvention = CallingConvention.Cdecl)]
    public static extern bool Unmount(IntPtr handle);

    //?Unmount@@YA_NPBD@Z
}
