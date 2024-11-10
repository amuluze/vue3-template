export interface UserState {
    token: string
    refresh: string
}

export interface AppState {
    isCollapse: boolean
}

export interface PermissionsState {
    permissions: string[]
}
