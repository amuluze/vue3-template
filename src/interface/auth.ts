/**
 * @Author     : Amu
 * @Date       : 2024/11/18 18:29
 * @Description:
 */

export interface LoginForm {
    username: string
    password: string
}

export interface LoginResponse {
    access_token: string
    refresh_token: string
}

export interface UpdatePassword {
    username: string
    old_password: string
    new_password: string
}

export interface UserInfo {
    id: string
    username: string
    status: number
    is_admin: number
}
