const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

const renderTravelList = (rec, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + " Travel";

  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No trips exist in database";
    }
  }
  res.render("travel", {
    title: pageTitle,
    trips: responseBody,
    message,
  });
};

/* get travel list*/
const travelList = (req, res) => {
  const path = "/api/trips";
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
  };

  console.info(" >> travelcontroller.travelList calling" + requestOptions.url);
  request(requestOptions, (err, { statusCode }, body) => {
    if (err) {
      console.error(err);
    } else if (response.statusCode === 200) {             2
        console.log(body);                                  2
      } else {                                              2
        console.log(response.statusCode);                   2
      }
    renderTravelList(req, res, body);
  });
};

module.exports = {
  travelList,
};