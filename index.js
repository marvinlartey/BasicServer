import dotenv from 'dotenv';
import express from 'express';




const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;

const db = process.env.DB_URL