<template>
    <div>
        <h1>Layout组件</h1>
       <slot></slot>
        <header>
          <slot name="header"></slot><!-- 具名插槽 -->
        </header>
        <main>
            <slot></slot><!-- 匿名插槽 -->
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>