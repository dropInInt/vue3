<template>
  <el-form status-icon :model="loginUser" ref="loginForm" :rules="rules" label-width="100px" class="loginForm sign-in-form">
    <el-form-item label="账号" prop="account">
      <el-input v-model="loginUser.account" placeholder="请输入账号" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginUser.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin()" class="submit-btn">提交</el-button>
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
    <p>忘记密码？ <a href="">立即找回</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'LoginForm',
  props: {
    loginUser: {
      type: Object,
      require: true
    },
    rules: {
      type: Object,
      require: true
    }
  },
  setup() {
    let loginForm:any = ref(null)
   // 登陆方法
   const handleLogin = () => {
      loginForm.value.validate((valid:boolean) =>{
      if (valid) {
        console.log('陈宫')
      } else {
        console.log('失败')
        }
      })
    }
   
   return { loginForm, handleLogin }
  }
}
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>