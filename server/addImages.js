const mongoose  = require('mongoose');
const imageData = require('./Helper/initData.js');
const Image = require('./models/Images.js');
require('dotenv').config();

const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}

const addImage = async ()=>{
    await Image.insertMany(imageData.data);
    console.log('Images inserted successfully.');
}


addImage();