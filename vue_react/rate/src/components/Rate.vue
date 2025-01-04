<template>
    <div>
       {{rate}}
       {{ count }}
       {{ props.value }}
    </div>
</template>

<script setup>
import {ref,defineProps,computed} from 'vue';
let count = ref(0)
// 子组件和父组件不一定是一直绑定的，哪里要用往哪搬
// 定义 props 业务 消费数据 ， 不是自身的数据，而和父组件绑定
// 告诉外界，我需要一个什么类型的数据
// 参数数据，外界传入的，不是自有的
let props = defineProps({
    value:Number
})
// 计算属性 数据                 3星 5-3=2，10-3=7，从第三颗到往后取五颗，三颗星，两颗空星
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
</script>

<style scoped>

</style>