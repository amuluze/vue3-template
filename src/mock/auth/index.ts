/**
 * @Author     : Amu
 * @Date       : 2024/11/24 12:35
 * @Description:
 */
import type { ResultData } from '@/interface/result'
import request from '@/mock'
import type { LoginResponse, UserInfo } from '@/interface/auth'

export async function login(): Promise<ResultData<any>> {
    return request.post<LoginResponse>('/api/v1/auth/login')
}

export async function logout(): Promise<ResultData<any>> {
    return request.post('/api/v1/auth/logout', {})
}

export async function getUserInfo(): Promise<ResultData<any>> {
    return request.get<UserInfo>('/api/v1/user/info', {})
}
