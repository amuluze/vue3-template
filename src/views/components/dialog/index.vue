<script setup lang="ts">
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import DialogDemo from '@/views/components/dialog/components/DialogDemo.vue'
import DrawerDemo from '@/views/components/dialog/components/DrawerDemo.vue'

const dialogDemo = useCommandComponent(DialogDemo)
const drawerDemo = useCommandComponent(DrawerDemo)
</script>

<template>
    <content-wrap :style="{ 'margin-bottom': '8px', 'height': '250px' }" title="弹窗" message="弹窗">
        <el-button type="primary" plain @click="dialogDemo({ title: '弹窗' })">
            弹窗
        </el-button>
    </content-wrap>
    <content-wrap :style="{ 'margin-bottom': '8px', 'height': '250px' }" title="抽屉" message="抽屉">
        <el-button type="primary" plain @click="drawerDemo({ title: '抽屉' })">
            抽屉
        </el-button>
    </content-wrap>
</template>

<style scoped lang="scss">

</style>
