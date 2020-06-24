const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokedex');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式Schema **************/
const allpokemonSchema=mongoose.Schema({
    nat_id:Number,
    name_zh:String,
    type:Number,
    type_b:Number
})
const pokemonSchema=mongoose.Schema({
    id:String,
    nat_id:Number,
    name_zh:String,
    name_en:String,
    type:Number,
    type_b:Number,
    ability:Number,
    ability_b:Number,
    ability_hidden:Number,
    base_stat:Array,
    height:Number,
    weight:Number,
    category:String,
    description_sword:String,
    description_shield:String,
    forme:{}
})
const formeSchema=mongoose.Schema({
    name_zh:String,
    type:Number,
    type_b:Number,
    ability:Number,
    ability_b:Number,
    ability_hidden:Number,
    base_stat:Array,
    height:Number,
    weight:Number,
    category:String,
})
const userSchema=mongoose.Schema({
    username:String,
    password:String
})

/************** 定义模型Model **************/
const Models = {
    pokemon:mongoose.model('pokemon',pokemonSchema),
    forme:mongoose.model('forme',formeSchema),
    allpokemon:mongoose.model('allpokemon',allpokemonSchema),
    user:mongoose.model('user',userSchema)
}

module.exports = Models;