<script setup lang="ts">
import { getUserInfo } from '@/api/auth'
import { useI18n } from 'vue-i18n'

onMounted(async () => {
  await getProfile()
})

const profile = ref({
  username: '',
  status: 1,
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
const { t } = useI18n()
</script>

<template>
    <el-card shadow="never">
        <el-descriptions :title="t('account.currentAccount')" :column="1">
            <el-descriptions-item :label="t('account.userName')">
                <el-tag>{{ profile?.username }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item :label="t('account.status')">
                <el-tag v-if="profile?.status === 1">
                    {{ t('account.enable') }}
                </el-tag>
                <el-tag v-else>
                    {{ t('account.disable') }}
                </el-tag>
            </el-descriptions-item>
            <el-descriptions-item :label="t('account.roleName')">
                <el-tag v-if="profile?.is_admin === 1">
                    {{ t('account.admin') }}
                </el-tag>
                <el-tag v-else>
                    {{ t('account.notAdmin') }}
                </el-tag>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>

<style scoped lang="scss">

</style>
