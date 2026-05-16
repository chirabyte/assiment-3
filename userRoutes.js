const express = require("express");

const router = express.Router();

const User = require("../models/User");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");


// PROFILE ROUTE
router.get(
  "/profile",
  authMiddleware,

  async (req, res) => {

    const user = await User.findById(req.user.id);

    res.json(user);

  }
);


// ADMIN ROUTE
router.get(
  "/all-users",
  authMiddleware,
  roleMiddleware("admin"),

  async (req, res) => {

    const users = await User.find();

    res.json(users);

  }
);

module.exports = router;