const mongoose = require('mongoose');
// import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://bilal:bilal@cluster0.bczbz92.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }
}


module.exports = connectDb;