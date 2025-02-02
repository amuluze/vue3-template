<script setup lang="ts">
import useStore from '@/store'
import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useTheme from './hooks/useTheme'

import { getBrowserLanguage } from '@/utils'
import { useI18n } from 'vue-i18n'

// 国际化配置初始化
const i18n = useI18n()
const store = useStore()
const locale = computed(() => {
  if (store.app.language === 'zh')
    return zhCn
  if (store.app.language === 'en')
    return en
  return getBrowserLanguage() === 'zh' ? zhCn : en
})

onMounted(() => {
  const language = store.app.language ?? getBrowserLanguage()
  i18n.locale.value = language
  store.app.setLanguage(language)
})
// 初始化主题配置
const { initTheme } = useTheme()
initTheme()
</script>

<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>
