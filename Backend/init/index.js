import mongoose from 'mongoose';
import data from './data.js';
import Patient from '../models/patient.js';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.MONGODB_URL;
console.log(URL);

main()
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(URL);
}

let initDB = async (data) => {
    await Patient.deleteMany({});
    let res = await Patient.insertMany(data);
    console.log(res);
};

initDB(data);