<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import { queryNetworks } from '@/mock/container'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const { tableData, pageable, loading, search, handleSizeChange, handleCurrentChange } = useTable(queryNetworks)
onMounted(async () => {
  await search()
})
</script>

<template>
    <div class="am-container">
        <div class="am-table-operator">
            <div class="am-table-operator__left">
                <el-button type="primary" plain>
                    <svg-icon icon-class="add" style="margin-right: 4px" />
                    新建网络
                </el-button>
            </div>
            <div class="am-table-operator__right" />
        </div>
        <div class="am-table">
            <el-table
                v-loading="loading"
                :data="tableData"
                height="100%"
                :header-cell-style="{ height: '45px', fontSize: '15px', color: '#000', background: '#fafafa' }"
                border
            >
                <el-table-column prop="name" label="名称" align="center" width="120" fixed />
                <el-table-column prop="driver" label="模式" align="center" min-width="120" />
                <el-table-column prop="subnet" label="子网" align="center" show-overflow-tooltip width="120" />
                <el-table-column prop="gateway" label="网关" align="center" show-overflow-tooltip width="120" />
                <el-table-column prop="created" label="创建时间" align="center" width="200" sortable />
                <el-table-column label="操作" width="160" fixed="right" align="center">
                    <template #default="">
                        <el-button type="danger" text size="small">
                            <svg-icon icon-class="delete" style="margin-right: 4px" />
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="am-pagination">
            <el-config-provider :locale="zhCn">
                <el-pagination
                    v-model:current-page="pageable.page"
                    :page-size="pageable.size"
                    layout="total, sizes, prev, pager, next, jumper"
                    :page-sizes="pageable.options"
                    :total="pageable.total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </el-config-provider>
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

@include b(pagination) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
