const { request } = require('axios');

const _headers = {
  'content-type': 'application/json'
};

const get = async (url) => {
  const options = {
    url,
    option: 'GET',
    headers: _headers
  };

  try {
    const response = await request(options);
  
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }

  return undefined;
};

module.exports = { get };