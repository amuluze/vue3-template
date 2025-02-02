/**
 * @Author     : Amu
 * @Date       : 2024/11/24 12:35
 * @Description:
 */
import type { ResultData } from '@/interface/result.ts'
import request from '@/mock'
import type { ResourceQueryResult, RoleQueryResult, UserQueryResult } from '@/interface/account.ts'

export async function queryUser(): Promise<ResultData<any>> {
    return request.get<UserQueryResult>('/api/v1/user/user_query', {})
}

export async function queryRole(): Promise<ResultData<any>> {
    return request.get<RoleQueryResult>('/api/v1/role/role_query', {})
}

export async function queryResource(): Promise<ResultData<any>> {
    return request.get<ResourceQueryResult>('/api/v1/resource/resource_query', {})
}
