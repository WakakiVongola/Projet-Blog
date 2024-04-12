import mongoose from "mongoose";
import { use } from "react";

const connect = async () => {
    if(mongoose.connexions[0].readyState) return;
    
    try {
        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlPasser: true,
          useUnifiedTopology: true,
        });
        console.log("Mongo Connection succesfully established.")
    } catch(error) {
        throw new Error("Error chef");
    }
};

export default connect;