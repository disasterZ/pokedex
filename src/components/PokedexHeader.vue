<template>
    <div>
        <div class="header">
            <router-link to="/" class="pokemon">宝可梦</router-link>
            <router-link to="/ability" class="pokemon">特性</router-link>
            <router-link to="/login" class="pokemon">登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'header'
}
</script>
<style lang="stylus" scoped>
.header
    min-width 800px
    width 80%
    height 50px
    background black
    margin 0 auto
    border-bottom-left-radius 20px
    border-bottom-right-radius 20px
.pokemon
    color #7f848b
    font-size 16px
    text-decoration none 
    margin-left 40px
    position relative
    top 15px
</style>