<script setup lang="ts">
import { logout } from '@/api/auth'
import useStore from '@/store'
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import UpdatePassword from '@/layout/navbar/components/UpdatePassword.vue'

const store = useStore()
const router = useRouter()
async function doLogout() {
  // 1. 退出登录
  await logout()
  // 2.清除缓存
  store.user.setToken('', '')
  // 3.重定向到登录页
  await router.replace('/login')
}

function toProfile() {
  router.push('/profile')
}

const updatePasswordDraw = useCommandComponent(UpdatePassword)
</script>

<template>
    <el-dropdown>
        <el-avatar size="small">
            <i-ep-user />
        </el-avatar>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click.prevent="toProfile">
                    <svg-icon icon-class="people" style="margin-right: 4px" />
                    个人中心
                </el-dropdown-item>
                <el-dropdown-item @click="updatePasswordDraw({ title: '更新密码' })">
                    <svg-icon icon-class="edit" style="margin-right: 4px" />
                    更新密码
                </el-dropdown-item>
                <el-dropdown-item @click.prevent="doLogout">
                    <svg-icon icon-class="power" style="margin-right: 4px" />
                    退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
