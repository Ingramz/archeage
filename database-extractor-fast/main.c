#define _GNU_SOURCE
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <stdbool.h>

#include <mbedtls/aes.h>

// Assumes unsigned int is a 32-bit integer.  Change as needed
static unsigned int s_GameRand_High = 1;
static unsigned int s_GameRand_Low = 1 ^ 0x49616E42;

// implements the Microsoft-like interface for rand with new function names
int gamerand(void)
{
    s_GameRand_High = (s_GameRand_High << 16) + (s_GameRand_High >> 16);
    s_GameRand_High += s_GameRand_Low;
    s_GameRand_Low += s_GameRand_High;
    return s_GameRand_High;
}

void sgamerand(unsigned int seed)
{
	s_GameRand_High = seed;
	s_GameRand_Low = seed ^ 0x49616E42;
}

void gamerand_fill(uint8_t *buffer, int size)
{
    unsigned int *intbuffer = (unsigned int *)buffer;
    int intbuffersize = size/ 4;
    for (int i = 0; i < intbuffersize; i++)
    {
        intbuffer[i] = gamerand();
    }

    for (int i = 0; i < size - intbuffersize * 4; i++) {
        buffer[intbuffersize * 4 + i] = gamerand() & 0xFF;
    }
}

int custom_mbedtls_aes_crypt_cbc( mbedtls_aes_context *ctx,
                    int mode,
                    size_t length,
                    unsigned char iv[16],
                    const unsigned char *input,
                    unsigned char *output )
{
    int i;
    int ret = -0x006E;
    unsigned char temp[16];

    if( length % 16 )
        return( MBEDTLS_ERR_AES_INVALID_INPUT_LENGTH );

    if( mode == MBEDTLS_AES_DECRYPT )
    {
        while( length > 0 )
        {
            for( i = 0; i < 16; i++ )
                output[i] = (unsigned char)( input[i] ^ iv[i] );

            ret = mbedtls_aes_crypt_ecb( ctx, mode, output, output );
            if( ret != 0 )
                goto exit;
            memcpy( iv, output, 16 );

            input  += 16;
            output += 16;
            length -= 16;
        }
    }
    else
    {
        while( length > 0 )
        {
            for( i = 0; i < 16; i++ )
                output[i] = (unsigned char)( input[i] ^ iv[i] );

            ret = mbedtls_aes_crypt_ecb( ctx, mode, output, output );
            if( ret != 0 )
                goto exit;
            memcpy( iv, output, 16 );

            input  += 16;
            output += 16;
            length -= 16;
        }
    }
    ret = 0;

exit:
    return( ret );
}

int n = 0;

void unk1(uint16_t * a, unsigned int aLength, uint16_t * b, unsigned int bLength) {
    uint16_t * temp = malloc(aLength * sizeof(uint16_t));
    memcpy(temp, a, aLength * sizeof(uint16_t));
    memset(a, 0, aLength * sizeof(uint16_t));

    for (int i = 0; i < aLength; i++) {
        for (int j = 0; j < bLength; j++) {
            unsigned int v6 = b[j] * temp[i];
            unsigned int v8 = i + j;
            while (v6 > 0) {
                assert(v8 < aLength);

                unsigned int v7 = a[v8] + v6;

                a[v8] = v7 & 0xFFFF;
                v6 = v7 >> 16;
                v8++;
            }
        }
    }

    free(temp);
}

void double_values(uint16_t * a, unsigned int length, unsigned int temp) {
    for (int i = 0; i < length; i++) {
        unsigned int v3 = temp | (2 * a[i]);
        a[i] = v3 & 0xFFFF;
        temp = v3 >> 16;
    }

    assert(temp == 0);
}

void unk3(uint16_t * a, unsigned int aLength, uint16_t * b, unsigned int bLength)
{
    unsigned int i;
    unsigned int v4 = 0;

    for (i = 0; i < aLength; ++i) {
        unsigned int v6;

        if (i >= bLength) {
            v6 = 0;
        } else {
            v6 = b[i];
        }

        unsigned int v5 = v4 + v6;
        v4 = a[i] < v4 + v6;
        a[i] -= v5;
    }

    assert(v4 == 0);

    while (i < bLength) {
        assert(b[i] == 0);
        ++i;
    }
}


