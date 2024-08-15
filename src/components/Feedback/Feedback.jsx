import css from "..//Feedback/Feedback.module.css";

export default function Feedback({
  values: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {good}</li>
      <li className={css.feedbackItem}>Neutral: {neutral}</li>
      <li className={css.feedbackItem}>Bad: {bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItemPositive}>
        Positive: {positiveFeedback}%
      </li>
    </ul>
  );
}
