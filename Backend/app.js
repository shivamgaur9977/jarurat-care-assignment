import dotenv from 'dotenv';
dotenv.config({ path: ['.env.local', '.env'] });
import express from 'express';
const app = express();
import Patient from './models/patient.js';
import mongoose from 'mongoose';
import cors from 'cors';

app.use(cors());

const URL = process.env.MONGODB_URL;

main()
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(URL);
}


app.get("/patients", async (req, res) => {
    let patients = await Patient.find();
    res.json(patients);
});

app.listen(8080, () => {
    console.log("App is listening on server: 8080");
});