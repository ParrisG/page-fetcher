const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const webAdd = args[0];
const localPath = args[1];

const fetcher = function(webAdd, localPath) {
  request(webAdd, (error, response, body) => {
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.log('error: ', err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}.`);
    })
  })
};

fetcher(webAdd, localPath);
