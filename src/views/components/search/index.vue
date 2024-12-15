<script setup lang="ts">
import { useTable } from '@/hooks/useTable.ts'
import { queryUser } from '@/mock/account'

const searchModel = ref<Record<string, any>>({
  username: 'admin',
})

const searchItems: Form.Item[] = [
  {
    type: 'input',
    label: 'account.userName',
    prop: 'username',
    value: '',
    placeholder: 'account.inputUserName',
  },
  {
    type: 'input',
    label: 'account.remark',
    prop: 'remark',
    value: '',
    placeholder: 'account.inputRemark',
  },
  {
    type: 'datetimerange',
    label: 'account.createTime',
    prop: 'created_at',
    value: [],
  },
  {
    type: 'input',
    label: 'account.status',
    prop: 'status',
    value: 0,
    placeholder: '状态',
  },
  {
    type: 'select',
    label: 'account.sex',
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
    type: 'datepicker',
    label: 'account.createTime',
    prop: 'created_at',
    value: '',
  },
]

const { search, updateTotalParam } = useTable(queryUser, {}, true)

onMounted(async () => {
  await search()
})
</script>

<template>
    <search-form :items="searchItems" :model="searchModel" :search="updateTotalParam" />
</template>

<style lang="scss" scoped>
</style>
