<template>
    <div>
        <p>Mouse X: {{ x }}</p>
        <p>Mouse Y: {{ y }}</p>
    </div>
</template>

<script setup>
// 数据剥离 响应式与UI分离 使组件focus于页面
import {useMouse,useMemo} from '../hooks/useMouse'
import Hook from '../hooks/useMouse'
const {x,y} = useMouse()
useMemo()

console.log(Hook)
</script>

<style scoped>

</style>