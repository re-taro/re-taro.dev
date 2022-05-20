import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import { Grid } from "~/components/atoms/grid";
import { Text } from "~/components/atoms/text";
import type { HomeQuery } from "~/graphql";
import { trackEventToUmami } from "~/utils/umami";

const CardBox = tw.div`border-2 border-night-100 dark:border-night-400 shadow-card rounded-[20px] cursor-pointer items-center overflow-hidden justify-center relative transition delay-150 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl`;

const Layer = tw.div`flex flex-col absolute justify-end bottom-0 p-6 h-full w-full z-20 bg-gradient-to-t from-[rgba(45, 55, 72, 0.6)] via-[rgba(203, 213, 224, 0.4)] to-[rgba(237, 242, 247, 0)] dark:from-[rgba(0, 0, 0, 0.5)] dark:to-[rgba(237, 242, 247, 0)]`;

type CardProperties = React.ComponentProps<React.ReactHTML["div"]> & {
  projects: HomeQuery["works"] | undefined;
};

const Card: React.FC<CardProperties> = ({ projects, ...rest }) => (
  <Grid css={tw`gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 my-8`}>
    {projects
      ?.sort((workA, workB) => (workA.date < workB.date ? 1 : -1))
      .slice(0, 4)
      .map(project => (
        <Link href={`/works/${project.id}`} passHref>
          <CardBox
            key={project.id}
            onClick={() => trackEventToUmami({ eventType: "navigate", eventValue: `Project Card: ${project.title}` })}
            {...rest}
          >
            <div css={tw`h-[200] sm:h-[250] md:h-[200]`}>
              <Image
                src={project.imageUrl}
                height={200}
                width={355}
                layout={"responsive"}
                objectFit={"cover"}
                objectPosition={"50% 0"}
                alt={`${project.title}-thumbnail`}
              />
            </div>
            <Layer>
              <div css={tw`flex flex-row items-center`}>
                <Text css={tw`font-bold text-lg text-white`}>{project.title}</Text>
              </div>
            </Layer>
          </CardBox>
        </Link>
      ))}
  </Grid>
);

export { Card };
