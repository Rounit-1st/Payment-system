const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const alumniSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    company:{
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
        default:"#"
    },
    linkedin:{
        type:String,
        default:"#"
    },
    
});

const Alumni = mongoose.model("Alumni",alumniSchema);
module.exports = Alumni;