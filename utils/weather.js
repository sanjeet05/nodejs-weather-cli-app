const axios = require('axios');
const { WEATHER_API } = require('./constants');

module.exports = async (location) => {
  const results = await axios({
    method: 'get',
    url: WEATHER_API,
    params: {
      format: 'json',
      q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")`,
    },
  });

  return results.data.query.results.channel.item;
};
