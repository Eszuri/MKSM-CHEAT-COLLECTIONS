import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
    token: Number,
    expiresToken: Number,

}, {versionKey: false});

const GoogleUserModels = mongoose.models.User || mongoose.model("User", UserModel);

export default GoogleUserModels;
