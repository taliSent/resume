import { useTooltip } from "src/store/store";
import styles from "./Tooltip.module.css";
import { useEffect } from "react";
import playAudio from "src/feature/playAudio";
import { AnimatePresence, motion } from "framer-motion";

const Tooltip = () => {
  const closeTooltip = useTooltip((state) => state.closeTooltip);
  const img = useTooltip((state) => state.tooltipData?.img);
  const title = useTooltip((state) => state.tooltipData?.title);
  const text = useTooltip((state) => state.tooltipData?.subtitle);
  const needShowTooltip = useTooltip((state) => state.needShowTooltip);

  useEffect(() => {
    if (!needShowTooltip) return;
    playAudio(import.meta.env.BASE_URL + "audio/achievement.mp3");

    const timeout = setTimeout(() => {
      closeTooltip();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, [needShowTooltip]);

  return (
    <AnimatePresence>
      {needShowTooltip && (
        <motion.button
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={styles.Tooltip}
          onClick={closeTooltip}
        >
          <span>{img}</span>
          <div>
            <span>{title}</span>
            <p className={styles.Text}>{text}</p>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
