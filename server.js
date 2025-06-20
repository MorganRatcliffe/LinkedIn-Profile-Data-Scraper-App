import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/analyze", (req, res) => {
console.log("🚀 REQUEST RECEIVED: ", JSON.stringify(req.body, null, 2));
  res.status(200).json({
    message: "✅ POST received successfully",
    received: req.body
  });
});

app.get("/", (req, res) => {
  res.send("👋 Server is up and running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
