import { useAnimate } from "motion/react";
import { useState } from "react";
import { TbClover } from "react-icons/tb";
import { NavHashLink } from "react-router-hash-link";
import Header from "../../header/Header";
import styles from "./RandomFact.module.css";

const RandomFact = () => {
  const [scope, animate] = useAnimate();
  const [diceResult, setDiceResult] = useState<undefined | number>(undefined);

  const rollDice = async () => {
    setDiceResult(undefined);
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
        onComplete: () => setDiceResult(Math.ceil(Math.random() * 20)),
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
        icon={<TbClover size={28} className="icon" />}
      />
      <div className={styles.GameContainer}>
        <button
          ref={scope}
          onClick={rollDice}
          className={styles.DiceContainer}
        >
          <img src="img/dice3.png" alt="dice d20" className={styles.Dice} />
          <div className={styles.Result}>{diceResult}</div>
        </button>
        {diceResult && <GameResultFact diceResult={diceResult} rollDice={rollDice} />}
      </div>
    </section>
  );
};

// move it to sc
const FACTS = [
  "I love jogging",
  "I'm almost entirely indifferent about food",
  "I've had dreadlocks for about 5 years",
  "I don't like my first name and prefer to be called Tali, but almost every variation will do",
  "I am a cat person",
  "I'm a younger sibling in a family with 2 kids",
  "I have very few pictures of myself, I don't really like to take them",
  "I adore house plants and know the names of many species and their sorts",
  "I play tabletop roleplay games, like D&D",
  "I used to study German language, when I was a teen",
  "During 2022-2025, I've lived in 4 countries",
  "I only play very specific short indie video games",
  "I was a Dungeon Master and received a lot of positive feedback",
  "I have a natural ability to make cartoonish voices",
  "I learnt to sing, but am too shy to do it in public",
  "I used to be an actress on a horror quest",
  'My favorite book is "Harry Potter and methods of rationality"',  
  "I used to draw and paint, and there're still traces of that somewhere in the Internet",
  "I used to study psychology and my favorite topic is cognitive distortions",
  "I jumped with a parachute once",
];

type FactProps = {
  diceResult: number;
  rollDice: () => void;
};

const Fact = ({diceResult}: {diceResult: number}) => <div className={styles.Fact}>⭐{FACTS[diceResult]}</div>
// todo: naming?
const GameResultFact = ({ diceResult: result, rollDice }: FactProps) => {
  if (result === 20) {
    return (
      <div className={styles.FactContainer}>
        <>This is a critical success! You won 2 facts ✨</>
        <Fact diceResult={18} />
        <Fact diceResult={19} />
      </div>
    );
  }
  // todo: design try again button
  if (result === 1) {
    return (
      <div className={styles.FactContainer}>
        This is a critical failure! You're welcome to provide a fact about
        yourself.{" "}
        <NavHashLink to={"#contact-me"} smooth>
          Contact me ^~^
        </NavHashLink>
        {" "}<br/>or <button onClick={rollDice} className={styles.TryAgain}>try again</button>
      </div>
    );
  }
  
  return  <div className={styles.FactContainer}><Fact diceResult={result-2} /></div>;
};

export default RandomFact;
