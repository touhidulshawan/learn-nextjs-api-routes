import { useState } from "react";
import { buildFeedbackPath, extractFeedbackData } from "../api/feedback";

const Feedback = (props) => {
  const [feedback, setFeedback] = useState(); //! redundant
  const { feedbackItem } = props;
  //! redundant but ok for learning dyanmic api routes
  const getFeedbackHandler = async (id) => {
    const response = await fetch(`/api/feedback/${id}`);
    const { feedback } = await response.json();
    setFeedback(feedback);
  };
  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {feedbackItem.map((item) => (
          <li key={item.id}>
            {item.message}
            <button onClick={() => getFeedbackHandler(item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedbackData(filePath);
  return {
    props: {
      feedbackItem: data,
    },
  };
}

export default Feedback;
