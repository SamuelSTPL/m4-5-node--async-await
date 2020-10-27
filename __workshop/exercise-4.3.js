const request = require("request-promise");

const getGeekJoke = async () => {
  let option = {
    url: "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    json: true,
  };
  try {
    let result = await request(option);
    return result.joke;
  } catch (err) {
    console.log(err.message);
  }
};

// getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
