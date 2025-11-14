import Modal from "@components/modal/Modal";
import { useBugs } from "@store/store";
import { LuBugOff } from "react-icons/lu";
import Header from "../../header/Header";
import styles from "./BugHunt.module.css";

const BugsQuantity = 25;

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
  
  const src = `img/bugs/bug${Math.ceil(Math.random()*7)}.png`;
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
    for (let index = 0; index < BugsQuantity; index++) {
      const container = document.querySelector("#root_");
      if (!container) return;
      const bugParams = generateBugParams(container);
      const bugEl = createBug({ bugParams, catchBug });
      container?.appendChild(bugEl);
    }
    releaseBugs(BugsQuantity);
  };

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
            src="img/vs.png"
            alt="background Tali vs bugs"
            className={styles.BattleBackground}
          />
          <img
            src="img/TaliStanding.png"
            alt="Tali"
            className={styles.TaliPortrait}
          />
          <img
            src="img/bugs/bug4.png"
            alt="bug"
            className={styles.BugPortrait}
          />
        </div>
        <button
          onClick={handleReleaseBugsClick}
          disabled={areBugsOnPage}
          className={styles.ReleaseButton}
        >
          Release the bugs
        </button>
      </div>
      <Modal isOpen={areBugsCaught} onClose={renewGame}>
        {" "}
        <img src={"img/you-won2.png"} />
      </Modal>
    </section>
  );
};
export default BugHunt;
