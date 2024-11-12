<script setup lang="ts">
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import Dialog from '@/views/overview/components/Dialog.vue'
import Comp from '@/views/overview/components/Comp.vue'
import service from '@/mock'

async function testMock() {
  // 获取 mock 数据
  const { data } = await service.get('/api/users')
  console.log(data)
}

const dialog = useCommandComponent(Dialog)
</script>

<template>
    <div>
        <el-button @click="dialog({ title: '弹窗标题' })">
            打开弹窗
        </el-button>
        <Comp text="子组件 1" />
        <Comp text="子组件 2" />
        <el-button @click="testMock">
            测试 mock
        </el-button>
    </div>
</template>
