<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  title?: string
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
    <el-dialog v-model="dialogVisible" :title="title" width="50%">
        <span>This is a message</span>
        <template #footer>
            <span>
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>
