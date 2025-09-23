import dotenv from 'dotenv';
dotenv.config({ path: ['.env.local', '.env'] });
import express from 'express';
const app = express();
import Patient from './models/patient.js';
import mongoose from 'mongoose';
import cors from 'cors';

app.use(cors());

const URL = process.env.MONGODB_URL;

console.log(URL);

main()
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(URL);
}


app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(8080, () => {
    console.log("App is listening on server: 8080");
});