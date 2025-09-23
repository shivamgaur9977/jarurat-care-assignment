import mongoose, { Schema } from "mongoose";

let patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        requierd: true
    }
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;