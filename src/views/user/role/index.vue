<script setup lang="ts">
import { queryRole } from '@/mock/account'
import type { Resource } from '@/interface/account.ts'
import { useTable } from '@/hooks/useTable.ts'
import type { TableInstance } from 'element-plus'
import { useI18n } from 'vue-i18n'

const tableRef = ref<TableInstance>()
const defaultProps = {
  children: 'children',
  label: 'label',
  id: 'id',
}

interface Tree {
  id: string
  label: string
  children?: Tree[]
}

function generateTree(data: Resource[]) {
  const child: Tree[] = []
  data.forEach((item) => {
    const treeItem: Tree = {
      id: item.id,
      label: item.name,
      children: [],
    }
    child.push(treeItem)
  })
  const tree: Tree[] = [{
    id: '',
    label: '权限列表',
    children: child,
  }]
  console.log('>>', tree)
  return tree
}

const { tableData, loading, search } = useTable(queryRole, {}, false)

onMounted(async () => {
  await search()
})
const { t } = useI18n()
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
                <el-table-column prop="name" :label="t('account.roleName')" min-width="120" align="center" />
                <el-table-column prop="resource_ids" :label="t('account.permission')" min-width="200" align="center" show-overflow-tooltip>
                    <template #default="scope">
                        <el-tree :data="generateTree(scope.row.resources)" :props="defaultProps" />
                    </template>
                </el-table-column>
                <el-table-column prop="status" :label="t('account.status')" min-width="100" align="center" sortable>
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 1" type="success">
                            {{ t('account.enable') }}
                        </el-tag>
                        <el-tag v-else type="danger">
                            {{ t('account.disable') }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="created_at" :label="t('account.createTime')" min-width="160" align="center" sortable />
            </el-table>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
