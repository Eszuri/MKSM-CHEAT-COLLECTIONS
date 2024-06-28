import mongoose from "mongoose";

const CommentModel = new mongoose.Schema({
    name: String,
    email: String,
    picture: String,
    content: String,
    type: String,
    page: Number,
    dateCreated: String,

}, { versionKey: false });

const CommentModels = mongoose.model('comments', CommentModel);
export default CommentModels;