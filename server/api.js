"use strict";
const db = require('./db');
const express = require('express');
const router = express.Router();
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

//获取所有精灵
router.get('/api/allpokemon',(req,res)=>{
    db.pokemon.find({},{'nat_id':1,'name_zh':1,'type':'1','type_b':1},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})
//获取一只精灵所有信息
router.get('/api/pokemon/:id',(req,res)=>{
    db.pokemon.find({"nat_id":req.params.id},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})
//删除
router.post('/api/pokemon/delete',(req,res)=>{
    db.pokemon.remove({"nat_id":req.body.id},(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send("删除成功")
        }
    })
})
//登录验证
router.post('/api/login',(req,res)=>{
    db.user.find({'username':req.body['username']},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            // console.log(req.body['password'])
            // console.log(data)
            if(data[0]['password']==req.body['password']) {res.send("登陆成功")}
            else {res.send("登录失败")}
        }
    })
})

//用户zhuce
router.post('/api/register',(req,res)=>{
    let newuser=new db.user({
        username:req.body.username,
        password:req.body.password
    })
    newuser.save((err,data)=>{
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    })
})

module.exports = router;