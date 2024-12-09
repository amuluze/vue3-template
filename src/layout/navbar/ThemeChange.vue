<script setup lang="ts">
import useStore from '@/store'
import useTheme from '@/hooks/useTheme.ts'

const store = useStore()

const { switchDark } = useTheme()

function themeChange() {
  switchDark()
}
</script>

<template>
    <el-switch v-model="store.theme.isDark" class="am-theme" @change="themeChange">
        <template #active-action>
            <svg-icon icon-class="moon" />
        </template>
        <template #inactive-action>
            <svg-icon icon-class="sunny" />
        </template>
    </el-switch>
</template>

<style scoped lang="scss">
@include b(theme) {
  margin-right: 16px;
}
</style>
