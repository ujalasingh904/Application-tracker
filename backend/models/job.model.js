import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true, 
        unique:false
    }, 
    platform: {
        type: String,
        required: true
    },
    dateApplied: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    
}, { timestamps: true })

export const jobModel = mongoose.model('jobModel', jobSchema);