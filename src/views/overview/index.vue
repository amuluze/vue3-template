<script setup lang="ts">
import { userList } from '@/mock'
import { useTable } from '@/hooks/useTable.ts'

const { tableData, pageable, search } = useTable(userList)

async function testMock() {
  // 获取 mock 数据
  // const { data } = await userList()
  // console.log('data:', data)
  await search()
  console.log('table data: ', tableData)
  console.log('pageable: ', pageable)
}

// const dialog = useCommandComponent(Dialog)
</script>

<template>
    <div>
        <!--        <el-button @click="dialog({ title: '弹窗标题' })"> -->
        <!--            打开弹窗 -->
        <!--        </el-button> -->
        <!--        <Comp text="子组件 1" /> -->
        <!--        <Comp text="子组件 2" /> -->
        <el-button @click="testMock">
            测试 mock
        </el-button>
    </div>
</template>
