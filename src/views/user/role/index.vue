<script setup lang="ts">
import { queryRole } from '@/mock/account'
import type { Resource } from '@/interface/account.ts'
import { useTable } from '@/hooks/useTable.ts'
import type { TableInstance } from 'element-plus'

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
                <el-table-column prop="name" label="角色名" min-width="120" align="center" />
                <el-table-column prop="resource_ids" label="权限" min-width="200" align="center" show-overflow-tooltip>
                    <template #default="scope">
                        <el-tree :data="generateTree(scope.row.resources)" :props="defaultProps" />
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
            </el-table>
        </div>
    </div>
</template>

<style scoped lang="scss">
</style>
