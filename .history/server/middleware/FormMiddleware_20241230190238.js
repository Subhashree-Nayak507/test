import multer from multer;
import cloudinary from "../utils/cloudinary";
import { CloudinaryStorage} from 'multer-storage-cloudinary';

// Configure multer-storage-cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpeg", "png", "jpg"], 
  },
});

export const upload = multer({ storage });


