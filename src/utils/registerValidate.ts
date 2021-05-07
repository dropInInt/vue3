import { ref } from 'vue'

interface User {
 account: string;
 email: string;
 password: string;
 password2: string;
 role: string;
}
export const registerUser = ref<User>({
 account: '',
 email: '',
 password: '',
 password2: '',
 role: ''
})


// 校验规则

interface RegisterRules {
    account: ({
        message: string;
        required: boolean;
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
    email: {
        type: string;
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
    password2: ({
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
        validator?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
        validator?: undefined;
    } | {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
        min?: undefined;
        max?: undefined;
        message?: undefined;
    })[];
}
const validatePass2 = (rule:RegisterRules, value:string, callback:any) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== registerUser.value.password) {
        callback(new Error('两次输入密码不一致'))
    } else {
        callback()
    }
}
export const registerRules = ref<RegisterRules>({
 account: [{
    message: '请输入账号',
    required: true,
    trigger: 'blur'
  },
  {
    min: 2,
    max: 30,
    message: '账号长度需在6-20位之间',
    trigger: 'blur'
    }
],
 email: [{
    type: 'email',
    message: '请输入邮箱',
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
 }],
 password2: [
    {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
    },
    {
        min: 6,
        max: 20,
        message: '密码长度需在6-20位之间',
        trigger: 'blur'
    },
    {
        validator: validatePass2,
        trigger: 'blur'
 }]
})
