const axios = require('axios');
const { LOCATION_API } = require('./constants');

module.exports = async () => {
  const results = await axios({
    method: 'get',
    url: LOCATION_API,
  });

  const { city, region } = results.data;
  return `${city}, ${region}`;
};
