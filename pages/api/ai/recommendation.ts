export default function handler(req, res) {
  res.status(200).json({
    action: "Offer 10% Discount",
    confidence: 0.92
  });
}