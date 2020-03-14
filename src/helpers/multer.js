import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/images');
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, `${Date.now()}.${extension}`);
    }
})
const upload = multer({ storage: storage });

export default upload;