<script setup lang="ts">
const searchModel = ref<Record<string, any>>({
  username: '',
  age: 0,
  sex: 1,
  address: '',
  time: '',
})
const searchItems: Form.Item[] = [
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    value: '',
    placeholder: '请输入用户名称',
  },
  {
    type: 'input',
    label: '年龄',
    prop: 'age',
    value: '',
    placeholder: '请输入年龄',
  },
  {
    type: 'select',
    label: '性别',
    prop: 'sex',
    value: 1,
    placeholder: '请选择性别',
    options: {
      data: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
  },
  {
    type: 'input',
    label: '地址',
    prop: 'address',
    value: '',
    placeholder: '请输入地址',
  },
  {
    type: 'datepicker',
    label: '档案时间',
    prop: 'time',
    value: '',
  },
]
</script>

<template>
    <search-form :items="searchItems" :model="searchModel" />
</template>
