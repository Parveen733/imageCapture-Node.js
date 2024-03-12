// const db = require('../db');
const Image = require('../models/images');
const fs = require('fs');
const path = require('path');

module.exports.processImage =async (req, res) => {
  try {
    // console.log("==========",req.file);
    const directory ="images";
    // Remove header from base64 string
const base64Image = req.body.imageData.split(';base64,').pop();

// Create buffer from base64 data
const buffer = Buffer.from(base64Image, 'base64');

const sd= new Date()
// Write buffer to file
const name= "WEB-"+sd.getDate()+sd.getMonth()+sd.getFullYear()+sd.getMinutes()+sd.getSeconds()+sd.getMilliseconds()+".webp"
fs.writeFileSync(path.join(directory,name), buffer);
const fileUrl = `images/${name}`;

console.log(fileUrl);
    // Create a new image entry with provided data
    const newImage = await Image.create({
      name,
      imageUrl:fileUrl
    });

    return res.status(201).json(newImage);
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.getReport = async (req,res)=>{
    try {
        const data = await Image.findByPk(req.params.id);
       res.send(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

module.exports.getAllReport = async (req,res)=>{
    try {
        const data = await Image.findAll();
       res.send(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}
