const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/analyze", (req, res) => {
  res.json({ message: "✅ Received POST to /api/analyze", body: req.body });
});

app.get("/", (req, res) => {
  res.send("Fly.io app is running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
