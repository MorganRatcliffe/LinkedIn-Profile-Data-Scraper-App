import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("👋 Server is up and running.");
});

// POST endpoint for analysis
app.post("/api/analyze", (req, res) => {
  try {
    console.log("🚀 POST /api/analyze received:");
    console.log(JSON.stringify(req.body, null, 2));

    // Basic validation
    const { fullName, email, linkedinUrl, profileType, goal } = req.body;
    if (!fullName || !email || !linkedinUrl || !profileType || !goal) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Respond with success
    return res.status(200).json({
      message: "✅ POST received successfully.",
      received: req.body,
    });
  } catch (error) {
    console.error("❌ Error in /api/analyze:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
