import NextLink from "next/link";
import { ReactChild } from "react";

type Props = {
  Href: string;
  children: ReactChild[] | ReactChild;
  className: string;
};

const Link = ({ children, Href, className }: Props) => {
  return (
    <NextLink href={Href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