int compare(uint16_t * a, unsigned int aLength, uint16_t * b, unsigned int bLength)
{
    int result;
    unsigned int i;

    if (aLength <= bLength) {
        if (bLength <= aLength) {
            i = aLength - 1;
            goto LABEL_16;
        }

        for (i = bLength - 1; i >= aLength; --i) {
            if (b[i]) {
                return 0xFFFFFFFF;
            }
        }

        while (1) {
LABEL_16:
            if (a[i] > b[i]) {
                return 1;
            }

            if (a[i] < b[i]) {
                return 0xFFFFFFFF;
            }

            if (i == 0) {
                break;
            }

            --i;
        }

        result = 0;
    } else {
        for (i = aLength - 1; ; --i) {
            if (i < bLength) {
                goto LABEL_16;
            }

            if (a[i]) {
                break;
            }
        }

        result = 1;
    }

    return result;
}

void zero_out_buffer(uint16_t *a, unsigned int length, uint16_t firstValue)
{
    a[0] = firstValue;

    for (unsigned int i = 1; i < length; ++i) {
        a[i] = 0;
    }
}

bool contains_only_zeroes(uint16_t * a, unsigned int length)
{
    for (unsigned int i = 0; i < length; ++i) {
        if (a[i] > 0) {
            return false;
        }
    }

    return true;
}

void unk5(uint16_t * a, unsigned int aLength, uint16_t * b, unsigned int bLength, uint16_t * c, unsigned int cLength, uint16_t * d, unsigned int dLength)
{
    assert(!contains_only_zeroes(b, bLength));

    zero_out_buffer(d, dLength, 0);
    zero_out_buffer(c, cLength, 0);

    unsigned int v6 = aLength;
    while (true) {
        if (v6 == 0) {
            break;
        }

        v6--;

        unsigned int v7 = 16;
        while (v7--) {
            double_values(d, dLength, (a[v6] >> v7) & 1);

            if (compare(b, bLength, d, dLength) > 0) {
                double_values(c, cLength, 0);
            } else {
                double_values(c, cLength, 1);
                unk3(d, dLength, b, bLength);
            }
        }
    }
}

void no_idea_what_this_is_allocating(uint16_t ** a, unsigned int * aLength, unsigned int size) {
    *aLength = size;
    *a = malloc(size * sizeof(uint16_t));
}

void copy_b_to_a(uint16_t ** a, unsigned int * aLength, uint16_t * b, unsigned int bLength) {
    no_idea_what_this_is_allocating(a, aLength, bLength);
    memcpy(*a, b, *aLength * sizeof(uint16_t));
}

void assign_b_to_a(uint16_t * a, unsigned int aLength, uint16_t * b, unsigned int bLength)
{
  uint16_t * v2;
  unsigned int v2Length;
  uint16_t * v3;
  unsigned int v3Length;

  no_idea_what_this_is_allocating(&v3, &v3Length, aLength);
  copy_b_to_a(&v2, &v2Length, a, aLength);
  unk5(v2, v2Length, b, bLength, v3, v3Length, a, aLength);

  free(v2);
  free(v3);
}

void copy_b_to_a_2(uint16_t * a, unsigned long aLength, uint16_t * b, unsigned long bLength)
{
  unsigned int i;

  for (i = 0; i < aLength && i < bLength; ++i) {
    a[i] = b[i];
  }

  while ( i < aLength ) {
    a[i++] = 0;
  }

  while ( 1 ) {
    if ( i >= bLength )
      break;

    assert(b[i] == 0);

    ++i;
  }
}

void unk6(uint16_t * a, unsigned long aLength, uint16_t * b, unsigned long bLength, uint16_t * c, unsigned long cLength, uint16_t * d, unsigned long dLength)
{
  unsigned int v5; // [rsp+20h] [rbp-48h]
  bool firstTime; // [rsp+24h] [rbp-44h]
  uint16_t * a1a; // [rsp+28h] [rbp-40h] BYREF
  unsigned int a1aLength;
  uint16_t v8; // [rsp+38h] [rbp-30h]
  uint16_t * v9; // [rsp+40h] [rbp-28h] BYREF
  unsigned int v9Length;

  no_idea_what_this_is_allocating(&a1a, &a1aLength, 2 * aLength + 1);
  zero_out_buffer(a1a, a1aLength, 1);
  firstTime = true;
  v5 = bLength;
  while ( v5-- )
  {
    v8 = 0x8000;
    do
    {
      if ( !firstTime )
      {
        copy_b_to_a(&v9, &v9Length, a1a, a1aLength);
        unk1(a1a, a1aLength, v9, v9Length);
        assign_b_to_a(a1a, a1aLength, c, cLength);
        free(v9);
      }
      if ( (v8 & b[v5]) != 0 )
      {
        unk1(a1a, a1aLength, a, aLength);
        assign_b_to_a(a1a, a1aLength, c, cLength);
        firstTime = false;
      }
      v8 >>= 1;
    }
    while ( v8 );
  }
  copy_b_to_a_2(d, dLength, a1a, a1aLength);

  free(a1a);
}

