<script setup lang="ts">
// 打开主题设置
import { echartsThemeData } from '@/config/theme.ts'
import mittBus from '@/utils/mitt.ts'
import useStore from '@/store'

const drawerVisible = ref(false)
mittBus.on('openThemeDrawer', () => (drawerVisible.value = true))

const store = useStore()
function handleClick(theme: Array<string>) {
  store.echarts.setCurrentColorArray(theme)
}
</script>

<template>
    <el-drawer v-model="drawerVisible" title="主题颜色" size="390px">
        <el-row :gutter="20">
            <el-col v-for="item in echartsThemeData" :key="item.name" :span="12">
                <div class="echarts-theme-item-group" @click="handleClick(item.theme)">
                    <div
                        v-for="sItem in item.theme"
                        :key="sItem"
                        class="echarts-theme-item-color"
                        :style="{ backgroundColor: sItem }"
                    />
                </div>
            </el-col>
        </el-row>
    </el-drawer>
</template>

<style scoped lang="scss">
.echarts-theme-item-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: auto;
  height: 48px;
  padding: 5px;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 4px;
}

.echarts-theme-item-color {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  margin-bottom: 10px;
  margin-left: 2px;
  border-radius: 3px;
}
</style>
