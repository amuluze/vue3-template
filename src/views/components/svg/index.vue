<script setup lang="ts">

</script>

<template>
    <el-card>
        <el-alert
            title="SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons"
            type="warning"
            show-icon
            :closable="false"
        />
        <div class="am-svg">
            <svg-icon icon-class="search-ad" size="100px" />
            <svg-icon icon-class="open-store" size="100px" />
            <svg-icon icon-class="articles" size="100px" />
            <svg-icon icon-class="livestream" size="100px" />
            <svg-icon icon-class="program" size="100px" />
            <svg-icon icon-class="shopping" size="100px" />
        </div>
    </el-card>
</template>

<style scoped lang="scss">
@include b(svg) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
