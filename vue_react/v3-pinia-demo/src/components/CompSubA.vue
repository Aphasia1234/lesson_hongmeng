<template>
    <div>
        CompSubA
        {{ count }}
        <hr/>
        {{ counterStore.count }}
    </div>
</template>

<script setup>
import {toRefs} from 'vue';//引入响应式
// 引入中央模块
import {useCounterStore} from '../store/counter';
const counterStore = useCounterStore(); // 本地和中央连接的过程
const {count} = toRefs(counterStore); //仅仅拿到了值，响应式丢失了
// 加入toRefs 重新建立响应式
</script>

<style scoped>

</style>