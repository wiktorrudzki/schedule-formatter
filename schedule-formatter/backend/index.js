const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Axios = require("axios");
const request = require("request-promise");
const cheerio = require("cheerio");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get/12k1", (req, res) => {
  request(
    "https://podzial.mech.pk.edu.pl/stacjonarne/html/plany/o29.html",
    (err, response, html) => {
      if (!err && response.statusCode == 200) {
        let $ = cheerio.load(html);

        const data = [""];

        $("td.l").each((i, element) => {
          if (element.children.length === 1) {
            if (element.children[0].type === "text") {
              if (element.children[0].data === "zajęcia dodatkowe") {
                data.push("zajecia dodatkowe");
              } else {
                data.push("okienko");
              }
            }
          }
          element.children.forEach((x) => {
            if (x.type === "tag") {
              if (x.children[0]) {
                if (x.children.length > 1) {
                  if (x.children[0].type === "tag") {
                    if (x.children[0].children[0].type === "text") {
                      data.push(x.children[0].children[0].data);
                    }
                  }
                  if (x.children[4].type === "tag") {
                    if (x.children[4].children[0].type === "text") {
                      data.push(x.children[4].children[0].data);
                    }
                  }
                  return;
                }
                if (x.children[0].type === "tag") {
                  if (x.children[0].children[0].type === "text") {
                    data.push(x.children[0].children[0].data);
                  }
                } else if (x.children[0].type === "text") {
                  if (x.children[0].data.includes("#")) return;
                  data.push(x.children[0].data);
                }
              } else {
                data.push("<br>");
              }
            } else if (x.type === "text") {
              if (x.data.trim() === "-(P)" || x.data.trim() === "-(N)") {
                data.push(x.data);
              }
            }
          });
        });
        data.shift();
        res.send(data);
      } else {
        res.send("failure");
      }
    }
  );
});

app.get("/api/get/12k2", (req, res) => {
  request(
    "https://podzial.mech.pk.edu.pl/stacjonarne/html/plany/o30.html",
    (err, response, html) => {
      if (!err && response.statusCode == 200) {
        let $ = cheerio.load(html);

        const data = [""];

        $("td.l").each((i, element) => {
          if (element.children.length === 1) {
            if (element.children[0].type === "text") {
              if (element.children[0].data === "zajęcia dodatkowe") {
                data.push("zajecia dodatkowe");
              } else {
                data.push("okienko");
              }
            }
          }
          element.children.forEach((x) => {
            if (x.type === "tag") {
              if (x.children[0]) {
                if (x.children.length > 1) {
                  if (x.children[0].type === "tag") {
                    if (x.children[0].children[0].type === "text") {
                      data.push(x.children[0].children[0].data);
                    }
                  }
                  if (x.children[4].type === "tag") {
                    if (x.children[4].children[0].type === "text") {
                      data.push(x.children[4].children[0].data);
                    }
                  }
                  return;
                }
                if (x.children[0].type === "tag") {
                  if (x.children[0].children[0].type === "text") {
                    data.push(x.children[0].children[0].data);
                  }
                } else if (x.children[0].type === "text") {
                  if (x.children[0].data.includes("#")) return;
                  data.push(x.children[0].data);
                }
              } else {
                data.push("<br>");
              }
            } else if (x.type === "text") {
              if (x.data.trim() === "-(P)" || x.data.trim() === "-(N)") {
                data.push(x.data);
              }
            }
          });
        });
        data.shift();
        res.send(data);
      } else {
        res.send("failure");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
