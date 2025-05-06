export default function handler(req, res) {
  const text = (req.body?.text || "").toLowerCase();
  let sentiment = "Neutral";
  let suggestedCampaign = "WELCOME";

  if (text.includes("frustrated") || text.includes("not working") || text.includes("angry") || text.includes("complaint")) {
    sentiment = "Negative";
    suggestedCampaign = "REACTIVATION";
  } else if (text.includes("excited") || text.includes("love") || text.includes("thank you") || text.includes("gift")) {
    sentiment = "Positive";
    suggestedCampaign = "BIRTHDAY";
  }

  const summary = `Summary based on agent note: "${text}"`;

  res.status(200).json({
    summary,
    sentiment,
    suggestedCampaign
  });
}