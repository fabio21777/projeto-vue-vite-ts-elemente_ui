<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    label-position="top"
  >
    <el-form-item label="nome do restaurante" prop="restaurantName" >
      <el-input v-model="ruleForm.restaurantName" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  restaurantName: '',
})

const validaterestaurantName = (rule: any, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('Por favor, digite o nome do restaurante'))
  } else {
    callback()
  }
}

const rules: FormRules<typeof ruleForm> = reactive({
  restaurantName: [{ validator: validaterestaurantName, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
