<template>
    <div>
        <pokedex-list></pokedex-list>
    </div>
</template>
<script>
import PokedexHeader from './PokedexHeader.vue'
import PokedexList from './PokedexList.vue';
export default {
    name:'pokedex',
    components:{
        PokedexHeader,
        PokedexList
    }
}
</script>
<style>

</style>