import React, { ReactElement } from "react";
import styles from "./IconLink.module.css";

type IconLinkProps = {
  href?: string;
  icon: ReactElement;
};

const IconLink: React.FC<IconLinkProps> = ({ href, icon }: IconLinkProps) => {
  return (
    <>
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      )}
    </>
  );
};
export default IconLink;
