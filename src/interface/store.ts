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

export interface themeState {
    primary: string
    isDark: boolean
}
