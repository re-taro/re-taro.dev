import React from "react";
import tw from "twin.macro";
import { Text } from "~/components/atoms/text";

export type FooterLinkProperties = {
  href: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

const FooterLink: React.FC<FooterLinkProperties> = ({ href, label, onClick }) => (
  <a href={href} target={"_blank"} rel={"noopener noreferrer"} css={tw`cursor-pointer hover:underline`}>
    <Text css={tw`font-semibold`} onClick={onClick}>
      {label}
    </Text>
  </a>
);

export { FooterLink };
