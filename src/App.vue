<template>
  <div id="app">
    <pokedex-header></pokedex-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue'
import PokedexHeader from './components/PokedexHeader.vue'
export default {
  name: 'App',
  components:{
    Pokedex,
    PokedexHeader
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
  background-color:#f2f4f6;
}
</style>


