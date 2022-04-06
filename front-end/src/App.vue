<template>
  <div id="app">
   <router-link class="router-link" to ="/">Home</router-link><br>
   <router-link class="router-link" to ="/tarefas">Tarefas</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
.router-link{
  margin-bottom: 20px;
}
</style>
