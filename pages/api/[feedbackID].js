import { buildFeedbackPath, extractFeedbackData } from "./feedback";

const handler = (req, res) => {
  const id = req.query.feedbackID;
  const filePath = buildFeedbackPath();
  const data = extractFeedbackData(filePath);
  const selectedFeedback = data.find((feedback) => feedback.id === id);

  return res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
