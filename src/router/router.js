import express, { Router } from "express";

const ROUTER = express.Router();
ROUTER.get("/", (req, res) => {
  console.log("qqqqqq");
  res.render("index");
});
ROUTER.get("/intro", (req, res) => {
  console.log("qqqqqq");
  res.render("intro");
});

ROUTER.get("/about", (req, res) => {
  console.log("qqqqqq");
  res.render("about");
});

export default ROUTER;
