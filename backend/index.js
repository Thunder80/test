const express = require("express");
const crpyto = require("crypto");
const jwt = require("jsonwebtoken");
const ms = require("ms");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const app = express();

const database = [];

const JWT_SECRET = "aosdfojasodfafaweoijoanfsd";

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  // validation

  database.push({
    email,
    password: crpyto.createHash("md5").update(password).digest("hex"),
  });

  res.sendStatus(200);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // validation

  const user = database.find((e) => e.email === email);
  if (!user) return res.sendStatus(400);

  const hashedPassword = crpyto
    .createHash("md5")
    .update(password)
    .digest("hex");

  if (hashedPassword !== user.password) return res.sendStatus(400);

  const token = jwt.sign({ email }, JWT_SECRET);

  res.cookie("login", token, { maxAge: ms("1d") });
  res.sendStatus(200);
});

app.listen(5000, () => console.log("Server listening on port 5000"));
