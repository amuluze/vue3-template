/**
 * @Author     : Amu
 * @Date       : 2024/11/10 23:31
 * @Description:
 */
import { defineStore } from 'pinia'
import type { PermissionsState } from '@/interface/store.ts'

export const usePermissionStore = defineStore('permission', {
    state: (): PermissionsState => ({
        permissions: [],
    }),
    getters: {},
    actions: {
        setPermissions(permissions: string[]) {
            this.permissions = permissions
        },
    },
    persist: true,
})
