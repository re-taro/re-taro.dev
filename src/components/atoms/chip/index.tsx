import type { CSSInterpolation } from "@emotion/serialize";
import { InlineIcon } from "@iconify/react";
import type { IconProps, IconifyIcon } from "@iconify/react";
import React from "react";
import tw from "twin.macro";
import { Text } from "../text";

const ChipBox = tw.div`min-w-min min-h-full px-2 py-1 flex justify-center items-center rounded-l-full rounded-r-full space-x-1 bg-frost-200 focus:outline-none appearance-none select-none transition delay-150 ease-out`;

type ChipIconProperties = IconProps & {
  ref?: never;
};

const ChipIcon: React.FC<ChipIconProperties> = ({ icon, css, ...rest }) => (
  <div css={[tw`flex items-center justify-center flex-shrink-0 w-8 h-8 min-h-full p-1 bg-white rounded-full`, css]}>
    <InlineIcon icon={icon} css={tw`w-full h-full`} {...rest} />
  </div>
);

type ChipVariantProperties = {
  icon?: IconifyIcon | string | null;
  iconStyles?: CSSInterpolation;
};

type ButtonProperties<T extends AnyComponent> = React.PropsWithChildren<
  PropertiesOf<T> &
  ChipVariantProperties & {
    boxStyles?: CSSInterpolation;
    textStyles?: CSSInterpolation;
    ref?: never;
    as?: T;
  }
>;

const Chip = <T extends AnyComponent>({
  children,
  icon,
  iconStyles,
  boxStyles,
  textStyles,
  ...rest
}: ButtonProperties<T>): JSX.Element => (
  <ChipBox css={boxStyles} {...rest}>
    {icon && <ChipIcon icon={icon} css={iconStyles} />}
    {children && (
      <Text css={[tw`text-frost-400 dark:text-frost-400 text-base font-bold whitespace-nowrap`, textStyles]}>
        {children}
      </Text>
    )}
  </ChipBox>
);

export { Chip };
