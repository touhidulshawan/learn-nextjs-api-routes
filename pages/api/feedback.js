import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const newFeedback = {
      id: new Date().toISOString(),
      email: req.body.email,
      message: req.body.message,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).send({ message: "New Feedback created successfully" });
  } else {
    res.status(406).send({ message: "something gone wrong" });
  }
}

export default handler;
