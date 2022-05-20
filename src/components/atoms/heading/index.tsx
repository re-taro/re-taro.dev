import React from "react";
import tw from "twin.macro";

type HeadingVariant = `h${1 | 2 | 3 | 4 | 5}`;

const HeadingBase = tw.h1`text-night-400 dark:text-snow-300 font-bold select-none transition delay-150 ease-out`;

// eslint-disable-next-line consistent-return
const getHeadingStyles = (as: HeadingVariant) => {
  switch (as) {
    case "h1":
      return tw`text-5xl`;
    case "h2":
      return tw`text-4xl`;
    case "h3":
      return tw`text-3xl`;
    case "h4":
      return tw`text-2xl`;
    case "h5":
      return tw`text-xl`;
    // No default
  }
};

type HeadingProperties = React.ComponentProps<React.ReactHTML["h1"]> & {
  as?: HeadingVariant;
};

const Heading: React.FC<HeadingProperties> = ({ as = "h1", children, ...rest }) => (
  <HeadingBase as={as} css={getHeadingStyles(as)} {...rest}>
    {children}
  </HeadingBase>
);

export { Heading };
