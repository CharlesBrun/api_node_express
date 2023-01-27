import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const str_mongo = process.env.STR_MONGO

mongoose.connect(str_mongo);

let db = mongoose.connection;

export default db;
