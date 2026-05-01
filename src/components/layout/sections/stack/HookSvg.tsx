import { use } from "react";
import { ThemeContext } from "src/context/context";
import styles from "./NodeTree.module.css";

type HookSvgT = {
  height: number;
  style?: React.CSSProperties;
};
// M50 0 Q 50 0 50 100
//       Q 50 200 150 200
// todo: rename
const HookSvg = ({ height, style }: HookSvgT) => {
  const { theme } = use(ThemeContext);
  const breakPoint = height - 19;
  return (
    <svg
      className={styles.Line}
      width="100"
      viewBox={`0 0 100 ${2 * height}`}
      style={style}
    >
      <path
        d={`M 50,0 
          L 50,${breakPoint} 
          Q 50,${height} 
          100,${height}`}
        stroke={theme === "dark" ? "#818080" : "#9a9797"}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
};

export default HookSvg;
