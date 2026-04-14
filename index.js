import express from "express";
import { ClobClient } from "py-clob-client"; // (we’ll adjust if needed)

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/trade", async (req, res) => {
  const { market_id, side, price, size } = req.body;

  try {
    // placeholder (we’ll wire real execution next)
    console.log("Incoming trade:", req.body);

    return res.json({
      status: "SIMULATED",
      market_id,
      side,
      price,
      size
    });

  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
