<template>
    <div>
      About 关于
      <button @click="goHome">回到首页</button>
    </div>
  </template>
  
  <script setup>
  import {useRouter} from 'vue-router'

  const router = useRouter()// 拿到路由实例 总管

  const goHome = () =>{
    // js 跳转 
    // Browser Object Model BOM 浏览器对象模型 > DOM
    // BOM API
    // 破坏了什么？ 历史记录
    //window.location.href="/"
    router.push('/') // 推到栈顶
  }
  </script>
  
  <style  scoped>
  
  </style>