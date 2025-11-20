import { useAnimate } from "framer-motion";
import { useState } from "react";
import { TbClover } from "react-icons/tb";
import { NavHashLink } from "react-router-hash-link";
import Modal from "src/components/modal/Modal";
import { useDice } from "src/store/store";
import Header from "../../header/Header";
import styles from "./RandomFact.module.css";

const RandomFact = () => {
  const notWatchedFacts = useDice((state) => state.notWatchedFacts);
  const diceResult = useDice((state) => state.diceResult);
  const watchFact = useDice((state) => state.watchFact);
  const clearDiceResult = useDice((state) => state.clearDiceResult);

  const [scope, animate] = useAnimate();

  const rollDice = async () => {
    clearDiceResult();
    await animate(
      scope.current,
      { rotate: 360, y: "-100%", x: 0 },
      {
        duration: 0.8,
        bounce: 0,
        type: "spring",
      }
    );
    animate(
      scope.current,
      { rotate: 720 },
      {
        visualDuration: 0.8,
        bounce: 0,
        type: "spring",
        onComplete: () => {
          const diceResult = Math.ceil(Math.random() * 20);
          const factInd = Math.floor(Math.random() * notWatchedFacts.length);
          watchFact(factInd, diceResult);
        },
      }
    );
    animate(
      scope.current,
      { x: 0, y: 0 },
      { visualDuration: 0.8, bounce: 0.8, type: "spring" }
    );
  };
  return (
    <section id="random-fact" aria-label="random fact">
      <Header
        name={"Random fact"}
        textSecondary={"roll a dice to know more about me"}
        icon={<TbClover className="icon" />}
      />
      <div className={styles.GameContainer}>
        <button ref={scope} onClick={rollDice} className={styles.DiceContainer}>
          <img src="img/dice3.png" alt="dice d20" className={styles.Dice} />
          <div className={styles.Result}>{diceResult}</div>
        </button>
        {diceResult && (
          <GameResultFact diceResult={diceResult} rollDice={rollDice} />
        )}
      </div>
    </section>
  );
};

type FactProps = {
  diceResult: number;
  rollDice: () => void;
};

const Fact = () => {
  const currentFact = useDice((state) => state.currentFact);
  return <div className={styles.Fact}>⭐ {currentFact}</div>;
};
// todo: naming?
const GameResultFact = ({ diceResult: result, rollDice }: FactProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (result === 20) {
    return (
      <>
        <div className={styles.FactContainer}>
          <Fact />
          <>
            This is a critical success! You won a{" "}
            <button onClick={() => setIsModalOpen(true)}>[photo]</button> of me
            from the past as a bonus ✨
          </>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <img src={import.meta.env.BASE_URL + "img/TaliPhoto.jpg"} />
        </Modal>
      </>
    );
  }
  // todo: design buttons
  if (result === 1) {
    return (
      <div className={styles.FactContainer}>
        This is a critical failure! You're welcome to provide a fact about
        yourself.{" "}
        <NavHashLink to={"#contact-me"} smooth>
          [Contact me]
        </NavHashLink>{" "}
        <br />
        or{" "}
        <button onClick={rollDice} className={styles.TryAgain}>
          [try again]
        </button>
      </div>
    );
  }

  return (
    <div className={styles.FactContainer}>
      <Fact />
    </div>
  );
};

export default RandomFact;
