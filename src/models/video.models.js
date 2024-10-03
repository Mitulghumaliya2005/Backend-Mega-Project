import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudinary url
            required: true,
        },
        thumbnail:{
            type: String, // cloudinary url
            required: true,
        },
        title:{
            type: String, 
            required: true,
        },
        description:{
            type: String, 
            required: true,
        },
        duration:{
            type: Number, // cloudinary url
            required: true,
        },
        view:{
            type:Number,
            default:0,
        },
        isPublished:{
            type:Boolean,
            default: true,
        },
        Owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
        }

    },
    {
        timestamps: true,
    }
)

VideoSchema.plugin(mongooseAggregatePaginate) // write Aggregate Query

export const Video = mongoose.model("Video", VideoSchema)