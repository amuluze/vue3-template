import type { AppState } from '@/interface/store'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: (): AppState => ({
        isCollapse: false,
        language: 'zh',
    }),
    getters: {},
    actions: {
        setCollapse(collapse: boolean) {
            this.isCollapse = collapse
        },
        setLanguage(language: string) {
            this.language = language
        },
    },
    persist: true,
})
