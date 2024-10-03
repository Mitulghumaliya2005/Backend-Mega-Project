import multer from "multer";

// go and read documentions and implement copy and paste
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp") 
    },
    filename: function (req, file, cb) {
      console.lod(file)
      console.log(file.originalname)
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})