const mongoose = require("mongoose");
const imageData = require("./Helper/initData.js");
const Member = require("./models/Members.js");
require("dotenv").config();

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

const addMember = async (membersArr) => {
  await Member.insertMany(membersArr);
  console.log("Members are added.");
};

const arr = [
  {
    name: "Sagnick Dey",
    role: "Executive",
    year: "2nd Year",
    branch: "CSE",
    image: "https://res.cloudinary.com/dauf7v7uz/image/upload/v1769764933/WhatsApp_Image_2026-01-30_at_14.50.51_jimen1.jpg",
  },
];

addMember(arr);
