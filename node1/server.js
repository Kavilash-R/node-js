/* we can use ES6 modules here by renaming the extension as ( .mjs instead of .js ) and then we can use import etc 
 and also mention extension while executing the file ex: node server.mjs 
*/

console.log("hello world");

const os = require("os");
const math = require("./math"); // require is same as import in javascript (this is how we import data or methods from other file)
const { add, sub, mul, div } = require("./math"); // to directly call math function we need to define it by destructing here too

console.log(sub(4, 4));
console.log(add(3, 3)); // we can mention math.add(3,3)  ||  add(3,3)
console.log(div(5, 9));

/* 
console.log(global);
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename); 
*/

const fs = require("fs"); // this fs will have every file data in file system
const path = require("path");

// this is how we read a file and this is a asynchronous code
fs.readFile(
  path.join(__dirname, "files", "welcome.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
  "Utf8", // Utf8 makes the buffer reading to radable string
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// this is how we write a file and this is a asynchronous code
fs.writeFile(
  path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
  "this is the end of the file guys", // this  is the content we will be posting in the file
  (err) => {
    if (err) throw err;
    console.log("write is completed");

    // this is to append or update a file
    // but this will bring callback hell so we need to change it as async and awit which is done in serverAsync.js
    fs.appendFile(
      path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
      "/n/n this data is appended after writing", // this  is the content we will be posting in the file
      (err) => {
        if (err) throw err;
        console.log("append is completed");

        // this is how we rename a file
        fs.rename(
          path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
          path.join(__dirname, "files", "continue.txt"), // this  is the content we will be posting in the file
          (err) => {
            if (err) throw err;
            console.log("rename is completed");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (err) => {
  console.error(`this is the error ${err}`);
});
