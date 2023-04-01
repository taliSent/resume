import React, { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  name: string;
  icon: ReactNode;
  h2?: boolean;
  textSecondary?: string | ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  name,
  icon,
  h2,
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
  const HeaderH2 = (
    <>
      <h2>{titleIcon}</h2>
      {textSecondaryWrapper}
    </>
  );
  const HeaderH1 = (
    <>
      <h1>{titleIcon}</h1>
      {textSecondaryWrapper}
    </>
  );

  return <div className={styles.Header}>{h2 ? HeaderH2 : HeaderH1}</div>;
};
export default Header;
