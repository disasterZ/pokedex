<template>
    <div>
        <img :key=id :src="iconUrl(id)" class="pokeimg">
        <div class="name">
            <span class="no" :class="typeA()">No.{{id}}</span>
            <span class="namezh">{{PokeInfo['name_zh']}}</span>
            <button @click="onSubmit()" class="delete" type="submit">删除</button>
        </div>
        <div class="category">{{PokeInfo['category']}}宝可梦</div>
        <div class="thetype">
            <div>属性</div>
            <span :class="typeA()">{{type_a}}</span>
            <span v-if="PokeInfo['type_b']!=0" :class="typeB()">{{type_b}}</span>
        </div>
        <div class="theab">
            <div style="border-bottom:1px solid white">特性:{{ability_a[1]}}<span v-if="this.ability_b!=null">/{{ability_b[1]}}</span></div>
            <div>隐藏特性:{{ability_h[1]}}</div>
        </div>
        <div class="thehe">身高:{{PokeInfo['height']}}m</div>
        <div class="thewe">体重:{{PokeInfo['weight']}}kg</div>
        <div class="thedes">
            <span>描述</span>
            <div v-if="this.PokeInfo['description_sword']!=0">
                <span style="font-weight:bold;color:red">剑版</span><div>{{PokeInfo['description_sword']}}</div>
                <span style="font-weight:bold;color:blue">盾版</span><div>{{PokeInfo['description_shield']}}</div>
            </div>
            <div v-else>暂无图鉴描述</div>
        </div>
        <table class="number">
            <thead>
                <tr>
                    <th>种族值</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>HP:</th>
                    <th>{{PokeInfo['base_stat'][0]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][0])}">
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>攻击:</th>
                    <th>{{PokeInfo['base_stat'][1]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][1])}">
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>防御:</th>
                    <th>{{PokeInfo['base_stat'][2]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][2])}">
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>特攻:</th>
                    <th>{{PokeInfo['base_stat'][3]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][3])}">
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>特防:</th>
                    <th>{{PokeInfo['base_stat'][4]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][4])}">
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>速度:</th>
                    <th>{{PokeInfo['base_stat'][5]}}</th>
                    <th>
                        <div class="base-bar" :style="{'width':getN(this.PokeInfo['base_stat'][5])}">
                        </div>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import ability from '../mock/ability-list.json'
import types from '../mock/type.json'
export default {
    name:'pokemon',
    data(){
        return{
            id:0,
            type_a:"",
            type_a_en:"",
            type_b:"",
            type_b_en:"",
            typelist:[],
            PokeInfo:{},
            abilityList:[],
            ability_a:[],
            ability_b:[],
            ability_h:[]
        }
    },
    methods:{
        PokemonInfo(){
            this.$http.get('http://localhost:8088/api/pokemon/'+this.id).then((res)=>{
                this.PokeInfo=res.body[0]
                this.typelist.forEach((item)=>{
                if(res.body[0]['type']==item[0]){
                        this.type_a=item[1]
                        this.type_a_en=item[2]
                }
                if(res.body[0]['type_b']==item[0]){
                        this.type_b=item[1]
                        this.type_b_en=item[2]
                }
                })
                this.ability_a=this.abilityList[res.body[0]['ability']-1]
                this.ability_b=this.abilityList[res.body[0]['ability_b']-1]
                this.ability_h=this.abilityList[res.body[0]['ability_hidden']-1]
            })
        },
        iconUrl(key){
            const iconurl="//s.pokeuniv.com/pokemon/pgl/"+key+".png"
            return iconurl
        },
        typeA(){
            return this.type_a_en
        },
        typeB(){
            return this.type_b_en
        },
        getN(n){
            const m=n+"px"
            return m
        },
        onSubmit(){
            let params={
                id:this.id
            }
            this.$http.post('http://localhost:8088/api/pokemon/delete',params).then((res)=>{
                this.$router.push("/")
            })
        }


    },
    created(){
        this.id=this.$route.params.id
        this.typelist.push(types)
        this.typelist=this.typelist[0]
        this.abilityList.push(ability)
        this.abilityList=this.abilityList[0]
        this.PokemonInfo()
    }
}
</script>
<style lang="stylus" scoped>
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
.pokeimg
    position absolute
    left 20%
    top 10%
.name
    margin-left 50%
    margin-top 30px
    font-size 20px
    min-width:600px
    .no
        padding 10px 30px
    .namezh
        color white
        background black 
        padding 10px 50px
        padding-right 270px
.category
    width 490px
    margin-left 50%
    margin-top 25px
    font-size 18px
    background-color #ccc
    padding 10px 195px
    
.thetype
    width 490px
    margin-left 50%
    margin-top 5px
    font-size 18px
    background-color #ccc
    padding 10px 40px
    div
        float left
        padding-right 50px
    span 
        padding 5px 40px
        margin 0 20px
        border-radius 10px
.theab
    width 490px
    margin-left 50%
    margin-top 5px
    font-size 18px
    background-color #ccc
    padding 10px 40px
    div
        padding-top 5px
        padding-bottom 5px
.thehe
    width 490px
    margin-left 50%
    margin-top 5px
    font-size 18px
    background-color #ccc
    padding 10px 40px
.thewe
    width 490px
    margin-left 50%
    margin-top 5px
    font-size 18px
    background-color #ccc
    padding 10px 40px
.thedes
    width 490px
    margin-left 50%
    margin-top 5px
    font-size 18px
    background-color #ccc
    padding 10px 40px
.number
    position absolute
    top:450px
    left 300px
.base-bar
    background #eeb33b
    border-radius 30px
    height 12px
.delete
    border 0px
</style>