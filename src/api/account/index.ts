/**
 * @Author     : Amu
 * @Date       : 2024/11/18 18:59
 * @Description:
 */
import request from '@/api'
import type { UserQueryResult } from '@/interface/account.ts'

export async function queryUser() {
    return request.get<UserQueryResult>('/api/v1/user/user_query', {})
}
