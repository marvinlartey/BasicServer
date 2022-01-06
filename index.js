import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import profileModel from './schema/schema.js';





const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());


const PORT = 4000;





app.get('/', async(req,res)=>{

    res.json({
        message:'Welcome to the profile backend API'
    })
})

//Get all users
app.get(`/profile`,async(req,res)=>{
    const allProfiles = await profileModel.find({});

    if (allProfiles){
        //success
        return res.status(200).json({
            message: `user fetched successfully`,
            data: allProfiles
        });
    }else {
        //error
        return res.status(500).json({
            message: `Oops! unable to fetch user`
        });
    }
})




//create a new profile
app.post('/profile', async (req, res) => {
    const {firstName, lastName,dateOfBirth,school}= req.body;
    const newProfile= await profileModel.create({
        firstName,
        lastName,
        dateOfBirth,
        school,
    });

    if(newProfile){
        //success
        return res.status(200).json({
            message: `User has been created`
        })
    }else{
        return res.status(500).json({
            message: `User unable to create `
        })
    }
})

app.listen((PORT),() => {
    console.log(`Your app listening on port ${PORT}`);});