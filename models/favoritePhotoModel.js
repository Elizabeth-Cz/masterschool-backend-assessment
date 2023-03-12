const mongoose = require('mongoose');

// @desc Post to favorites
// @route POST /api/favorites/
// @access Private
const favoritePhotoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    url: { type: String, required: true },
    description: { type: String, required: true },
    username: { type: String, required: true },
    explanation: { type: String },
  },
  {
    collection: 'favoritePhotos',
  }
);

module.exports = mongoose.model('FavoritePhoto', favoritePhotoSchema);
