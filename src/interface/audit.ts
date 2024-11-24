/**
 * @Author     : Amu
 * @Date       : 2024/11/24 14:05
 * @Description:
 */

export interface Audit {
    id: number
    username: string
    operate: string
    created: string
}

export interface AuditQueryResult {
    data: Audit[]
    total: number
    page: number
    size: number
}

export interface SystemAuditQueryParams {
    type: string
    page: number
    size: number
}
