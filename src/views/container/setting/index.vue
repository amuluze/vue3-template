<script setup lang="ts">
const textarea = ref('')
const drawer = ref(false)
</script>

<template>
    <content-wrap title="镜像加速设置" message="镜像加速设置">
        <el-input v-model="textarea" style="width: 100%" :rows="6" type="textarea" placeholder="https://docker.nju.edu.cn&#10;https://mirror.baidubce.com" />
        <p>优先使用加速 URL 执行操作，设置为空则取消镜像加速。</p>
        <el-button type="primary" plain @click="drawer = true">
            <svg-icon icon-class="setting" style="margin-right: 4px" /> 设置
        </el-button>
    </content-wrap>
</template>
