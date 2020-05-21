<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Login></Login> 使用Login组件 -->
    <!-- <TodoList></TodoList> 使用Login组件 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
