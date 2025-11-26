import { useAnimate } from "framer-motion";
import { useState } from "react";
import { TbClover } from "react-icons/tb";
import { NavHashLink } from "react-router-hash-link";
import Modal from "src/components/modal/Modal";
import { useDice, useTooltip } from "src/store/store";
import Header from "../../header/Header";
import styles from "./RandomFact.module.css";
import {
  AchievementT,
  AchievementId,
  getAchievementData,
} from "src/feature/Achevements";
import { findById } from "src/utils/array";
import { useLocalStorage } from "usehooks-ts";
import { FACTS, TALI_RESUME_KEY } from "src/constants/constants";

const RandomFact = () => {
  const [_, setAchievements] = useLocalStorage<AchievementT[]>(
    TALI_RESUME_KEY,
    []
  );
  const notWatchedFacts = useDice((state) => state.notWatchedFacts);
  const diceResult = useDice((state) => state.diceResult);
  const watchFact = useDice((state) => state.watchFact);
  const clearDiceResult = useDice((state) => state.clearDiceResult);
  const openTooltip = useTooltip((state) => state.openTooltip);

  const [scope, animate] = useAnimate();

  const rollDice = async () => {
    if (notWatchedFacts.length === FACTS.length) {
      const fortuneAchivement: AchievementT = {
        id: AchievementId.FORTUNE_CHASER,
      };
      setAchievements((prev) => {
        if (findById(prev, AchievementId.FORTUNE_CHASER)) return prev;
        const { img, subtitle, title } = getAchievementData(
          AchievementId.FORTUNE_CHASER
        );
        openTooltip({ img, title, subtitle });
        return [...prev, fortuneAchivement];
      });
    }
    const randomDirection = Math.random() > 0.5 ? 1 : -1;
    clearDiceResult();
    await animate(
      scope.current,
      { rotate: randomDirection * 360, y: "-100%", x: 0 },
      {
        duration: 0.8,
        bounce: 0,
        type: "spring",
      }
    );
    const promiseSpin = animate(
      scope.current,
      { rotate: randomDirection * 720 },
      {
        visualDuration: 0.8,
        bounce: 0,
        type: "spring",
        onComplete: () => {
          const diceResult = 20;
          const factInd = Math.floor(Math.random() * notWatchedFacts.length);
          if (notWatchedFacts.length === 0) {
            // todo: separate the callback
            const theyKnowAchivement: AchievementT = {
              id: AchievementId.KNOWS_EVERYTHING,
            };
            setAchievements((prev) => {
              if (findById(prev, AchievementId.KNOWS_EVERYTHING)) return prev;
              const { img, subtitle, title } = getAchievementData(
                AchievementId.KNOWS_EVERYTHING
              );
              openTooltip({ img, title, subtitle });
              return [...prev, theyKnowAchivement];
            });
          }
          watchFact(factInd, diceResult);

          animate(scope.current, { rotate: 0 }, { duration: 0 });
        },
      }
    );
    const promiseFall = animate(
      scope.current,
      { x: 0, y: 0 },
      { visualDuration: 0.8, bounce: 0.8, type: "spring" }
    );
    await Promise.all([promiseSpin, promiseFall]);
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
          <img src="img/dice3.webp" alt="dice d20" className={styles.Dice} />
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
    const photoNum = Math.random() > 0.5 ? 1 : 2;
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
          <img
            src={import.meta.env.BASE_URL + `img/TaliPhoto${photoNum}.webp`}
          />
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
