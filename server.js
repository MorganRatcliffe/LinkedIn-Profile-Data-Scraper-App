import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// POST endpoint
app.post("/api/analyze", (req, res) => {
  console.log("🚀 REQUEST RECEIVED:", JSON.stringify(req.body, null, 2));

  res.status(200).json({
    message: "✅ POST received successfully",
    received: req.body,
  });
});

// Root route (health check)
app.get("/", (req, res) => {
  res.send("👋 Server is up and running.");
});

// Listen on 0.0.0.0 so Fly.io accepts external traffic
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
