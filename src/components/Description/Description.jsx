import css from "../Description/Description.module.css";

export default function Description() {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p className={css.textDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
