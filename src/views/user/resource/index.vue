<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import { queryResource } from '@/api/account'
import type { TableInstance } from 'element-plus'

const tableRef = ref<TableInstance>()
const { tableData, loading, search } = useTable(queryResource, {}, false)

onMounted(async () => {
  await search()
})
</script>

<template>
    <div class="am-container">
        <div class="am-table">
            <el-table
                ref="tableRef"
                v-loading="loading"
                :data="tableData"
                height="100%"
                :header-cell-style="{ height: '45px', fontSize: '15px', color: '#000', background: '#fafafa' }"
                border
            >
                <el-table-column prop="name" label="接口名称" min-width="100" />
                <el-table-column prop="path" label="URL" min-width="200">
                    <template #default="scope">
                        <el-tag>{{ scope.row.path }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="method" label="请求方式" min-width="100" sortable />
                <el-table-column prop="status" label="状态" min-width="100" sortable>
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 1" type="success">
                            正常
                        </el-tag>
                        <el-tag v-else type="danger">
                            禁用
                        </el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style scoped lang="scss">
@include b(container) {
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  padding: 16px;

  border: 1px solid #e5e7ed;
  border-radius: 4px;
  background-color: #fff;
}

@include b(table) {
  // el-table 撑满
  flex: 1;
  max-height: 100%;
  overflow: auto;
  margin: 8px 0;
}
</style>
