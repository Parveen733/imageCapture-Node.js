const express = require('express');
const router = express.Router();
// const multer = require('multer');
const imageController = require('./controller/image-controller');
// const upload = multer({ dest: 'uploads/' });
// Route to receive image data

router.post('/upload',imageController.processImage);
router.get("/get-report/:id",imageController.getReport)
router.get("/get-all-report",imageController.getAllReport)
module.exports = router;
