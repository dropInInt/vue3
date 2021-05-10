import { ref } from 'vue'

interface User {
 username: string;
 password: string;
}
export const loginUser = ref<User>({
 username: '',
 password: ''
})

// 校验规则
interface Rules {
username: {
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
 username: [{
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