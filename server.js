import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/analyze", async (req, res) => {
  try {
    console.log("📦 Received POST to /api/analyze");
    console.log("📬 Raw Body:", JSON.stringify(req.body, null, 2));

    const { fullName, email, linkedinUrl, profileType, goal } = req.body;

    if (!fullName || !email || !linkedinUrl || !profileType || !goal) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    res.status(200).json({
      message: "✅ POST received successfully",
      received: req.body,
    });
  } catch (error) {
    console.error("🔥 Error handling /api/analyze:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("👋 Server is up and running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
