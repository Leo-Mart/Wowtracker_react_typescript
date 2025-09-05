import app from "./app.ts";
import config from "./config/config.ts";
import { db } from "./databases/mongoDB.ts";

app.listen(config.port, () => {
  console.log(`The server is running on port ${config.port}`);
});

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Connected to the database!");
});
