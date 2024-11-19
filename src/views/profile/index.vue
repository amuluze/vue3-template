<script setup lang="ts">
import { getUserInfo } from '@/api/auth'

onMounted(async () => {
  await getProfile()
})

const profile = ref({
  username: '',
  status: '1',
  is_admin: 1,
})
async function getProfile() {
  const { data } = await getUserInfo()
  profile.value = {
    username: data.username,
    status: data.status,
    is_admin: data.is_admin,
  }
}
</script>

<template>
    <el-card shadow="never">
        <el-descriptions title="当前用户" :column="1">
            <el-descriptions-item label="用户名">
                <el-tag>{{ profile?.username }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="状态">
                <el-tag>{{ profile?.status == '1' ? '启用' : '禁用' }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="角色">
                <el-tag>{{ profile?.is_admin == 1 ? '管理员' : '普通用户' }}</el-tag>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>

<style scoped lang="scss">

</style>
