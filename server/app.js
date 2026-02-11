
const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
const Image = require('./models/Images.js');
const Member = require('./models/Members.js');
const Alumni = require('./models/Alumnis.js');
const mongoose  = require('mongoose');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Point this to your build folder (usually 'dist' or 'build')
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ensure all other routes return the index.html (for SPA routing)
// app.get('(.*)', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', '../client/dist/index.html'));
// });

const corsOptions = {
    origin : ["http://localhost:5173","inspiremanit-production.up.railway.app"]
}

app.use(cors(corsOptions));

//📌 Establishing connection with DB
const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("Connected to DB successfully.");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}


app.get("/gallery",async (req,res)=>{
    try {
        const imageData = await Image.find({});
        console.log("Found images:", imageData.length); // Good for debugging
        res.json(imageData); 
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch images" });
    }
})


app.get("/members",async (req,res)=>{
    try{
        const memberData = await Member.find({});
        console.log("Found members : ",memberData.length);
        res.json(memberData);
    } catch(err){
        res.status(500).json({error:"Failed to fetch members' data"});
    }
})
app.get("/alumni",async (req,res)=>{
    try{
        const alumniData = await Alumni.find({});
        console.log("Found members : ",alumniData.length);
        res.json(alumniData);
    } catch(err){
        res.status(500).json({error:"Failed to fetch members' data"});
    }
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`);

})

module.exports = app;