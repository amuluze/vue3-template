export interface UserState {
    token: string
    refresh: string
}

export interface AppState {
    isCollapse: boolean
    language: string
}

export interface PermissionsState {
    permissions: string[]
}

export interface themeState {
    dark: boolean
}

export interface echartsThemeState {
    currentColorArray: string[]
}
