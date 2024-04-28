#include <Windows.h>
#include <psapi.h>

struct cryaction_dll {
	HMODULE dll;
	FARPROC oCreateGameFramework;
	FARPROC oCryModuleGetMemoryInfo;
	HMODULE hXignReplacement = 0;
	HMODULE hX2game = 0;
} cryaction;

extern "C" {
	FARPROC PA = 0;
	int runASM();

	void fCreateGameFramework() { PA = cryaction.oCreateGameFramework; runASM(); }
	void fCryModuleGetMemoryInfo() { PA = cryaction.oCryModuleGetMemoryInfo; runASM(); }
}

void setupFunctions() {
	cryaction.oCreateGameFramework = GetProcAddress(cryaction.dll, "CreateGameFramework");
	cryaction.oCryModuleGetMemoryInfo = GetProcAddress(cryaction.dll, "CryModuleGetMemoryInfo");
}

const WCHAR PROXY_DESTINATION_DLL[] = L"_cryaction.dll";
const WCHAR X2GAME_DLL[] = L"x2game.dll";
const WCHAR XIGNCODE_ORIGINAL_MODULE[] = L"x3_x64.xem";
const WCHAR XIGNCODE_REPLACEMENT_MODULE[] = L"x3_x64.dll";

const char* search(const char* haystack, size_t haystackLength, const char* needle, size_t needleLength) {
	for (size_t i = 0; i <= haystackLength - needleLength; ++i) {
		if (memcmp(haystack + i, needle, needleLength) == 0) {
			return haystack + i;
		}
	}

	return nullptr;
}

BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
	switch (ul_reason_for_call) {
	case DLL_PROCESS_ATTACH:
		cryaction.dll = LoadLibraryW(PROXY_DESTINATION_DLL);
		if (cryaction.dll)
		{
			setupFunctions();

			cryaction.hXignReplacement = LoadLibraryW(XIGNCODE_REPLACEMENT_MODULE);
			cryaction.hX2game = GetModuleHandleW(X2GAME_DLL);

			if (cryaction.hXignReplacement && cryaction.hX2game) {
				MODULEINFO modinfo;
				GetModuleInformation(GetCurrentProcess(), cryaction.hX2game, &modinfo, sizeof(modinfo));

				LPVOID location = (LPVOID)search((char*)modinfo.lpBaseOfDll, modinfo.SizeOfImage, (char*)XIGNCODE_ORIGINAL_MODULE, sizeof(XIGNCODE_ORIGINAL_MODULE));

				if (location)
				{
					DWORD dwOldProtect = 0;
					DWORD dwPatchLength = sizeof(XIGNCODE_REPLACEMENT_MODULE);

					VirtualProtect(location, dwPatchLength, PAGE_EXECUTE_READWRITE, &dwOldProtect);
					memcpy(location, XIGNCODE_REPLACEMENT_MODULE, sizeof(XIGNCODE_REPLACEMENT_MODULE));
					VirtualProtect(location, dwPatchLength, dwOldProtect, &dwOldProtect);
				}
				else
				{
					MessageBoxW(
						NULL,
						(LPCWSTR)L"Couldn't find string 'x3_x64.xem' in memory.",
						(LPCWSTR)L"Error",
						0x20000u
					);
					ExitProcess(1);
				}
			}
			else
			{
				MessageBoxW(
					NULL,
					(LPCWSTR)L"Couldn't load either x3_x64.dll or find handle for x2game.dll",
					(LPCWSTR)L"Error",
					0x20000u
				);
				ExitProcess(1);
			}
		}
		else
		{
			MessageBoxW(
				NULL,
				(LPCWSTR)L"Couldn't load _cryaction.dll",
				(LPCWSTR)L"Error",
				0x20000u
			);
			ExitProcess(1);
		}
		break;
	case DLL_PROCESS_DETACH:
		if (cryaction.dll) FreeLibrary(cryaction.dll);
		if (cryaction.hXignReplacement) FreeLibrary(cryaction.hXignReplacement);
		break;
	}
	return 1;
}
