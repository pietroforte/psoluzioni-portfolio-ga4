export default function handler(req, res) {
  res.status(200).json({
    status: "Campaign triggered",
    contactID: req.body?.contactID,
    campaign: req.body?.eventCode,
    source: req.body?.source
  });
}