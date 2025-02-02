/**
 * @Author     : Amu
 * @Date       : 2024/11/24 12:51
 * @Description:
 */
import request from '@/mock'
import type { CPUInfo, DiskInfoResult, HostInfo, MemInfo } from '@/interface/host'

export async function queryHostInfo() {
    return request.get<HostInfo>('/api/v1/host/host_info', {})
}

export async function queryCPUInfo() {
    return request.get<CPUInfo>('/api/v1/host/cpu_info', {})
}

export async function queryMemInfo() {
    return request.get<MemInfo>('/api/v1/host/mem_info', {})
}

export async function queryDiskInfo() {
    return request.get<DiskInfoResult>('/api/v1/host/disk_info', {})
}
