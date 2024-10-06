import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async (req, res) => {

    // get user details from frontend
    console.log(req.body);
    const { email, username, password, fullname } = req.body
    console.log("Email :", email);

    // validation - not empty
    if (
        [email, fullname, password, username].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400, "All Filleds are Required")
    }
    // check if user already exists: username, email
    const existedUser = User.findOne({
        $or: [{ email }, { username }]
    })
    if (existedUser) {
        throw new ApiError(400, "This User Are Already Exists")
    }

    // check for images, check for avatar
    console.log(req.files);
    console.log(req.files.avatar);
    console.log(req.files.avatar[0]);
    console.log(req.files.avatar[0].path);

    const avatarLocalPath = req.files?.avatar[0]?.path;
    console.log(avatarLocalPath);
    const coverImagePath = req.files?.coverImage[0]?.path;
    console.log(coverImage);

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar Files Is Required")
    }

    // upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImage);

    if (!avatar) {
        throw new ApiError(400, "Avatar Files Is Required")
    }

    // create user object - create entry in db

    const user = await User.create({
        fullname,
        username: username.toLowercase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
    })


    // remove password and refresh token field from response

    const createdUser = await User.findById({ user_id }).select(
        "-password -refreshToken"
    )

    // check for user creation

    if (!createdUser) {
        throw new ApiError(500, "Something Went Wrong While Registering the User")
    }

    // return res
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created SuccessFully", 200)
    )
})

export { registerUser }