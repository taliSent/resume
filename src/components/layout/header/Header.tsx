import React, { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  name: string;
  icon: ReactNode;
  textSecondary?: string | ReactNode;
};
//TODO: fix this: delete constants; make structural
const Header: React.FC<HeaderProps> = ({
  name,
  icon,
  textSecondary,
}: HeaderProps) => {
  const titleIcon = (
    <>
      <span>{name}</span>
      {icon}
    </>
  );
  const textSecondaryWrapper = (
    <>
      {textSecondary && (
        <div className={styles.TextSecondary}>{textSecondary}</div>
      )}
    </>
  );

  return (
    <header className={styles.Header}>
      <>
        <h2>{titleIcon}</h2>
        {textSecondaryWrapper}
      </>
    </header>
  );
};
export default Header;
