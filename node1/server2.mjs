import { readFile } from "node:fs";

readFile("./files/welcome.txt", "Utf8", (err, data) => {
  // Utf8 makes the buffer reading to radable string
  if (err) throw err;
  console.log(data);
});
console.log("hello world");
process.on("uncaughtException", (err) => {
  console.error(`this is the error ${err}`);
});
