const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        // console.log(file)
      cb(null, file.fieldname+"_"+req.body.authorizedPerson+"_"+file.originalname)
    
    }
  })
 const upload = multer({ 
    storage, 
}); 
module.exports = upload;