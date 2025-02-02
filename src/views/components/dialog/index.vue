<script setup lang="ts">
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import DialogDemo from '@/views/components/dialog/components/DialogDemo.vue'
import DrawerDemo from '@/views/components/dialog/components/DrawerDemo.vue'
import { useI18n } from 'vue-i18n'

const dialogDemo = useCommandComponent(DialogDemo)
const drawerDemo = useCommandComponent(DrawerDemo)
const { t } = useI18n()
</script>

<template>
    <content-wrap :style="{ 'margin-bottom': '8px', 'height': '250px' }" :title="t('dialog.dialog')" :message="t('dialog.dialog')">
        <el-button type="primary" plain @click="dialogDemo({ title: 'dialog.dialog' })">
            {{ t('dialog.dialog') }}
        </el-button>
    </content-wrap>
    <content-wrap :style="{ 'margin-bottom': '8px', 'height': '250px' }" :title="t('dialog.drawer')" :message="t('dialog.drawer')">
        <el-button type="primary" plain @click="drawerDemo({ title: 'dialog.drawer' })">
            {{ t('dialog.drawer') }}
        </el-button>
    </content-wrap>
</template>

<style scoped lang="scss">

</style>
