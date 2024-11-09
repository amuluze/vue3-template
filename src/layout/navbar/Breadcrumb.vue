<script setup lang="ts">
const router = useRouter()

const breadcrumbList = computed(() => {
  return router.currentRoute.value.matched.map(item => item)
})
</script>

<template>
    <div class="am-breadcrumb">
        <svg-icon icon-class="homepage" />
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ path: item.path }">
                <span>{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="scss">
@include b(breadcrumb) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>
