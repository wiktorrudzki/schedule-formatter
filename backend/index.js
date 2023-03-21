const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request-promise");
const cheerio = require("cheerio");
const formatData = require("./formatData");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const routes = {
  "12k1": "o24",
  "12k2": "o25",
};

app.get("/api/:id", (req, res) => {
  let route;
  switch (req.params.id) {
    case "12K1":
      route = routes["12k1"];
      break;
    case "12K2":
      route = routes["12k2"];
      break;
    default:
      throw new Error("not valid route for this api");
  }
  request(
    `https://podzial.mech.pk.edu.pl/stacjonarne/html/plany/${route}.html`,
    (err, response, html) => {
      if (!err && response.statusCode == 200) {
        let $ = cheerio.load(html);
        const data = formatData($);
        res.send(data);
      } else {
        res.send("failure");
      }
    }
  );
});

app.listen(3001, () => {});
