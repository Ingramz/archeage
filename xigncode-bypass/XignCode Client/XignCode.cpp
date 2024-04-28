#define _CRT_SECURE_NO_WARNINGS

#include "client.hpp"

#include "XignCode.hpp"

#include "../XignCode Library/XignReader.hpp"
#include "../XignCode Library/XignWriter.hpp"

namespace XignCode
{
	BOOL XIGNAPI _XignCode_initialize(const wchar_t* license_key, const wchar_t* xigncode_directory, int unknown)
	{
		/*FILE* fp;

		fp = fopen("C:\\file.txt", "w+");*/

		printf("_XignCode_initialize - %ws, %ws, %d\n", license_key, xigncode_directory, unknown);
		/*fflush(fp);
		fclose(fp);*/

		return TRUE;
	}
	
	BOOL XIGNAPI _XignCode_uninitialize()
	{
		printf("_XignCode_uninitialize\n");
		return TRUE;
	}

	BOOL XIGNAPI _XignCode_start_service()
	{
		printf("_XignCode_start_service\n");
		return TRUE;
	}

	BOOL XIGNAPI _XignCode_stop_service()
	{
		printf("_XignCode_stop_service\n");
		return TRUE; 
	}
	
	BOOL XIGNAPI _XignCode_make_response(unsigned char* request, unsigned int size, _XignCode_heartbeat_callback_t response_callback, void* unknown)
	{
		/*HMODULE x3 = GetModuleHandleW(L"x3_x64.xem");
		if (x3) {
			LPVOID addr = GetProcAddress(x3, (LPCSTR)1);

			LPVOID ptr;
			((int (*)(void** function_ptr, FUNCTION_DISPATCH_TYPE function_type))addr)(&ptr, FDT_INITIALIZE);

			((BOOL(*)(const wchar_t* license_key, const wchar_t* xigncode_directory, int unknown))ptr)(L"AG1cjbyctNj0", L"Z:\\home\\indrek\\aa-clean\\game\\bin64\\.\\XIGNCODE\\NA", 0);
		}*/

		printf("_XignCode_make_response - %#p, %08X, %#p, %#p\n", request, size, response_callback, unknown);
		return TRUE;
	}

	BOOL XIGNAPI _XignCode_set_error_callback(_XignCode_error_callback_t error_callback, void* unknown)
	{
		printf("_XignCode_set_callback - %08X, %#p\n", error_callback, unknown);
		return TRUE;
	}
	
	BOOL XIGNAPI _XignCode_set_option(unsigned int option, void** param)
	{
		printf("_XignCode_set_option - %08X, %#p\n", option, *param);
		return TRUE;
	}

	unsigned int XIGNAPI _XignCode_function_dispatch(void** function_ptr, FUNCTION_DISPATCH_TYPE function_type)
	{
		switch (function_type)
		{
		case FDT_INITIALIZE:
			*function_ptr = _XignCode_initialize;
			break;
		
		case FDT_UNINITIALIZE:
			*function_ptr = _XignCode_uninitialize;
			break;

		case FDT_START_SERVICE:
			*function_ptr = _XignCode_start_service;
			break;

		case FDT_STOP_SERVICE:
			*function_ptr = _XignCode_stop_service;
			break;

		case FDT_MAKE_RESPONSE:
			*function_ptr = _XignCode_make_response;
			break;
			
		case FDT_SET_ERROR_CALLBACK:
			*function_ptr = _XignCode_set_error_callback;
			break;
		
		case FDT_SET_OPTION:
			*function_ptr = _XignCode_set_option;
			break;

		default:
			printf("FunctionDispatch - function_ptr: %#p, function_type: %08x\n", function_ptr, (int)function_type);
			break;
		}
		
		return 0;
	}
}