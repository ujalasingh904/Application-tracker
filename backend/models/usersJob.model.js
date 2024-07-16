import mongoose from "mongoose";

export const usersJobsSchema = new mongoose.Schema({
    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    userjobs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'jobModel',
            default:[]
        }
    ]

}, { timestamps: true });

export const usersJobsModel = mongoose.model("usersJobsModel", usersJobsSchema);