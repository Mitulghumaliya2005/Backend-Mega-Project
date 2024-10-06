const asyncHandler = (requesthandler) => {
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next))
            .catch((Error) =>
                next(Error)
            )
    }
}



export { asyncHandler }

// const asyncHandler = () => { }
// const asyncHandler = (fun) => { () => { } } // const asyncHandler = (fun) =>  () => { }
// const asyncHandler = (fun) => { async () => { } }

// const asyncHandler = (fun) => async (req, res, next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         error.status(error.code).json({
//             success: false,
//             message: error.message,
//         })
//     }
// } 