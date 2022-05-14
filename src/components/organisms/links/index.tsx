import React from "react";
import tw from "twin.macro";
import { Flex } from "~/components/atoms/flex";
import { LinkItem } from "~/components/molecules/link-item";
import type { LinkItems } from "~/components/molecules/link-item";

const socialLinks: Array<LinkItems> = [
  {
    icon: "fa-brands:github",
    platformName: "GitHub",
    url: "https://github.com/re-taro/",
  },
  {
    icon: "fa-brands:twitter",
    platformName: "Twitter",
    url: "https://twitter.com/10969_rintaro/",
  },
  {
    icon: "fa-brands:keybase",
    platformName: "Keybase",
    url: "https://keybase.io/10969_rintaro/",
  },
  {
    icon: "fa-brands:discord",
    platformName: "Discord",
    url: "https://discord.com/users/713739439041544273/",
  },
  {
    icon: "fa-solid:envelope",
    platformName: "e-mail",
    url: "/mail",
  },
];

const LinksBox = tw.div`my-4`;

const LinksSection: React.FC = () => (
  <LinksBox>
    <Flex css={tw`flex-wrap gap-4 mt-4`}>
      {socialLinks.map((link, key) => (
        <LinkItem icon={link.icon} url={link.url} platformName={link.platformName} key={key} />
      ))}
    </Flex>
  </LinksBox>
);

export { LinksSection };
