/**
 * @Author     : Amu
 * @Date       : 2024/11/18 18:59
 * @Description:
 */
import request from '@/api'
import type { RoleQueryResult, UserCreateArgs, UserQueryResult } from '@/interface/account.ts'

export async function queryUser() {
    return request.get<UserQueryResult>('/api/v1/user/user_query', {})
}

export async function createUser(params: UserCreateArgs) {
    return request.post('/api/v1/user/user_create', params)
}

export async function queryRole() {
    return request.get<RoleQueryResult>('/api/v1/role/role_query', {})
}
