const fsPromises = require("fs").promises;
const path = require("path");

const fileExe = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "welcome.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
      "Utf8" // Utf8 makes the buffer reading to radable string
    );
    console.log("read completed");

    await fsPromises.writeFile(
      path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
      "this is the end of the file guys"
    );
    console.log("write is completed");
    // this  is the content we will be posting in the file

    // this is to append or update a file
    // but this will bring callback hell so we need to change it as async and awit which is done in serverAsync.js
    await fsPromises.appendFile(
      path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
      "/n/n this data is appended after writing"
    ); // this  is the content we will be posting in the file
    console.log("append is completed");

    // this is how we rename a file
    await fsPromises.rename(
      path.join(__dirname, "files", "end.txt"), // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
      path.join(__dirname, "files", "continue.txt")
    ); // this  is the content we will be posting in the file

    console.log("rename is completed");

    // to delete a file we use unlink
    await fsPromises.unlink(
      path.join(__dirname, "files", "continue.txt") // this is how we need to mention path name in every area instead of mentioning the path name in hardcode
    );
    console.log("deleted welcome.txt is complete  ");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

process.on("uncaughtException", (err) => {
  console.error(`this is the error ${err}`);
});

fileExe();
