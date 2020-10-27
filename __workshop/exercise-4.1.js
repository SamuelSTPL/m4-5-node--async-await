const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  let option = {
    uri: "http://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    let result = await request(option);
    return result.joke;
  } catch (err) {
    console.log(err);
  }
};
// 4.1
// getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
