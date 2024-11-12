<script setup lang="ts">
import useCommandComponent from '@/hooks/useCommandComponent.ts'
import Dialog from '@/views/overview/components/Dialog.vue'

const props = defineProps<{ text: string }>()

const dialog = useCommandComponent(Dialog)
</script>

<template>
    <div>
        <span>{{ props.text }}</span>
        <el-button type="primary" @click="dialog({ title: props.text })">
            提交（需确认）
        </el-button>
    </div>
</template>
