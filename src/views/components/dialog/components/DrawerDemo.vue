<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  title?: string
  update?: () => void
}>()

const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'close'): void
}>()

const drawerVisible = computed<boolean>({
  get() {
    return props.visible
  },
  set(visible) {
    emits('update:visible', visible)
    if (!visible) {
      emits('close')
    }
  },
})
</script>

<template>
    <el-drawer v-model="drawerVisible" :destroy-on-close="true" :title="title" size="30%">
        DrawerDemo
    </el-drawer>
</template>

<style scoped lang="scss">

</style>
