<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { User } from '@/interface/account.ts'
import { useTable } from '@/hooks/useTable.ts'
import { queryUser } from '@/api/account'
import type { TableInstance } from 'element-plus'

const { tableData, pageable, loading, search, handleCurrentChange, handleSizeChange } = useTable(queryUser)
onMounted(async () => {
  await search()
})

const tableRef = ref<TableInstance>()
const tableSelection = ref<User[]>([])

const selectable = (row: User) => !['1', '2'].includes(row.id)

function handleSelectionChange(val: User[]) {
  console.log('selection: ', val)
  tableSelection.value = val
}
</script>

<!-- 表格使用的完整实例 -->
<template>
    <div class="am-container">
        <div class="am-table-operator">
            <div class="am-table-operator__left">
                <el-button type="primary" plain>
                    <svg-icon icon-class="add" style="margin-right: 4px" />
                    新增用户
                </el-button>
                <el-button type="primary" plain>
                    <svg-icon icon-class="delete" style="margin-right: 4px" />
                    批量删除
                </el-button>
            </div>
            <div class="am-table-operator__right" />
        </div>
        <div class="am-table">
            <el-table
                ref="tableRef"
                v-loading="loading"
                :data="tableData as User[]"
                :header-cell-style="{ height: '45px', fontSize: '15px', color: '#000', background: '#fafafa' }"
                height="100%"
                border
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" :selectable="selectable" width="55" />
                <el-table-column prop="username" label="用户名" min-width="120" align="center" />
                <el-table-column prop="role" label="角色" min-width="160" align="center">
                    <template #default="scope">
                        <el-tag v-for="(item, index) in scope.row.roles" :key="index">
                            {{ item.name }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" min-width="100" align="center" sortable>
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 1" type="success">
                            正常
                        </el-tag>
                        <el-tag v-else type="danger">
                            禁用
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" label="创建时间" min-width="160" align="center" sortable />
                <el-table-column label="操作" width="200" fixed="right" align="center">
                    <template #default="">
                        <el-button type="primary" size="small" text>
                            <svg-icon icon-class="edit" style="margin-right: 4px" />
                            编辑
                        </el-button>
                        <el-button type="danger" size="small" text>
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
  justify-content: space-between;

  height: 100%;
  width: 100%;
  padding: 16px;

  border: 1px solid #e5e7ed;
  border-radius: 4px;
  background-color: #fff;

  //// el-card 撑满布局
  //.el-card {
  //  height: 100%;
  //  :deep(.el-card__body) {
  //    display: flex;
  //    flex-direction: column;
  //    height: 100% !important;
  //  }
  //}
}

@include b(table-operator) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  width: 100%;
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
