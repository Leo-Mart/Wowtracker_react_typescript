import mongoose from "mongoose";
import { dbConfig } from "../config/database.ts";

mongoose.connect(dbConfig.ConnString);

const db = mongoose.connection;

export { db };
