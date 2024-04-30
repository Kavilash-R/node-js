const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "files", "bigdata.txt"),
  "Utf8"
);

// this is how we transfer or copy big data to other files
const ws = fs.createWriteStream(
  path.join(__dirname, "files", "bigNewdata.txt"),
  "Utf8"
);

// this just copy the small parts of data and sends to new file, this will copy the data faster
/*
rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});
*/
// another way
rs.pipe(ws);
