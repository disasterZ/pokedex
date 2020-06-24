<template>
    <div class="ab">
        <table>
            <thead>
                <tr class="thehead">
                    <th>编号</th>
                    <th>中文名</th>
                    <th>英文名</th>
                    <th>日文名</th>
                    <th class="des">描述</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in abilityList" :key="index">
                    <th>{{item[0]}}</th>
                    <th>{{item[1]}}</th>
                    <th>{{item[2]}}</th>
                    <th>{{item[3]}}</th>
                    <th>{{item[4]}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import ability from '../mock/ability-list.json'
export default {
    name:'ability',
    data(){
        return{
            abilityList:[]
        }
    },
    created(){
        this.abilityList=ability
    }
}
</script>
<style lang="stylus" scoped>
table
    border-collapse collapse
th
    border 1px solid #cfd5dc
    margin 0
    padding 3px 0
    font-weight normal
    font-size 14px
    color #758490
    text-align center
.ab
    margin-top 20px
    margin-left 10%
.thehead
    background #e6eaee
    th
        padding 5px 10px
        color black 
        font-weight bold
.des
    min-width 500px
    width 70%
</style>