<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import type { TableInstance } from 'element-plus'
import { queryContainers } from '@/mock/container'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const tableRef = ref<TableInstance>()
const { tableData, pageable, loading, search, handleSizeChange, handleCurrentChange } = useTable(queryContainers)

function enableEdit(containerName: string) {
  return containerName === 'amprobe'
}

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
                    新增容器
                </el-button>
            </div>
            <div class="am-table-operator__right" />
        </div>
        <div class="am-table">
            <el-table
                ref="tableRef"
                v-loading="loading"
                :data="tableData"
                height="100%"
                :header-cell-style="{ height: '45px', fontSize: '15px', color: '#000', background: '#fafafa' }"
                border
            >
                <el-table-column prop="name" label="容器名称" align="center" min-width="120" show-overflow-tooltip fixed sortable />
                <el-table-column prop="image" label="镜像名称" align="center" min-width="120" show-overflow-tooltip sortable />
                <el-table-column prop="ip" label="容器 IP" align="center" min-width="100" show-overflow-tooltip sortable />
                <el-table-column prop="ports" label="容器端口" align="center" min-width="100" show-overflow-tooltip />
                <el-table-column prop="state" label="运行状态" align="center" min-width="120" show-overflow-tooltip>
                    <template #default="scope">
                        <el-tag :type="scope.row.state === 'running' ? 'success' : 'danger'">
                            {{ scope.row.state }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="uptime" label="启动时间" align="center" min-width="120" show-overflow-tooltip sortable />
                <el-table-column prop="cpu_percent" label="CPU使用率" align="center" min-width="130" show-overflow-tooltip sortable />
                <el-table-column prop="memory_percent" label="内存使用率" align="center" min-width="130" show-overflow-tooltip sortable />
                <el-table-column prop="memory_usage" label="内存使用量" align="center" min-width="130" show-overflow-tooltip sortable />
                <el-table-column prop="memory_limit" label="内存限制" align="center" min-width="120" show-overflow-tooltip />
                <el-table-column label="操作" width="200" fixed="right" align="center">
                    <template #default="scope">
                        <el-button type="primary" size="small" text>
                            <svg-icon icon-class="log" style="margin-right: 4px" />
                            日志
                        </el-button>
                        <el-dropdown>
                            <el-button type="primary" size="small" text>
                                <svg-icon icon-class="more" style="margin-right: 4px" />
                                更多
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        <el-button type="primary" size="small" text :disabled="enableEdit(scope.row.name)">
                                            <svg-icon icon-class="start" style="margin-right: 4px" />
                                            启动
                                        </el-button>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <el-button type="warning" size="small" text :disabled="enableEdit(scope.row.name)">
                                            <svg-icon icon-class="stop" style="margin-right: 4px" />
                                            停止
                                        </el-button>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <el-button type="warning" size="small" text :disabled="enableEdit(scope.row.name)">
                                            <svg-icon icon-class="update" style="margin-right: 4px" />
                                            重启
                                        </el-button>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <el-button type="danger" size="small" text :disabled="enableEdit(scope.row.name)">
                                            <svg-icon icon-class="delete" style="margin-right: 4px" />
                                            删除
                                        </el-button>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
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
