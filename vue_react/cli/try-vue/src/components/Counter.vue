<!-- 一个典型的 App.vue 文件由三个主要部分组成：
     <template>、<script> 和 <style> -->

<template>
    <div class="counter">
        <p>Count: {{ count }}</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {
    ref
} from 'vue'

const count = ref(0)

const increment = () => {
    count.value++
}
</script>

<style>
.counter {
    text-align: center;
    margin-top: 50px;
}
button {
    padding :10px 20px;
    font-size: 16px;
}
</style>