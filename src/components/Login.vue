<template>
    <div class="row mt-3">
        <div class="col-md-8 col-lg-8" style="margin:0 auto">
            <div class="card">
                <div class="card-body">
                        <div class="from-group">
                            <label>用户名:</label>
                            <input type="text" v-model="username" class="form-control">
                        </div>
                         <div class="from-group">
                            <label for="password">密码:</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <div v-if="this.text!=''">
                            {{text}}
                        </div>
                        <button @click="onSubmit()" type="submit" class="btn btn-block btn-success">登录</button>
                        <router-link to="/register">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           username:'',
            password:'',
            text:''
        }
    },
    methods:{
        onSubmit(){
            let params={
                username:this.username,
                password:this.password
                
            }
            this.$http.post('http://localhost:8088/api/login',params).then((res)=>{
                if(res.body=="登录失败"){
                    this.text=res.body
                }
                else{
                    this.$router.push("/")
                }
            })
      }
    }

}
</script>

<style scoped>
div{
    margin: 20px 0;
}
label{
    float: left;
}
</style>