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
    <el-form-item label="nome do restaurante" prop="restaurantName">
      <el-input v-model="ruleForm.restaurantName" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Salvar </el-button>
    </el-form-item>
  </el-form>
  <ul>
    <li v-for="restaurante in restauranteList.value" :key="restaurante.id">
      {{ restaurante }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { reactive, ref } from "vue";

//
const restauranteList: Ref<any[]> = ref([]);




//forulario de cadastro de restaurante
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  restaurantName: "",
});

const validaterestaurantName = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Por favor, digite o nome do restaurante"));
  } else {
    callback();
  }
};

const rules: FormRules<typeof ruleForm> = reactive({
  restaurantName: [{ validator: validaterestaurantName, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      restauranteList.value.push(ruleForm.restaurantName);

      resetForm(formEl);
      return true;
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
