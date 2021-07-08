import { buildFeedbackPath, extractFeedbackData } from "../api/feedback";

const Feedback = (props) => {
  const { feedbackItem } = props;
  return (
    <ul>
      {feedbackItem.map((item) => (
        <li key={item.id}>{item.message}</li>
      ))}
    </ul>
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
