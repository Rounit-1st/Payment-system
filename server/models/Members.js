const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    linkedIn:{
        type:String
    },
    instaId:{
        type:String
    }

})

const Member = mongoose.model("Member",memberSchema);
module.exports = Member