import { motion } from "framer-motion";
import { LuBugOff } from "react-icons/lu";
import MediaQuery, { useMediaQuery } from "react-responsive";
import { useBugs } from "src/store/store";
import { getRandomIntInclusive } from "src/utils/random";
import Header from "../../header/Header";
import styles from "./BugHunt.module.css";
import { BUG_SPECIES_QUANTITY, MAX_BUGS_QUANTITY } from "./constants";
import useBugHuntAchievements from "../../../../feature/useBugHuntAchievement";
import { useEffect } from "react";

type BugParamsProps = {
  x: string;
  y: string;
  src: string;
  angle: string;
};
const generateBugParams = (container: Element): BugParamsProps => {
  const innerWidth = container.clientWidth - 100;
  const innerHeight = container.clientHeight - 100;
  const x = `${Math.random() * innerWidth}px`;
  const y = `${Math.random() * innerHeight}px`;
  const angle = `${Math.random() * 360}deg`;
  const randomIndex = Math.ceil(Math.random() * BUG_SPECIES_QUANTITY);
  const src = import.meta.env.BASE_URL + `img/bugs/bug${randomIndex}.webp`;
  return { x, y, src, angle };
};
type CreateBugParams = {
  bugParams: BugParamsProps;
  catchBug: () => void;
};
const createBug = ({ bugParams, catchBug }: CreateBugParams): Element => {
  const { x, y, src, angle } = bugParams;
  const bugEl = document.createElement("img");
  bugEl.src = src;
  bugEl.classList.add(styles.Bug);
  bugEl.alt = "a bug";
  bugEl.style.top = y;
  bugEl.style.left = x;
  bugEl.style.rotate = angle;
  bugEl.style.setProperty("--duration", getRandomIntInclusive(15, 25) + "s");
  bugEl.onclick = () => {
    const possibleDegrees = [0, 40, 90, 320];
    bugEl.src = import.meta.env.BASE_URL + `img/confetti2.gif`;
    bugEl.style.setProperty(
      "--hueDegreeShift",
      possibleDegrees[Math.floor(Math.random() * possibleDegrees.length)] +
        "deg"
    );
    bugEl.classList.add(styles.Confetti);

    setTimeout(() => {
      bugEl.remove();
    }, 1100);
    catchBug();
  };
  return bugEl;
};

// todo: react
const BugHunt = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 524px)" });

  const areBugsOnPage = useBugs((state) =>
    state.bugs ? state.bugs > 0 : false
  );

  const renewGame = useBugs((state) => state.renewGame);
  const areBugsCaught = useBugs((state) => state.bugs === 0);
  const releaseBugs = useBugs((state) => state.releaseBugs);
  const catchBug = useBugs((state) => state.catchBug);

  const handleReleaseBugsClick = () => {
    for (let index = 0; index < MAX_BUGS_QUANTITY; index++) {
      const container = document.querySelector("#root_");
      if (!container) return;
      const bugParams = generateBugParams(container);
      const bugEl = createBug({ bugParams, catchBug });
      container?.appendChild(bugEl);
    }
    releaseBugs(MAX_BUGS_QUANTITY);
  };
  useBugHuntAchievements(areBugsCaught);
  useEffect(() => {
    if (!areBugsCaught) return;
    renewGame();
  }, []);

  return (
    <section
      id="bug-hunt"
      aria-label="bug hunt"
      data-screen-width={isTabletOrMobile}
    >
      <Header
        name="Bug Hunt"
        icon={<LuBugOff className="icon" />}
        textSecondary="help Natalia find all bugs"
      />
      <div className={styles.BattleContainer}>
        <div className={styles.BattleImgContainer}>
          <img
            src="img/vs.webp"
            alt="background Tali vs bugs"
            className={styles.BattleBackground}
          />
          <MediaQuery minWidth={800}>
            <div className={`${styles.Tooltip} ${styles.TooltipTali}`}>
              I'm a Senior developer
            </div>
          </MediaQuery>
          <motion.img
            src="img/TaliStanding2.webp"
            alt="Tali"
            initial={{ y: "-30%", x: "-125%" }}
            whileInView={{ y: "-50%" }}
            transition={{ duration: 0.75 }}
            className={styles.TaliPortrait}
          />
          <MediaQuery minWidth={800}>
            <div className={`${styles.Tooltip} ${styles.TooltipBug}`}>
              I'm a feature
            </div>
          </MediaQuery>
          <motion.img
            src="img/bugs/bug000.webp"
            alt="bug"
            initial={{ y: "-100%", x: "85%" }}
            whileInView={{ y: "-50%" }}
            transition={{ duration: 0.75 }}
            className={styles.BugPortrait}
          />
        </div>
        <button
          onClick={handleReleaseBugsClick}
          disabled={areBugsOnPage}
          className={styles.ReleaseButton}
        >
          {areBugsOnPage
            ? "Bugs are now on the loose..."
            : "Release the bugs 🪲"}
        </button>
      </div>
    </section>
  );
};
export default BugHunt;
