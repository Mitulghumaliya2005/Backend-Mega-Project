import fs from "fs"
import { v2 as cloudinary } from 'cloudinary'
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECREST,
});

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) {
            return null
        }
        const response = await cloudinary.uploader.upload(localfilepath, { resource_type: "auto" })
        // fille has been uploaded successfull
        console.log("fille is uploaded on cloudinary: ", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
