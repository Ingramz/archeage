using Elskom.Generic.Libs;
using System;
using System.Security.Cryptography;
using System.Text;

public class AACipher {
    private static readonly byte[] KEY = Encoding.ASCII.GetBytes(@"Archeage!(*!");

    public static string Encrypt(string input) {
        // Calculate the padding size required to make the input string length a multiple of 8
        int padding = 8 - (input.Length % 8);

        // Pad the byte array with the padding size to make the length a multiple of 8
        byte[] paddedBytes = new byte[input.Length + padding];

        // Copy the input bytes to the start of the padded bytes array
        Encoding.ASCII.GetBytes(input, paddedBytes);

        // Fill the rest of the padded bytes with the padding size
        paddedBytes.AsSpan(input.Length).Fill((byte)padding);

        // Reverse the byte order in 4 byte chunks
        paddedBytes = Swap32(paddedBytes);

        // Encrypt the bytes using BlowFish in ECB cipher mode, with key KEY then reverse the byte order in 4 byte chunks
        byte[] encryptedBytes = Swap32(new BlowFish(KEY).EncryptECB(paddedBytes));

        // Convert the encrypted bytes to a lowercase hexadecimal string
        return Convert.ToHexString(encryptedBytes).ToLowerInvariant();
    }

    public static string Decrypt(string input) {
        // Make sure the input string length is a multiple of 8
        if (input.Length % 8 != 0)
            throw new Exception("Invalid input length");

        // Convert the input string to a byte array then reverse the byte order in 4 byte chunks
        byte[] inputBytes = Swap32(Convert.FromHexString(input));

        // Decript the bytes using BlowFish in ECB cipher mode, with key KEY then reverse the byte order in 4 byte chunks
        byte[] decryptedBytes = Swap32(new BlowFish(KEY).Decrypt(inputBytes, CipherMode.ECB));

        // Read the last byte of the decrypted data to get the padding size
        int padding = decryptedBytes[decryptedBytes.Length - 1];

        if (padding < 1 || padding > 8)
            throw new Exception("Invalid padding");

        return Encoding.ASCII.GetString(decryptedBytes, 0, decryptedBytes.Length - padding);
    }

    // Swap the byte order of the input byte array in 4 byte chunks (1,2,3,4,5,6,7,8 -> 4,3,2,1,8,7,6,5)
    private static byte[] Swap32(byte[] input) {
        byte[] output = new byte[input.Length];

        // Iterate through every 4 bytes in the input array, reversing the order of the bytes in 4 byte chunks
        for (int i = 0; i < input.Length; i += 4) {
            output[i] = input[i + 3];
            output[i + 1] = input[i + 2];
            output[i + 2] = input[i + 1];
            output[i + 3] = input[i];
        }

        return output;
    }
}
