/**
 * @Author     : Amu
 * @Date       : 2024/11/24 12:23
 * @Description:
 */
import request from '@/api'
import type { CPUInfo, DiskInfoResult, MemInfo } from '@/interface/host.ts'

export async function queryCPUInfo() {
    return request.get<CPUInfo>('/api/v1/host/cpu_info', {})
}

export async function queryMemInfo() {
    return request.get<MemInfo>('/api/v1/host/mem_info', {})
}

export async function queryDiskInfo() {
    return request.get<DiskInfoResult>('/api/v1/host/disk_info', {})
}
