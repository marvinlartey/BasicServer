import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import contactsModel from './schema/schema.js';





const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;

const db = process.env.DB_URL

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`connected to DB`))
.catch(err => console.log(err));


app.get('/', async(req,res)=>{

    res.json({
        message:'Welcome to the contacts backend API'
    })
})


app.get(`/contacts`,async(req,res)=>{
    const allContacts = await contactsModel.find({});

    if (allContacts){
        //success
        return res.status(200).json({
            message: `Contacts fetched successfully`,
            data: allContacts
        });
    }else {
        //error
        return res.status(500).json({
            message: `Oops! unable to fetch contacts`
        });
    }
})


//Get all group contacts

app.get('/contacts/:group', async (req,res)=>{
    const {group}= req.params;
    const allGroupContacts= await contactsModel.find({}).where("group").equals(group);

    if(allGroupContacts){
         return res.status(200).json({
             message: 'Contacts group fetched successfully',
             data: allGroupContacts
         });
    }else{
        return res.status(500).json({
            message: `Unable to fetch ${group} contacts`
        });
    }
})

app.listen((PORT),() => {
    console.log(`Your app listening on port ${PORT}`);});