void unk7(uint16_t * a, unsigned long aLength, uint16_t * b, unsigned long bLength, uint16_t * c, unsigned long cLength, uint16_t * d, unsigned long dLength, char *a2, unsigned int a3, char *a4, unsigned int a5)
{
  memcpy(a, a4, a5);
  unk6(a, aLength, c, cLength, d, dLength, b, bLength);
  memcpy(a2, b, a3);
}

uint32_t findUint32(uint8_t * buf0, unsigned int dllfsize, uint8_t * startPattern, size_t startPatternSize, uint8_t * endPattern, size_t endPatternSize) {
    unsigned int i = 0;
    while (i < dllfsize) {
        uint8_t * pos = memmem(buf0 + i, dllfsize - i, startPattern, startPatternSize);
        assert(pos);

        uint8_t * pos2 = memmem(pos + startPatternSize, dllfsize - (size_t)(pos - buf0) - i, endPattern, endPatternSize);
        if (pos2 && pos2 - pos - startPatternSize == 4) {
            printf("%08lx\n", pos - buf0 + startPatternSize);

            uint32_t val = *((uint32_t*)pos2 - 1);

            return val;
        } else {
            i = (size_t)(pos - buf0 + 1);
        }
    }

    assert(false);

    return 0;
}

int main(int argc, char *argv[]) {
    if (argc != 4) {
        printf("extractor <dll path> <database path> <destination path>");
        return 0;
    }

    char *dllFile = argv[1];
    char *databaseFile = argv[2];
    char *destinationFile = argv[3];
    #if 1
    FILE *dllf = fopen(dllFile, "rb");
    fseek(dllf, 0, SEEK_END);
    long dllfsize = ftell(dllf);
    rewind(dllf);  // same as rewind(f);

    uint8_t *buf0 = malloc(dllfsize);
    assert(fread(buf0, 1, dllfsize, dllf) == dllfsize);
    fclose(dllf);


    uint8_t cdstartpattern[] = { 0x48, 0x89, 0x84, 0x24, 0x60, 0x01, 0x00, 0x00, 0xB8 };
    uint8_t * cx_pos = memmem(buf0, dllfsize, cdstartpattern, sizeof(cdstartpattern));
    assert(cx_pos != NULL);

    uint8_t * cdstart = cx_pos + sizeof(cdstartpattern);

    printf("%08lX\n", cdstart - buf0);

    uint8_t l1locpattern[] = { 0x25, 0xFF, 0xFF, 0x00, 0x00, 0x83, 0xC0 };
    uint8_t * l1loc = memmem(buf0, dllfsize, l1locpattern, sizeof(l1locpattern));
    assert(l1loc != NULL);
    assert(l1loc[sizeof(l1locpattern) + 1] == 0x8B);
    assert(l1loc[sizeof(l1locpattern) + 2] == 0xC0);



    uint8_t k1SstartPattern[] = { 0x33, 0xD2, 0xB8 };
    uint8_t k1SendPattern[] = { 0xB9, 0x03, 0x00, 0x00, 0x00, 0xF7, 0xF1, 0x8B, 0xC2, 0x8D, 0x04, 0xC5, 0x10, 0x00, 0x00, 0x00 };
    uint32_t k1seed = findUint32(buf0, dllfsize, k1SstartPattern, sizeof(k1SstartPattern), k1SendPattern, sizeof(k1SendPattern));
    //uint32_t k1seed = *(uint32_t*)(cdstart - 0x325);
    printf("Key 1 seed: 0x%08X\n", k1seed);

    uint8_t iv1SstartPattern[] = { 0x33, 0xD2, 0xB8, 0xAA, 0xBB, 0xCC, 0xDD, 0xB9, 0x03, 0x00, 0x00, 0x00, 0xF7, 0xF1, 0x8B, 0xC2, 0x8D, 0x04, 0xC5, 0x10, 0x00, 0x00, 0x00 };
    iv1SstartPattern[6] = (k1seed >> 24) & 0xFF;
    iv1SstartPattern[5] = (k1seed >> 16) & 0xFF;
    iv1SstartPattern[4] = (k1seed >> 8) & 0xFF;
    iv1SstartPattern[3] = k1seed & 0xFF;

    uint8_t * iv1loc = memmem(buf0, dllfsize, iv1SstartPattern, sizeof(iv1SstartPattern));
    assert(iv1loc != NULL);
    uint32_t iv1s = *(uint32_t*)(iv1loc + sizeof(iv1SstartPattern) + 0x90);
    printf("IV 1 seed: 0x%08X\n", iv1s);

    uint8_t l2startPattern[] = { 0x48, 0x8b, 0xf8, 0x48, 0x8b, 0xf1, 0xb9 };
    uint8_t l2endPattern[] = { 0xf3, 0xa4, 0xba };
    uint32_t l2_x = findUint32(buf0, dllfsize, l2startPattern, sizeof(l2startPattern), l2endPattern, sizeof(l2endPattern));
   // uint32_t l2_x = *(uint32_t*)(cdstart + 0x409);
    //uint32_t l2_x = l1loc[sizeof(l1locpattern) - 0x1E];
    printf("L2: 0x%08X\n", l2_x);

    uint8_t fillerSeedstartPattern[] = { 0x48, 0x8b, 0xf8, 0x48, 0x8b, 0xf1, 0xb9, 0x48, 0x00, 0x00, 0x00, 0xf3, 0xa4, 0xba };
    uint8_t fillerSeedendPattern[] = { 0x48 };

    *((uint32_t*)(fillerSeedstartPattern + 7)) = l2_x;

    uint32_t fillers = findUint32(buf0, dllfsize, fillerSeedstartPattern, sizeof(fillerSeedstartPattern), fillerSeedendPattern, sizeof(fillerSeedendPattern));

 //   uint32_t fillers = *(uint32_t*)(cdstart + 0x410);

    printf("Filler seed: 0x%08X\n", fillers);

    /*uint8_t l1startPattern[] = { 0x41, 0xb8 };
    uint8_t l1endPattern[] = { 0x48, 0x8b, 0x94, 0x24, 0x98, 0x03, 0x00, 0x00  };
    uint32_t l1_x = findUint32(buf0, dllfsize, l1startPattern, sizeof(l1startPattern), l1endPattern, sizeof(l1endPattern));*/
    //uint32_t l1_x = *(uint32_t*)(cdstart + 0x486);
    uint32_t l1_x = l1loc[sizeof(l1locpattern)];
    printf("L1: 0x%08X\n", l1_x);

    /*uint8_t tailMultiplierStartPattern[] = { 0x48, 0xC7, 0x84, 0x24, 0x40, 0x04, 0x00, 0x00 };
    uint8_t tailMultiplierEndPattern[] = { 0x48, 0x8B, 0x84, 0x24, 0x40, 0x04, 0x00, 0x00 };
    uint32_t tailMultiplier = findUint32(buf0, dllfsize, tailMultiplierStartPattern, sizeof(tailMultiplierStartPattern), tailMultiplierEndPattern, sizeof(tailMultiplierEndPattern));*/
    //uint32_t tailMultiplier = *(uint32_t*)(cdstart - 0x37);

    uint8_t tailMultiplierPattern[] = { 0x90, 0x48, 0xC7, 0x84, 0x24 };
    uint8_t * tailMultiplierLoc = memmem(buf0, dllfsize, tailMultiplierPattern, sizeof(tailMultiplierPattern));
    assert(tailMultiplierLoc != NULL);
    uint32_t tailMultiplier = *(uint32_t*)(tailMultiplierLoc + 0x9);
    printf("TailMultiplier: 0x%08X\n", tailMultiplier);

    uint8_t * c_x = malloc(l2_x);
    uint8_t * d_x = malloc(l2_x);



    for (int i = 0; i < l2_x; i+=2) {
        c_x[i] = cdstart[0];
        c_x[i + 1] = cdstart[1];
        assert(cdstart[2] == 0x00);
        assert(cdstart[3] == 0x00);
        cdstart += 0xD;
    }

    for (int i = 0; i < l2_x; i+=2) {
        d_x[i] = cdstart[0];
        d_x[i + 1] = cdstart[1];
        assert(cdstart[2] == 0x00);
        assert(cdstart[3] == 0x00);
        cdstart += 0xD;
    }

    const unsigned int l1 = l1_x;
    const unsigned int l2 = l2_x;
    const unsigned int tail = tailMultiplier * l2;

    const unsigned int key1Seed =   k1seed;
    const unsigned int iv1Seed =    iv1s;

    const unsigned int fillerSeed = fillers;
    #endif

    //*555230*//
    #if 0
    const unsigned int l1 = 86;
    const unsigned int l2 = 88;
    const unsigned int tail = l2 * 10;
    const unsigned int key1Seed = 0x1F450FDF;
    const unsigned int iv1Seed = 0xFFFC68CD;
    const unsigned int fillerSeed = 0xCEC0279A;

    uint8_t c_x[] = {0x2B, 0xCF,
0x4F, 0x3F,
0x5E, 0x1F,
0x18, 0xFE,
0x18, 0xAC,
0xB0, 0xBF,
0xB8, 0x77,
0x08, 0x39,
0x65, 0x7F,
0x28, 0x77,
0xF4, 0xFF,
0x2C, 0x7E,
0x0B, 0xB7,
0x8C, 0x7B,
0x86, 0x7C,
0xA1, 0x39,
0x19, 0x96,
0x65, 0x9F,
0x37, 0xFB,
0x7B, 0x6F,
0x33, 0x69,
0x6F, 0x5F,
0xA6, 0x40,
0x3E, 0x59,
0x10, 0x0D,
0x19, 0x4B,
0xC2, 0xE7,
0x66, 0x5F,
0xFB, 0xAF,
0x08, 0x6B,
0x51, 0xF3,
0xE0, 0x7D,
0x52, 0xAF,
0x93, 0x7F,
0x6C, 0x7D,
0x8E, 0xCD,
0x0A, 0x4A,
0x48, 0x2D,
0x00, 0x7E,
0xC7, 0xFB,
0x29, 0xFB,
0x66, 0xFF,
0x4E, 0x9F,
0xD5, 0x7D};

uint8_t d_x[] = {
0x19, 0x1A,
0xCF, 0xEA,
0xDE, 0xC9,
0x61, 0xBD,
0xD3, 0xB3,
0x06, 0x68,
0x5C, 0x16,
0xBF, 0x09,
0xFA, 0x79,
0x33, 0x66,
0x0E, 0xFC,
0xA4, 0xB5,
0x50, 0x15,
0x5D, 0x71,
0xAB, 0x54,
0x88, 0xCC,
0xED, 0x0C,
0x25, 0x61,
0x3E, 0x0C,
0x74, 0x2B,
0xEF, 0xCA,
0x02, 0xE9,
0x37, 0xF2,
0xE5, 0x24,
0x92, 0x88,
0xDC, 0x7F,
0xCD, 0xA2,
0x51, 0x75,
0xB8, 0x83,
0x4B, 0x91,
0x5C, 0x12,
0xD7, 0xA4,
0xA5, 0x32,
0x4B, 0x45,
0xF4, 0x03,
0x01, 0x2C,
0x92, 0xC9,
0xD7, 0x84,
0xFD, 0xF6,
0x7F, 0x0A,
0x79, 0x6A,
0x32, 0xB3,
0xE4, 0x08,
0xB3, 0xBA};
#endif
    //*555230*//


    const unsigned int key2Seed =   key1Seed - 1;
    const unsigned int iv2Seed =    iv1Seed ^ 0xFFFFFFFF;

    const unsigned int key1Size = ((key1Seed % 3) * 8 + 0x10) * 8;
    const unsigned int key2Size = ((key2Seed % 3) * 8 + 0x10) * 8;

    uint8_t key1[key1Size / 8];
    memset(key1, 0, key1Size / 8);
    sgamerand(key1Seed);
    for (int i = 0; i < key1Size / 8; i += 4) {
        *(((int *) key1) + i / 4) = gamerand();
    }

    for (int i = 0; i < key1Size / 8; i++) {
        printf("%02X ", key1[i]);
    }
    printf("\n");

    uint8_t iv1[16];
    memset(iv1, 0, 16);
    sgamerand(iv1Seed);
    for (int i = 0; i < 16; i += 4) {
        *(((int *) iv1) + i / 4) = gamerand();
    }

    for (int i = 0; i < 16; i++) {
        printf("%02X ", iv1[i]);
    }
    printf("\n");

    FILE *f = fopen(databaseFile, "rb");
    fseek(f, 0, SEEK_END);
    long fsize = ftell(f);
    rewind(f);  // same as rewind(f);

    uint8_t *buf1 = malloc(fsize);
    assert(fread(buf1, 1, fsize, f) == fsize);
    fclose(f);

    unsigned int filesize = fsize;
    unsigned int start = 16 - filesize % 16;

    uint8_t * buf1_start = &buf1[start];

    mbedtls_aes_context ctx;
    mbedtls_aes_init(&ctx);
    mbedtls_aes_setkey_dec(&ctx, key1, key1Size);
    assert(!custom_mbedtls_aes_crypt_cbc(&ctx, MBEDTLS_AES_DECRYPT, 16 * ((filesize - start) / 16), iv1, buf1_start, buf1_start));
    mbedtls_aes_free(&ctx);

    int something = tail / l2;
    filesize -= tail;

    uint16_t * a;
    unsigned int aLength;
    uint16_t * b;
    unsigned int bLength;
    uint16_t * c;
    unsigned int cLength;
    uint16_t * d;
    unsigned int dLength;

    no_idea_what_this_is_allocating(&a, &aLength, l2 / 2);
    no_idea_what_this_is_allocating(&b, &bLength, l2 / 2);
    no_idea_what_this_is_allocating(&c, &cLength, l2 / 2);
    no_idea_what_this_is_allocating(&d, &dLength, l2 / 2);

    memcpy(c, c_x, l2);
    memcpy(d, d_x, l2);

    sgamerand(fillerSeed);

    uint8_t * buf1_start_2 = &buf1[filesize];
    uint8_t * buf1_start_3 = &buf1[0];

    for ( int j = 0; j < something; ++j ) {
        unk7(a, aLength, b, bLength, c, cLength, d, dLength, buf1_start_3, l1, buf1_start_2, l2);
        gamerand_fill(buf1_start_2, l1);
        buf1_start_2 += l2;
        buf1_start_3 += (gamerand() & 0xFFFF) + l1;
    }

    free(a);
    free(b);
    free(c);
    free(d);

    uint8_t key2[key2Size / 8];
    memset(key2, 0, key2Size / 8);
    sgamerand(key2Seed);
    for (int i = 0; i < key2Size / 8; i += 4) {
        *(((int *) key2) + i / 4) = gamerand();
    }

    for (int i = 0; i < key2Size / 8; i++) {
        printf("%02X ", key2[i]);
    }
    printf("\n");

    uint8_t iv2[16];
    memset(iv2, 0, 16);
    sgamerand(iv2Seed);
    for (int i = 0; i < 16; i += 4) {
        *(((int *) iv2) + i / 4) = gamerand();
    }

    for (int i = 0; i < 16; i++) {
        printf("%02X ", iv2[i]);
    }
    printf("\n");

    uint8_t * buf1_start_4 = &buf1[0];

    mbedtls_aes_context ctx2;
    mbedtls_aes_init(&ctx2);
    mbedtls_aes_setkey_dec(&ctx2, key2, key2Size);

    assert(!custom_mbedtls_aes_crypt_cbc(&ctx2, MBEDTLS_AES_DECRYPT, 16 * (filesize / 16), iv2, buf1_start_4, buf1_start_4));
    mbedtls_aes_free(&ctx2);

    buf1_start_4[0] = 80;
    buf1_start_4[1] = 75;
    buf1_start_4[2] = 3;
    buf1_start_4[3] = 4;
    buf1_start_4[4] = 20;
    buf1_start_4[5] = 0;
    buf1_start_4[6] = 0;
    buf1_start_4[7] = 0;
    buf1_start_4[8] = 8;
    buf1_start_4[9] = 0;

    FILE *out_file = fopen(destinationFile, "wb");
    fwrite(buf1 , 1 , filesize , out_file );
    fclose(out_file);

    return 0;
}
