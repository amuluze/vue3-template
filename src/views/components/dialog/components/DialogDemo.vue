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

const dialogVisible = computed<boolean>({
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
    <el-dialog v-model="dialogVisible" :title="title" width="500px" draggable>
        DialogDemo
    </el-dialog>
</template>

<style scoped lang="scss">

</style>
