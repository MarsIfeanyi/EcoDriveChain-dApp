import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.post("/api/create-wallet", async (req, res) => {
  const { email } = req.body;

  // Ensure the email is provided
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const apiKey =
    "7ca41eaab84a720a2c934fd7d1a13d28:d361174f7138f1d8b2b913f26d9b45fb";
  const url = "https://api-sandbox.circle.com/v1/wallets";

  const userData = {
    email: email,
  };

  const idempotencyKey = generateIdempotencyKey();

  const generateIdempotencyKey = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000000);
    const idempotencyKey = `${timestamp}-${random}`;
    return idempotencyKey;
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Idempotency-Key": idempotencyKey,
    },
  };

  try {
    const response = await axios.post(url, userData, config);
    console.log("Wallet created successfully:", response.data);
    return res.json(response.data);
  } catch (error) {
    console.error("Error creating wallet:", error.response.data);
    return res.status(500).json({ error: "Failed to create wallet" });
  }
});

app.listen(5173, () => {
  console.log("Server is running on port 5173");
});
