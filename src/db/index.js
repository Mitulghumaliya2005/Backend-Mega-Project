import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// console.log(DB_NAME);


// const connectDB = (async () => {
//     try {
//         console.log("HEllo");
//         console.log(process.env.MONGODB_URL);
        
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
//         console.log("BYE");
        
//         console.log(connectionInstance)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
//     } catch (error) {
//         console.error("Error In DB Connection: ", error)
//         // throw error
//     }
// })


// connected to local storeg
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/videotube')
        console.log("DB Connected");
    }catch(err){
        console.log("Error In DB Connection: ",err)
    }
}




export default connectDB