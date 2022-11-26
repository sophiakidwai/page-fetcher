const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
const path = process.argv[3];
const url = process.argv[2];


//GET
request(url, (error, response, body) => {
  if (error) {
    console.error('error:', error);
  }
  fs.writeFile(`${path}`, body, error => {
    if (error) {
      console.error('error:', error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} to ${path}`);
    }
  });
});