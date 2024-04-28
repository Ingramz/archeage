using System.IO;

public class FileUtil
{
    // https://stackoverflow.com/a/937558
    public static bool IsFileLocked(string path)
    {
        try
        {
            using (FileStream stream = new FileInfo(path).Open(FileMode.Open, FileAccess.Read, FileShare.None))
            {
                stream.Close();
            }
        }
        catch (IOException)
        {
            // the file is unavailable because it is:
            // still being written to
            // or being processed by another thread
            // or does not exist (has already been processed)
            return true;
        }

        // file is not locked
        return false;
    }
}
