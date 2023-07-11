<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm"
    label-position="top">
    <el-form-item label="nome do restaurante" prop="nome">
      <el-input v-model="ruleForm.nome" />
    </el-form-item>
    <el-form-item label="Endereço" prop="endereco">
      <el-input v-model="ruleForm.endereco" />
    </el-form-item>
    <el-form-item label="Status" prop="status">
      <el-select v-model="ruleForm.status" class="m-2" placeholder="Select" size="large">
        <el-option v-for="item in Object.values(StuatusRestaurante)" :key="item" :label="item" :value="item" />
      </el-select>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Salvar </el-button>
    </el-form-item> 
  </el-form>
  <ul>
    <li v-for="restaurante in restauranteList" :key="restaurante.nome">
      {{ restaurante.nome }}
      {{ restaurante }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { reactive, ref, type Ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import {StuatusRestaurante}  from "../constants/StuatusRestaurante";
import {Restaurante} from "../constants/Restaurante"

//
const restauranteList: Ref<Restaurante[]> = ref([]);


/*type StuatusRestaurante = "Quero voltar" | "recomendo" | "não recomendo" | "tentar novamente";

const listStatus = ["Quero voltar", "recomendo", "não recomendo", "tentar novamente"];*/



//forulario de cadastro de restaurante
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<Restaurante>({
  nome: '',
  endereco: '',
  status: StuatusRestaurante.QueroVoltar,
  pratos: [],
});


const validaterestaurantName = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Por favor, digite o nome do restaurante"));
  } else {
    callback();
  }
};

const validateEndereco = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Por favor, digite o endereço do restaurante"));
  } else {
    callback();
  }
};

const rules: FormRules<typeof ruleForm> = reactive({
  nome: [{ validator: validaterestaurantName, trigger: "blur" }],
  endereco: [{ validator: validateEndereco, trigger: "blur" }],
  
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: any) => {
    if (valid) {
      restauranteList.value.push({
        nome: ruleForm.nome,
        endereco: ruleForm.endereco,
        status: ruleForm.status,
        pratos: [],
      });

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
