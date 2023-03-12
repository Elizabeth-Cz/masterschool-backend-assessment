const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  addToFavorites,
  getFavorites,
  updateFavorite,
  deleteFavorite,
} = require('../controllers/favoritesController');

router.route('/').post(protect, addToFavorites).get(protect, getFavorites);
router
  .route('/:id')
  .put(protect, updateFavorite)
  .delete(protect, deleteFavorite);

module.exports = router;
