const mongoose  = require('mongoose');
const imageData = require('./Helper/initData.js');
const Alumni = require('./models/Alumnis.js');
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

const addAlumni = async ()=>{
    await Alumni.insertMany(imageData.alumniData);
    console.log('Images inserted successfully.');
}


addAlumni();