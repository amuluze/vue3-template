<script setup lang="ts">
    function doLogout() {
    // 1. 退出登录
    // logout();
    // 2.清除缓存
    // store.user.setToken('', '', 0);
    // store.menu.menuList = [];
    // store.app.isCollapse = false;
    // 3.重定向到登录页
    // router.replace('/login');
    }
</script>

<template>
    <el-dropdown>
        <el-avatar>
            <i-ep-user />
        </el-avatar>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click.prevent="doLogout">
                    退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
