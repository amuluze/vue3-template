<script setup lang="ts">
import type { FormInstance } from 'element-plus'

/**
 * conditionList   组件外部传入的查询条件的配置列表数据
 */
interface Props {
  items: Form.Item[]
  model?: Record<string, any>
}
const props = defineProps<Props>()

// 查询条件表单数据
const searchForm = ref<Record<string, any>>({})

// 查询条件组件的实例
const searchFormRef = ref<FormInstance>()

// 切换展开和收起查询条件
const condition = ref(true)
function toggleCondition() {
  condition.value = !condition.value
}
// 初始化折叠查询条件的断点，从第几个查询条件开始（默认是从第3个，因为默认配置的span值是6）
const initConditionLen = 3

// 展示右侧按钮组（折叠||收起按钮）
const showConBtn = computed(() => {
  return props.items.length > initConditionLen
})

onMounted(() => {
  // 根据 items 初始化 formModel
  toRefs(props).items.value.map((item: Form.Item) => {
    console.log('item: ', item)
    searchForm.value[item.prop] = item.value

    // 如果类型为checkbox，默认值需要设置一个空数组
    const value = item.type === 'checkbox' ? [] : ''
    // 通过 prop.mode 可以传入一些默认值
    props.model ? (searchForm.value = props.model) : (searchForm.value[item.prop] = item.value || value)
  })
  console.log('props model: ', props.model)
  console.log('search form: ', searchForm.value)
})
</script>

<template>
    <div class="am-search">
        <el-form ref="searchFormRef" :inline="true" :model="searchForm">
            <el-row class="am-row">
                <el-col v-for="(item, index) in props.items.slice(0, condition ? initConditionLen : props.items.length)" :key="index" :span="6">
                    <el-form-item :label="item.label" :prop="item.prop" style="width: 90%">
                        <!-- 输入框 -->
                        <el-input
                            v-if="item.type === 'input'"
                            v-model="searchForm[item.prop]"
                            :type="item.type ?? 'text'"
                            :placeholder="item.placeholder"
                            :clearable="item.clearable"
                            :disabled="item.disabled"
                        />

                        <!-- 下拉框 -->
                        <el-select
                            v-if="item.type === 'select'"
                            v-model="searchForm[item.prop]"
                            :placeholder="item.placeholder"
                            :clearable="item.clearable"
                            :multiple="item.multiple"
                        >
                            <el-option
                                v-for="option in item.options?.data"
                                :key="option[item.options?.value || 'value']"
                                :label="option[item.options?.label || 'label']"
                                :value="option[item.options?.value || 'value']"
                            />
                        </el-select>

                        <!-- 日期选择器 -->
                        <el-date-picker
                            v-if="item.type === 'datepicker'"
                            v-bind="item.options"
                            v-model="searchForm[item.prop]"
                        />
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item class="btn-group-item flex-end">
                        <el-button type="primary" size="small">
                            查询
                        </el-button>
                        <el-button type="danger" size="small">
                            重置
                        </el-button>
                        <el-button v-show="showConBtn" type="primary" size="small" link @click="toggleCondition">
                            {{ condition ? "展开" : "收起" }}
                            <svg-icon v-if="condition" icon-class="down" />
                            <svg-icon v-else icon-class="up" />
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<style scoped lang="scss">
@include b(search) {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  border: 1px solid #e5e7ed;
  border-radius: 4px;
  background-color: #fff;
  .el-form {
    width: 100%;
    height: 100%;
    .el-form-item {
      margin: 0;
    }
  }
}
</style>
