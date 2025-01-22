<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue';
import { ref } from 'vue';
// option 选项式API -> 组合式 Composition API
const showComponment = ref(true);// 控制组件的显示和隐藏
const toggleComponment = () => {
  showComponment.value = !showComponment.value;
};

const width = ref(100);
const change = () => {
  width.value += 100;
};

const count = ref(0);
const incrementCount = () => {
  count.value++;
};
</script>

<template>
  <div>
    <button @click="toggleComponment">Toggle Component</button>
    <button @click="incrementCount">Increment Count</button>
    <p>Count: {{ count }}</p>
    <transition name="fade"> 
    <LifecycleComponent v-if="showComponment" :count="count"/>
    </transition>
    <div class="box1":style="{width:width + 'px'}"></div>
    <button @click="change">click</button>
    <!-- vue内置组件 -->
    <transition name="fade">
      <h1 v-if="showComponment">你好 vue transition</h1>
    </transition>
  </div>
</template>

<style scoped>
.box1{
  background-color: #d88986;
  height:100px;
  transition:width 3s; /* 3s 过渡效果 */
}

/*定义淡入淡出的过渡效果*/
.fade-enter-active,.fade-leave-active{
  transition:opacity 1s;
}
.fade-enter,.fade-leave-to{
  opacity:0;
}
</style>
