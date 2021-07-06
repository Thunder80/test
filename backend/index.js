const express = require("express");
const crpyto = require("crypto");
const jwt = require("jsonwebtoken");
const ms = require("ms");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

const main = async () => {
  await mongoose.connect("mongodb://localhost/userDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

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

  app.get("/signup", async (req, res) => {
    const { email, password } = req.query;
    const user = await User.find();

    res.json(user);
  });

  app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    // validation

    await User.create({
      email,
      password: crpyto.createHash("md5").update(password).digest("hex"),
    });

    res.json({ email, password });
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // validation

    const user = await User.findOne({ email });
    console.log(user);
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
};

main();
