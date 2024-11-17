<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import service from '@/mock'

const userKey = ref(0)

const { tableData, loading, pageable, search, handleSizeChange, handleCurrentChange, updateTotalParam } = useTable(await service.get('/api/users'))
</script>

<template>
    <div class="am-user-operator">
        <el-card shadow="never">
            <el-button type="primary" plain>
                新增用户
            </el-button>
        </el-card>
    </div>

    <el-card shadow="never">
        <div class="am-table">
            <el-table :key="userKey" v-loading="loading" :data="tableData" height="100%" stripe>
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
                        <el-button type="primary" size="small" text :disabled="enableEdit(scope.row)" @click="userEdit(scope.row)">
                            编辑
                        </el-button>
                        <el-button v-loading="userDeleteLoading" type="danger" size="small" text :disabled="enableEdit(scope.row)" @click="userDelete(scope.row.id)">
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
    </el-card>
</template>

<style scoped lang="scss"></style>
