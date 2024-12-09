<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import { queryUser } from '@/mock/account'
import type { User } from '@/interface/account.ts'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import type { TableInstance } from 'element-plus'

const searchModel = ref<Record<string, any>>({
  username: 'admin',
})

const searchItems: Form.Item[] = [
  {
    type: 'input',
    label: '用户名：',
    prop: 'username',
    value: '',
    placeholder: '请输入用户名称',
  },
  {
    type: 'input',
    label: '备注：',
    prop: 'remark',
    value: '',
    placeholder: '备注',
  },
  {
    type: 'input',
    label: '状态：',
    prop: 'status',
    value: 0,
    placeholder: '状态',
  },
  {
    type: 'select',
    label: '性别',
    prop: 'sex',
    value: 1,
    placeholder: '请选择性别',
    options: {
      data: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
  },
  {
    type: 'datepicker',
    label: '创建时间',
    prop: 'created_at',
    value: '',
  },
]

const tableRef = ref<TableInstance>()
const tableSelection = ref<User[]>([])

const selectable = (row: User) => !['1', '2'].includes(row.id)

function handleSelectionChange(val: User[]) {
  console.log('selection: ', val)
  tableSelection.value = val
}
const { tableData, loading, pageable, search, handleCurrentChange, handleSizeChange, updateTotalParam } = useTable(queryUser, {}, true)

onMounted(async () => {
  await search()
})
</script>

<template>
    <search-form :items="searchItems" :model="searchModel" :search="updateTotalParam" />
    <div class="am-container">
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

<style lang="scss" scoped>
</style>
