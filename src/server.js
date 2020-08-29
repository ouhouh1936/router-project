import express from "express";
import path from "path";
import morgan from "morgan";
import ROUTER from "./router/router";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", ROUTER);
app.get("/intro", ROUTER);
app.get("/about", ROUTER);

app.listen(PORT, () => {
  console.log(`${PORT} serverstart`);
});
