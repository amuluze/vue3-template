<script setup lang="ts">
import Avatar from '@/layout/navbar/Avatar.vue'
import Breadcrumb from './Breadcrumb.vue'
import ThemeChange from '@/layout/navbar/ThemeChange.vue'

const router = useRouter()
function toHomepage() {
  router.push('/overview')
}
</script>

<template>
    <div class="am-navbar">
        <div>
            <Breadcrumb style="cursor: pointer" @click="toHomepage" />
        </div>
        <div>
            <ThemeChange />
            <Avatar />
        </div>
    </div>
</template>

<style scoped lang="scss">
@include b(navbar) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 0 16px;
  background-color: #e9effd;
  border-radius: 4px;
  border-bottom: #cdcfd2 1px solid;
}
</style>
