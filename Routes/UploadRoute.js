import express from 'express'
import multer from 'multer'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import config from '../firebase.js'

const router = express.Router()

initializeApp(config.firebaseConfig);
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/images/:type', upload.single('file'), async (req, res) => {
  
  try {
    if (!req.file) {
      return res.status(400).json("No file provided");
    }
    const dateTime = givenCurrentDateTime();
    const file = req.file;
    const storagePath = (req.params.type === 'image') ? 'images' : 'videos';
    const storageRef = ref(storage, `images/${file.originalname}`);

    const metadata = {
      contentType: req.file.mimetype,
    }

    const snapShot = await uploadBytesResumable(storageRef, file.buffer, metadata)
    const downloadURL = await getDownloadURL(snapShot.ref);
    
    return res.status(200).json({
      message: 'file uploaded to firebase storage',
      name: req.file.originalname,
      type: req.file.mimetype,
      downloadURL: downloadURL
    })

    // return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
})

const givenCurrentDateTime = () =>{
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}

export default router