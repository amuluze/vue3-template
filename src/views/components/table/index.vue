<script setup lang="ts">
import type { User } from '@/interface/account.ts'
import { useTable } from '@/hooks/useTable.ts'
import { queryUser } from '@/mock/account'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { TableInstance } from 'element-plus'
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import AddUser from '@/views/components/table/components/AddUser.vue'
import DeleteUser from '@/views/components/table/components/DeleteUser.vue'
import EditUser from '@/views/components/table/components/EditUser.vue'

const tableRef = ref<TableInstance>()
const tableSelection = ref<User[]>([])

const selectable = (row: User) => !['1', '2'].includes(row.id)

function handleSelectionChange(val: User[]) {
  console.log('selection: ', val)
  tableSelection.value = val
}

const { tableData, pageable, loading, search, handleCurrentChange, handleSizeChange } = useTable(queryUser)

const addUser = useCommandComponent(AddUser)
const deleteUser = useCommandComponent(DeleteUser)
const editUser = useCommandComponent(EditUser)

onMounted(async () => {
  await search()
})
</script>

<template>
    <div class="am-container">
        <div class="am-table-operator">
            <div class="am-table-operator__left">
                <el-button type="primary" plain @click="addUser({ title: '添加用户', update: search })">
                    <svg-icon icon-class="add" style="margin-right: 4px" />
                    新增用户
                </el-button>
                <el-button type="primary" plain @click="deleteUser({ title: '批量删除', ids: [...tableSelection.map(item => item.id)], update: search })">
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
                <el-table-column prop="remark" label="备注" min-width="160" align="center" />
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
                    <template #default="scope">
                        <el-button type="primary" size="small" text @click="editUser({ title: '编辑用户', entity: scope.row, update: search })">
                            <svg-icon icon-class="edit" style="margin-right: 4px" />
                            编辑
                        </el-button>
                        <el-button type="danger" size="small" text @click="deleteUser({ title: '删除用户', ids: [scope.row.id], update: search })">
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
</style>
