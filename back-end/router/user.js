const express = require("express");
const { ObjectId } = require("mongodb");
const userRouter = express.Router();
const { db } = require("../db");
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const jwtKey = require("./key");

userRouter.post("/sign-up", async (req, res) => {
    const { username,email, password } = req.body;
    const saltRounds = 10;
    await bcrypt.hash(password, saltRounds,async function(err, hash) {
        
        const respond = await db.users.insertOne({
          username,
          email,
          password: hash,
        });

        res.status(201);
        res.json(respond)
        if (err) {
            res.status(500)
            res.json(err)
        }
    });
    return
  });

  userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const userFromDB = await db.users.findOne({
        username
    })
    const isPasswordMatch = await bcrypt.compare( password, userFromDB.password)

  if (isPasswordMatch === false) {
    res.status(401);
    res.json("User is not existed");
    return;
  }
//
  const token = jwt.sign(userFromDB, jwtKey);
  res.json({ token: token });
});

module.exports = userRouter