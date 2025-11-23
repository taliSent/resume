import styles from "./Tooltip.module.css";

type TooltipProps = {
  text: string;
};
const Tooltip = ({ text }: TooltipProps) => (
  <div className={styles.Tooltip}>{text}</div>
);

export default Tooltip;
