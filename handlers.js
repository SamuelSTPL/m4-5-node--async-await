const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

handleJoke = async (type) => {
  try {
    if (type === "dad") {
      return await getDadJoke();
    } else if (type === "geek") {
      let joke = await getGeekJoke();
      return joke;
      // console.log(joke);
    }
    if (type === "tronald") {
      return await getTronaldDumpQuote();
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { handleJoke };
