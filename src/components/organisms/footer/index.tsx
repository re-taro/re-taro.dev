import React from "react";
import tw, { css } from "twin.macro";
import { Divider } from "~/components/atoms/divider";
import { Grid } from "~/components/atoms/grid";
import { Text } from "~/components/atoms/text";
import { FooterLink } from "~/components/molecules/footer-link";
import type { FooterLinkProperties } from "~/components/molecules/footer-link";
import { trackEventToUmami } from "~/utils/umami";

const FooterBox = tw.footer`flex flex-col mx-auto w-full max-w-[100vw] md:max-w-[85vw] lg:max-w-[800px] py-4 px-6 md:px-2 lg:px-0 transition delay-150 ease-out`;

const links: Array<Pick<FooterLinkProperties, "label" | "href">> = [
  {
    href: "https://umami.re-taro.dev/share/MZjJ35ST/Portfolio",
    label: "Analytics",
  },
];

type FooterProperties = React.ComponentProps<React.ReactHTML["footer"]>;

const Footer: React.FC<FooterProperties> = ({ ...rest }) => (
  <FooterBox {...rest}>
    <Divider />
    <Grid
      css={[
        tw`md:flex gap-4 md:gap-6`,
        css`
          grid-template-columns: repeat(2, 1fr);
          @media (min-width: 640px) {
            grid-template-columns: repeat(${links.length <= 4 ? links.length : 4}, 1fr);
          }
        `,
      ]}
    >
      {links.map(link => (
        <FooterLink
          href={link.href}
          label={link.label}
          onClick={() => trackEventToUmami({ eventType: "link", eventValue: `Footer Link: ${link.label}` })}
          key={link.label}
        />
      ))}
    </Grid>
    <Text css={tw`text-sm sm:text-base`}>
      &copy; 2021 - {new Date().getFullYear()}{" "}
      <a
        css={tw`cursor-pointer hover:underline`}
        href={"https://github.com/re-taro/"}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        Rintaro Itokawa
      </a>
    </Text>
  </FooterBox>
);

export { Footer };
