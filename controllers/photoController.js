const axios = require('axios');

const BASE_URL = process.env.BASE_URL;
const ACCESS_KEY = process.env.ACCESS_KEY;

// @desc Get photos
// @route GET /api/photos/
// @access Public
const getPhotos = async () => {
  const response = await axios.get(`${BASE_URL}/photos/`, {
    params: { client_id: ACCESS_KEY },
  });
  return response.data;
};

// @desc Get a photo by id
// @route GET /api/photos/:id
// @access Public
const getPhotoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/photos/${id}`, {
    params: { client_id: ACCESS_KEY },
  });
  return response.data;
};

const getUserPhotos = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}/photos`, {
    params: { client_id: ACCESS_KEY },
  });
  return response.data;
};

module.exports = { getPhotos, getPhotoById, getUserPhotos };
