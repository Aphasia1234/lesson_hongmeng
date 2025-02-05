<template>
    <el-form
      style="position:absolute;left:45%"
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" size="small"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" size="small" type="password"/>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit":loading="loading">
          登录
        </el-button>
      </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive,ref } from 'vue';
import { login } from '../api/';
import { useRouter } from 'vue-router';

const router = useRouter(); // hooks 编程
const formRef = ref(null);
// 表单数据
const form = reactive({
  name: '',
  password: ''
});
const rules = {
    name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 10, message: '长度在5-10个字符', trigger: 'blur' }
    ]
}
const loading = ref(false);
const onSubmit = async () => {
  console.log(formRef.value)
   loading.value = true; 
   await formRef.value.validate(async(valid) => {
    // 发送请求给后端
    // 账号密码是否匹配
    // 发送给前端一个凭证 token
    // 以后的请求都需要携带这个凭证
    // 服务器解析这个凭证 得到用户对象
    if (valid) {
     console.log('验证成功'); 
     const res = await login(form);
     console.log(res);
     if(res.data.code == 200){
      let token = res.data.data;
      //  console.log(res.data.data);
       localStorage.setItem('token',token); // 存储token
       router.push('/')
     }
     else{
       console.log(res.data.message);
     }
    } else {
      console.log('验证失败');
    }
   })
}
</script>

<style scoped>

</style>