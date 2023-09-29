using System;
using System.Runtime.InteropServices;

public class CustomCode
{
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool OpenClipboard(IntPtr hWndNewOwner);

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool CloseClipboard();

    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool EmptyClipboard();

    [DllImport("user32.dll", SetLastError = true)]
    public static extern IntPtr SetClipboardData(uint uFormat, IntPtr hMem);

    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern IntPtr GlobalAlloc(uint uFlags, UIntPtr dwBytes);

    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern IntPtr GlobalLock(IntPtr hMem);

    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern bool GlobalUnlock(IntPtr hMem);

    [DllImport("kernel32.dll", SetLastError = true)]
    public static extern IntPtr memcpy(IntPtr dest, IntPtr src, UIntPtr count);

    public static void SetTextToClipboard(string text)
    {
        // Abrir el portapapeles
        OpenClipboard(IntPtr.Zero);

        // Vaciar el portapapeles
        EmptyClipboard();

        // Asignar el valor deseado al portapapeles
        IntPtr hGlobal = GlobalAlloc(0x0002 /* GMEM_MOVEABLE */, (UIntPtr)((text.Length + 1) * 2));
        IntPtr source = Marshal.StringToHGlobalUni(text);
        IntPtr target = GlobalLock(hGlobal);
        memcpy(target, source, (UIntPtr)(text.Length * 2));
        GlobalUnlock(hGlobal);
        SetClipboardData(13 /* CF_UNICODETEXT */, hGlobal);

        // Cerrar el portapapeles
        CloseClipboard();
    }
}
