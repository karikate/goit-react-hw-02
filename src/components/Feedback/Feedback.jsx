const Feedback = ({ feedbackData, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good:{feedbackData.good}</li>
        <li>Neutral: {feedbackData.neutral} </li>
        <li>Bad: {feedbackData.bad} </li>
        {totalFeedback > 0 && <li>Total: {totalFeedback} </li>}
        {feedbackData.good > 0 && <li>Positive: {positiveFeedback}% </li>}
      </ul>
    </div>
  );
};

export default Feedback;
