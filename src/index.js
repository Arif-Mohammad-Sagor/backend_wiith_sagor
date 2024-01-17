import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDatabase from './db/config_db.js';

const app = express();
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, async () => {
	await connectToDatabase();
	console.log(`my server is running on port :${process.env.PORT}`);
});
