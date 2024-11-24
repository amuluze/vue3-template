/**
 * @Author     : Amu
 * @Date       : 2024/11/24 12:51
 * @Description:
 */
import request from '@/mock'
import type { HostInfo } from '@/interface/host'

export async function queryHostInfo() {
    return request.get<HostInfo>('/api/v1/host/host_info', {})
}
