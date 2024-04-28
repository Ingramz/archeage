using System;
using Dotx64Dbg;
using System.Runtime.InteropServices;

public class ExitPlugin : IPlugin
{
    [DllImport("x64bridge.dll", CallingConvention = CallingConvention.Cdecl, CharSet = CharSet.Ansi)]
    public static extern void GuiCloseApplication();

    [Command("exit")]
    void ExitCommand()
    {
        GuiCloseApplication();
    }
}
