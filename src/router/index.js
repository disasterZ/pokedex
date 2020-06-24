import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '@/components/Pokedex.vue'
import Pokemon from "@/components/Pokemon.vue"
import Ability from '@/components/Ability.vue'
import Login from '@/components/Login.vue'
import register from '@/components/register.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Pokedex,
      name:'pokedex'
    },
    {
      path:'/pokemon/:id',
      component:Pokemon,
      name:'pokemon'
    },
    {
      path:'/ability',
      component:Ability,
      name:'ability'
    },
    {
      path:'/login',
      component:Login,
      name:'login'
    },
    {
      path:'/register',
      component:register,
      name:'register'
    }
  ]
})
