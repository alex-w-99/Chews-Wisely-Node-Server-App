import mongoose from "mongoose";
import followSchema from "./follow-schema.js";

const followModel = mongoose.model("followModel", followSchema);

export default followModel;
