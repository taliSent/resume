import Modal from "@components/modal/Modal";
import { useBugs } from "@store/store";
import { LuBugOff } from "react-icons/lu";
import Header from "../../header/Header";
import styles from "./BugHunt.module.css";
import { motion } from "motion/react";
import { useEffect } from "react";

const MAX_BUGS_QUANTITY = 23;
const BUG_SPECIES_QUANTITY = 8;

type BugParamsT = {
  x: string;
  y: string;
  src: string;
  angle: string;
};
const generateBugParams = (container: Element): BugParamsT => {
  const innerWidth = container.clientWidth;
  const innerHeight = container.clientHeight;
  const x = `${Math.random() * innerWidth}px`;
  const y = `${Math.random() * innerHeight}px`;
  const angle = `${Math.random() * 360}deg`;
  
  const src = `/img/bugs/bug${Math.ceil(Math.random()*BUG_SPECIES_QUANTITY)}.png`;
  return { x, y, src, angle };
};
type CreateBugParams = {
  bugParams: BugParamsT;
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
  bugEl.onclick = () => {
    bugEl.remove();
    catchBug();
  };
  return bugEl;
};
// todo: react
const BugHunt = () => {
  const areBugsOnPage = useBugs((state) =>
    state.bugs ? state.bugs > 0 : false
  );
  const renewGame = useBugs((state) => state.renewGame);
  const bugs = useBugs((state) => state.bugs);
  const areBugsCaught = bugs === 0;

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
  useEffect(() => {
    if(!areBugsCaught) return;
    const timeout = setTimeout(renewGame, 2000);
    return () => clearTimeout(timeout);
  }, [areBugsCaught])
  
  return (
    <section id="bug-hunt" aria-label="bug hunt">
      <Header
        name="Bug Hunt"
        icon={<LuBugOff className="icon" />}
        textSecondary="help Natalia find all bugs on a page"
      />
      <div className={styles.BattleContainer}>
        <div className={styles.BattleImgContainer}>
          <img
            src="img/vs2.png"
            alt="background Tali vs bugs"
            className={styles.BattleBackground}
          />
          <div className={`${styles.Tooltip} ${styles.TooltipTali}`}>I'm a Senior developer</div>
          <motion.img
            src="img/TaliStanding2.png"
            alt="Tali"
            initial={{ y: "-30%", x: "-125%"}}
            whileInView={{y: "-50%"}}
            transition={{duration: 0.75}}
            className={styles.TaliPortrait}
          />          
          <div className={`${styles.Tooltip} ${styles.TooltipBug}`}>I'm a feature</div>
          <motion.img
            src="img/bugs/bug000.png"
            alt="bug"
            initial={{ y: "-100%", x: "85%"}}
            whileInView={{y: "-50%"}}
            transition={{duration: 0.75}}
            className={styles.BugPortrait}
          />
        </div>
        <button
          onClick={handleReleaseBugsClick}
          disabled={areBugsOnPage}
          className={styles.ReleaseButton}
        >
          {areBugsOnPage ?  "Bugs are now free..." : "Release the bugs 🪲" }
        </button>
      </div>
      <Modal isOpen={areBugsCaught} onClose={renewGame}>
        <img src={"img/you-won2.png"} />
      </Modal>
    </section>
  );
};
export default BugHunt;
