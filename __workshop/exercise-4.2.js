const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  let option = {
    uri: "https://api.tronalddump.io/random/quote",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    let result = await request(option);
    return result.value;
  } catch (err) {
    console.log(err.message);
  }
};
// getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
