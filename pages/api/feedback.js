import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const feedbackHandler = (req, res) => {
  if (req.method === "POST") {
    const newFeedback = {
      id: new Date().toISOString(),
      email: req.body.email,
      message: req.body.message,
    };

    const filePath = buildFeedbackPath();
    const data = extractFeedbackData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).send({ message: "New Feedback created successfully" });
  } else {
    res.status(406).send({ message: "something gone wrong" });
  }
};

export default feedbackHandler;
