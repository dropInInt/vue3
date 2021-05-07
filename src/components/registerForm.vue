<template>
  <el-form status-icon :model="registerUser" ref="registerForm" :rules="registerRules" label-width="100px" class="registerForm sign-up-form">
    <el-form-item label="账号" prop="account">
      <el-input v-model="registerUser.account" placeholder="请输入账号" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerUser.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerUser.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input v-model="registerUser.password2" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option
          v-for="item in roleList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleRegister()" class="submit-btn">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Register',
  props: {
    registerUser: {
      type: Object,
      require: true
    },
    registerRules: {
      type: Object,
      require: true
    }
  },
  setup() {
    let registerForm:any = ref(null)

    const roleList:object = ref([
      { label: '管理员', value: 'admin' },
      { label: '用户', value: 'user' },
      { label: '游客', value: 'vister' }
    ])

   // 登陆方法
   const handleRegister = () => {
      registerForm.value.validate((valid:boolean) =>{
      if (valid) {
        console.log('陈宫')
      } else {
        console.log('失败')
        }
      })
    }
   
   return { registerForm, handleRegister, roleList }
  }
}
</script>
<style scoped>
/* register */
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
</style>