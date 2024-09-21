import mongoose from "mongoose";

const {NEXT_MONGO_URI} = process.env;
const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(NEXT_MONGO_URI as string);
        if (connection.readyState === 1) {
            console.log("connect mongodb success")
            return Promise.resolve(true);
        }
    } catch (error) {
        console.error("error is: " + error);
        return Promise.reject(error);
    }
};



export default connectDB;
