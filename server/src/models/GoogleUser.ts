import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,

}, { versionKey: false });

const GoogleUserModels = mongoose.model('users', UserModel);
export default GoogleUserModels;