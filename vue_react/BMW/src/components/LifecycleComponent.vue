<template>
    <div>
       <p id="count">LifecycleComponent - Count: {{ count }}</p>
    </div>
</template>

<script setup>
import { defineProps,
         onBeforeMount,
         onMounted,
         onBeforeUnmount,
         onUnmounted,
         onBeforeUpdate,
         onUpdated 
        } from 'vue';

defineProps({
    count:{
        type:Number,
        required:true
    }
})

// console.log('haha');

// 组件有生命周期
onMounted(()=>{    // on 某个阶段 mounted 挂载  已经完成了挂载
    console.log('组件已经挂载');
    console.log(document.getElementById('count'),'------');
})
onBeforeMount(()=>{
    console.log(document.getElementById('count'),'------');
    console.log('组件即将挂载');
})

onBeforeUnmount(()=>{
    console.log('组件即将卸载');
})
onUnmounted(()=>{
    console.log('组件已经卸载');
})

onBeforeUpdate(()=>{
    console.log('组件即将更新');
})
onUpdated(()=>{
    console.log('组件已经更新');
})
</script>

<style scoped>

</style>