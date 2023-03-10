const express = require('express');
const router = express.Router();
const {
  getPhotos,
  getPhotoById,
  getUserPhotos,
} = require('../controllers/photoController');

// GET /api/photos
router.get('/', async (req, res) => {
  try {
    const photos = await getPhotos();
    const photoUrls = photos.map((photo) => photo.urls.raw);
    console.log(photos);
    res.json(photoUrls);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

router.get('/user/:username', async (req, res) => {
  try {
    const userPhotos = await getUserPhotos(req.params.username);
    const data = userPhotos.map((photo) => {
      return {
        id: photo.id,
        username: photo.user.username,
        description: photo?.description || 'No description provided',
        url: photo.urls.raw,
      };
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.response);
    res
      .status(error.response.status)
      .json({ message: error.response.data.errors[0] });
  }
});

// GET /api/photos/:id
router.get('/:id', async (req, res) => {
  try {
    const photo = await getPhotoById(req.params.id);
    res.status(200).json(photo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
