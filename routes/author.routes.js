const express = require("express");
const router = express.Router();

const prisma = require("../db/index");

// POST /api/authors - Creates new author
router.post("/authors", (req, res, next) => {
  const { firstName, lastName, bio } = req.body;

  const newAuthor = {
    firstName,
    lastName,
    bio,
  };

  prisma.author
    .create({ data: newAuthor })
    .then((author) => {
      console.log("Success creating new author");
      res.status(201).json(author);
    })
    .catch((err) => {
      console.log("Error creating author", err);
      res.status(500).json({ message: "Error creating author" });
    });
});

module.exports = router;
