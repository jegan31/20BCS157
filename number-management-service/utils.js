const validURL = (url) => {
    // Regular expression to validate the URL format
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };
  
  const extractNumbers = (data) => {
    // Regular expression to extract numbers from a string
    const numberRegex = /\b\d+\b/g;
    return data.match(numberRegex)?.map(Number) || [];
  };
  
  module.exports = { validURL, extractNumbers };
  