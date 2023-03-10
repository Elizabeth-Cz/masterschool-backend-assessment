const express = require('express');
const router = express.Router();
const { getPhotos, getPhotoById } = require('../controllers/photoController');

// GET /api/photos
router.get('/', async (req, res) => {
  try {
    const photos = await getPhotos();
    const photoUrls = photos.map((photo) => photo.urls.raw);
    console.log(photos);
    res.json(photoUrls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/photos/:id
router.get('/:id', async (req, res) => {
  try {
    const photo = await getPhotoById(req.params.id);
    res.json(photo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
