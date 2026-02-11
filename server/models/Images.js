const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    createdAt:{
        type:Date
    },
    url:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Cultural','Technical','Celebration']
    }
})

const Image = mongoose.model("Image",imageSchema);
module.exports = Image;