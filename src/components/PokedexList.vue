<template>
    <div class="allist">
        <table v-for="index in 3" :key="index" :class="setList(index)">
            <thead>
                <tr class="thehead">
                    <th class="id">编号</th>
                    <th class="icon">图标</th>
                    <th class="name">宝可梦</th>
                    <th class="type">属性</th>
                </tr>
            </thead>
            <tbody>
                <router-link tag="tr" v-for="(pokemon,count) in allpokemon[index-1]" :key="count" :to="{name:'pokemon',params:{id:pokemon['nat_id']}}">
                        <th>{{pokemon['nat_id']}}</th>
                        <th><img :key="pokemon['nat_id']" :src="iconUrl(pokemon['nat_id'])"></th>
                        <th>{{pokemon['name_zh']}}</th>
                        <th v-if="pokemon['type_b']==0" :class="typeselect(pokemon['type'])">
                            {{type}}
                        </th>
                        <th v-else>
                            <div :class="typeselect(pokemon['type'])" class="type-a" >{{type}}</div>
                            <div  :class="typeselect(pokemon['type_b'])">{{type}}</div>
                        </th>
                </router-link>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import types from '../mock/type.json'
export default {
    name:'pokedexlist',
    data(){
        return{
            allpokemon:[],
            typelist:[],
            type:""
        }
    },
    methods:{
        PokemonList(){
            this.$http.get('http://localhost:8088/api/allpokemon').then((res)=>{
                const pokelist=res.body
                const x=Math.ceil(pokelist.length/3)
                const y=pokelist.length-2*x
                console.log(x,y)
                const pokelist1=pokelist.slice(0,x-1)
                const pokelist2=pokelist.slice(x,2*x-1)
                const pokelist3=pokelist.slice(2*x,2*x+y-1)
                this.allpokemon.push(pokelist1)
                this.allpokemon.push(pokelist2)
                this.allpokemon.push(pokelist3)
            })
        },
        setList(key){
            const classes='list list'+key
            return classes
        },
        iconUrl(key){
            const iconurl="//s.pokeuniv.com/pokemon/icon/"+key+".png"
            return iconurl
        },
        typeselect(type){
            var types="";
            this.typelist.forEach((item)=>{
                if(type==item[0]){
                    types=item[2]
                    this.type=item[1]
                }
            })
            return types
        },

    },
    created(){
        this.PokemonList()
        this.typelist.push(types)
        this.typelist=this.typelist[0]
    }
    
}
</script>
<style lang="stylus" scoped>
th
    border 1px solid #cfd5dc
    margin 0
    padding 0
    font-weight normal
    font-size 14px
    color #758490
    text-align center
.allist
    margin-top 20px
    margin-left 10%
.list
    float left 
    margin-right 4%
    width 25%
    min-width 300px
    border-collapse collapse
.thehead
    background #e6eaee
    th
        padding 5px 10px
        color black 
        font-weight bold
.fire
  background #f05030
  color white
.water
  background #3898f8
  color white
.grass
  background #78c850
  color white
.electric
  background #f8c030
  color white
.normal
  background #a8a090
  color white
.fighting
  background #a05038
  color white
.flying
  background #98a8f0
  color white
.bug
  background #a8b820
  color white
.poison
  background #b058a0
  color white
.rock
  background #b8a058
  color white
.ground
  background #d0b058
  color white
.steel
  background #a8a8c0
  color white
.ice
  background #58c8e0
  color white
.psychic
  background #f870a0
  color white
.dark
  background #705848
  color white
.ghost
  background #6060b0
  color white
.dragon
  background #7860e0
  color white
.fairy
  background #f1a7f9
  color white
</style>