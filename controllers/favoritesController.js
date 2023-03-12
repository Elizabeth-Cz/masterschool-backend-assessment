//Import asyncHandler so that we can use it in our routes to trigger error handling middleware
const asyncHandler = require('express-async-handler');
const FavoritePhoto = require('../models/favoritePhotoModel');

// @desc POST to favorites
// @route POST /api/favorites/
// @access Private
const addToFavorites = asyncHandler(async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'No authorized user' });

  const { url, username, description, explanation } = req.body;

  const favoritePhoto = await FavoritePhoto.create({
    user: req.user._id,
    url,
    description,
    username,
    explanation,
  });

  res.status(200).json({
    favoritePhoto,
    message: `Added to your favorites! because ${explanation}`,
  });
});

// @desc GET favorites
// @route GET /api/favorites/
// @access Private
const getFavorites = asyncHandler(async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'No authorized user' });

  const favorites = await FavoritePhoto.find({ user: req.user._id });
  if (!favorites)
    return res.status(404).json({ message: 'Favorites not found' });

  res.status(200).json(favorites);
});

// @desc UPDATE favorite's explanation
// @route PUT /api/favorites/:id
// @access Private
const updateFavorite = asyncHandler(async (req, res) => {
  const favorite = await FavoritePhoto.findById(req.params.id);

  if (!favorite) res.status(404).json('Favorite not found');
  if (!req.user) res.status(404).json('No authorized user');
  if (favorite.user.toString() !== req.user._id.toString())
    res.status(401).json('User not authorized');

  favorite.explanation = req.body.explanation;
  const updatedFavorite = await favorite.save();

  res.status(200).json(updatedFavorite);
});

// @desc DELETE favorite
// @route DELETE /api/favorites/:id
// @access Private
const deleteFavorite = asyncHandler(async (req, res) => {
  const favorite = await FavoritePhoto.findById(req.params.id);

  if (!favorite) res.status(404).json('Favorite not found');
  if (favorite.user.toString() !== req.user._id.toString())
    res.status(401).json('User not authorized');

  await favorite.remove();

  res.status(204).json(`Favorite #${req.params.id} deleted successfully.`);
});

module.exports = {
  addToFavorites,
  getFavorites,
  updateFavorite,
  deleteFavorite,
};
