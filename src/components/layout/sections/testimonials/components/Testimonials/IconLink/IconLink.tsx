import React, { ReactElement } from "react";

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
