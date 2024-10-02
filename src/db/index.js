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

// const connectDB = ()=>{
//     mongoose.connect(`${process.env.MONGODB_URL}`).then(()=>{
//         console.log("Connected");
        
//     }).catch((err)=>{
//         console.log(err);
        
//     })
// }


// connected to local storeg
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/videotube')
        console.log("i am Connected");
    }catch(err){
        console.log(err)
    }
}




export default connectDB