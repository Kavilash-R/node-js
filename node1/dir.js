const fs = require("fs"); // this fs will have every file data in file system
const path = require("path");
async function makingDir() {
  if (fs.existsSync("./new")) {
    await fs.rmdir("./new", (err) => {
      if (err) throw err;
      console.log("directory removed");
    });
  }
  if (!fs.existsSync("./new")) {
    await fs.mkdir("./new", (err) => {
      if (err) throw err;
      console.log("directory created");
    });
  }
  process.on("uncaughtException", (err) => {
    console.error(`this is the error ${err}`);
  });
}
makingDir();
