import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import connectDB from "./db/index.js";
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})

// connectDB()


// const app = expess()

// write code in indexe.js fille
// 1. professnial
// (async ()=> {
//     try {
//         await mongoose.connect(`mongodb+srv://icmr123:ICMR123@cluster0.yntrczs.mongodb.net/videoDB?retryWrites=true&w=majority&appName=Cluster0`)
//         console.log("Connections")
//     } catch (error) {
//         console.error("Error", error)
//         throw error
//     }
// })()

// 2. connected to local
async function main(params) {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/videotube')
        console.log("i a,Connected");
    } catch (err) {
        console.log("Error in", err)
    }
}

main()

