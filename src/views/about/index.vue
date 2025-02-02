<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const version = ref('0.0.1')
const lastBuildTime = ref('2024-11-24 11:57:44')
const { t } = useI18n()
</script>

<template>
    <content-wrap class="am-content" :title="t('about.introduction')" :message="t('about.introduction')">
        <span>vue-template 一款基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。</span>
    </content-wrap>
    <content-wrap :title="t('about.projectInfo')" :message="t('about.projectInfo')">
        <el-descriptions :column="2" border>
            <el-descriptions-item :label="t('about.version')" label-align="left">
                <el-tag>{{ version }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item :label="t('about.releaseTime')" label-align="left">
                <el-tag>{{ lastBuildTime }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="Github" label-align="left">
                <el-link type="primary" href="https://github.com/amuluze/vue-template" target="_blank">
                    Github
                </el-link>
            </el-descriptions-item>
            <el-descriptions-item :label="t('about.documentation')" label-align="left">
                <el-link type="primary" href="" target="_blank">
                    {{ t('about.documentation') }}
                </el-link>
            </el-descriptions-item>
            <el-descriptions-item :label="t('about.previewAddress')" label-align="left">
                <el-link type="primary" href="" target="_blank">
                    {{ t('about.previewAddress') }}
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
