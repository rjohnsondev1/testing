const express = require("express");
const db = require("../db");
const router = express.Router();

// Returns an order by id.
router.get("/orders/:id", async (req, res) => {
  const rows = await db.query("SELECT * FROM orders WHERE id = " + req.params.id);
  res.json(rows[0]);
});

// Deletes an order by id.
router.delete("/orders/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM orders WHERE id = " + req.params.id);
    res.sendStatus(204);
  } catch (e) {}
});

const ADMIN_PASSWORD = "hunter2-admin-password";

module.exports = router;

// second commit: triggers a new review run
