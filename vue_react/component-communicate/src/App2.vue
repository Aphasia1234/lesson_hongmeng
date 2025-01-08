<script setup>
// composition API (组合式API)
import {
  ref, // 处理简单数据类型响应
  reactive // 处理复杂数据类型响应
} from 'vue'

// 组合式API
// counter 记数业务
const counter = ref(0); // 简单数据类型 记数器
const increment = () =>{
  counter.value++ // value
}

// user form 对象数据业务
const state = reactive({
  name:'Alice',
  age:25
}) 
const updateState = () =>{
  state.name = 'Bob'
  state.age++
}

</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">Increment</button>

    <p>Name:{{ state.name }}</p>
    <p>Age:{{ state.age }}</p>
    <button @click="updateState">Update State</button>
  </div>
</template>

<style scoped>

</style>
