import { ref } from 'vue'

interface User {
 account: string;
 password: string;
}
export const loginUser = ref<User>({
 account: '',
 password: ''
})

// 校验规则
interface Rules {
 account: {
     message: string;
     required: boolean;
     trigger: string;
 }[];
 password: ({
     required: boolean;
     message: string;
     trigger: string;
     min?: undefined;
     max?: undefined;
 } | {
     min: number;
     max: number;
     message: string;
     trigger: string;
     required?: undefined;
 })[];
}
export const rules = ref<Rules>({
 account: [{
  message: '请输入账号',
  required: true,
  trigger: 'blur'
  }],
 password: [{
  required: true,
  message: '请输入密码',
  trigger: 'blur'
  },
  {
   min: 6,
   max: 20,
   message: '密码长度需在6-20位之间',
   trigger: 'blur'
  }]
})