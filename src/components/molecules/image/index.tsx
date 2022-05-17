import NextImage from "next/image";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

export type ImageProperties = {
  src: string;
  alt?: string;
};

const Image: React.FC<ImageProperties> = ({ src, alt }) =>
  // eslint-disable-next-line no-negated-condition
  alt !== "asciicast" ? (
    <figure css={tw`my-8 mx-0 flex flex-col gap-8`}>
      <div css={tw`flex relative min-h-[20em] w-full`}>
        <Link href={src} scroll={false}>
          <a>
            <NextImage src={src} alt={alt || src} layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
      <figcaption css={tw`text-center text-night-400 dark:text-snow-300 transition delay-150 ease-in-out`}>
        {alt}
      </figcaption>
    </figure>
  ) : (
    <div css={tw`flex relative min-h-[20em] w-full`}>
      <NextImage src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
export { Image };
