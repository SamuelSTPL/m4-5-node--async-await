// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    // console.log(response);
    const issLocation = JSON.parse(response);
    // console.log(issLocation);
    let lat = issLocation.iss_position.latitude;
    let lng = issLocation.iss_position.longitude;
    return console.log({ lat, lng });
  } catch (err) {
    console.log("Error: ", err);
  }
};

console.log(getIssPosition());
