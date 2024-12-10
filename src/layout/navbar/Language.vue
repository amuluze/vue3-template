<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import useStore from '@/store'

const languageList = [
  { label: '简体中文', value: 'zh' },
  { label: 'English', value: 'en' },
]

const i18n = useI18n()
const store = useStore()
const language = computed(() => store.app.language)

function changeLanguage(lang: string) {
  i18n.locale.value = lang
  store.app.setLanguage(lang)
}
</script>

<template>
    <el-dropdown trigger="click" @command="changeLanguage">
        <svg-icon icon-class="translate" />
        <template #dropdown>
            <el-dropdown-menu
                v-for="item in languageList"
                :key="item.value"
                :command="item.value"
                :disabled="language === item.value"
            >
                {{ item.label }}
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<style scoped lang="scss">

</style>
