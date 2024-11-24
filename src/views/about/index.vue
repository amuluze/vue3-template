<script setup lang="ts">
const version = ref('0.0.1')
const lastBuildTime = ref('2024-11-24 11:57:44')
</script>

<template>
    <content-wrap class="am-content" title="简介" message="测试 content-wrap">
        <span>vue-template 一款基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。</span>
    </content-wrap>
    <content-wrap title="项目信息" message="项目信息">
        <el-descriptions :column="2" border>
            <el-descriptions-item label="版本号" label-align="left">
                <el-tag>{{ version }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="发布时间" label-align="left">
                <el-tag>{{ lastBuildTime }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Github" label-align="left">
                <el-link type="primary" href="https://github.com/amuluze/vue-template" target="_blank">
                    Github
                </el-link>
            </el-descriptions-item>
            <el-descriptions-item label="文档地址" label-align="left">
                <el-link type="primary" href="" target="_blank">
                    文档地址
                </el-link>
            </el-descriptions-item>
            <el-descriptions-item label="预览地址" label-align="left">
                <el-link type="primary" href="" target="_blank">
                    预览地址
                </el-link>
            </el-descriptions-item>
        </el-descriptions>
    </content-wrap>
</template>

<style lang="scss" scoped>
@include b(content) {
  margin-bottom: 8px;
}
</style>
