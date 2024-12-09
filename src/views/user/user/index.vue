<script setup lang="ts">
import type { User } from '@/interface/account.ts'
import { useTable } from '@/hooks/useTable.ts'
import { queryUser } from '@/mock/account'
import type { TableInstance } from 'element-plus'
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import AddUser from '@/views/user/user/components/AddUser.vue'
import DeleteUser from '@/views/user/user/components/DeleteUser.vue'
import EditUser from '@/views/user/user/components/EditUser.vue'

const searchModel = ref<Record<string, any>>({
  username: '',
})

const searchItems: Form.Item[] = [
  {
    type: 'input',
    label: '用户名：',
    prop: 'username',
    value: '',
    placeholder: '请输入用户名称',
  },
]

const { tableData, loading, search, updateTotalParam } = useTable(queryUser, {}, false)
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

const addUser = useCommandComponent(AddUser)
const deleteUser = useCommandComponent(DeleteUser)
const editUser = useCommandComponent(EditUser)
</script>

<!-- 表格使用的完整实例 -->
<template>
    <search-form :items="searchItems" :model="searchModel" :search="updateTotalParam" />
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
    </div>
</template>

<style scoped lang="scss">
</style>
