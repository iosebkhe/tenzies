import styles from "./Die.module.css";

function Die(props) {
  return (
    <div
      onClick={props.holdDice}
      className={`${styles.dice} ${props.isHeld ? styles.diceActive : ""}`}
    >
      <p className={styles.diceText}>{props.value}</p>
    </div>
  );
}

export default Die;
