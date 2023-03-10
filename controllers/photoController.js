const axios = require('axios');

const BASE_URL = process.env.BASE_URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

// @desc Get photos
// @route GET /api/photos/
// @access Public
const getPhotos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/`, {
      params: { client_id: ACCESS_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Server error. Please try again later.');
  }
};

// @desc Get a photo by id
// @route GET /api/photos/:id
// @access Public
const getPhotoById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/${id}`, {
      params: { client_id: ACCESS_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Server error. Please try again later.');
  }
};

module.exports = { getPhotos, getPhotoById };
