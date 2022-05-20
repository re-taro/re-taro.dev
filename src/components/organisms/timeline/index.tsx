import React from "react";
import tw from "twin.macro";
import { Heading } from "~/components/atoms/heading";
import { TimeLineItem } from "~/components/molecules/timeline-item";
import type { Bio } from "~/graphql";

const TimeLineBox = tw.div`mt-6 ml-3.5 relative before:content-[""] before:absolute before:-left-0.5 before:top-2.5 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-600 before:transition before:delay-150 before:ease-out`;

type TimeLineSectionProperties = React.ComponentProps<React.ReactHTML["section"]> & {
  data: Array<Bio> | undefined;
};

const TimeLineSection: React.FC<TimeLineSectionProperties> = ({ data, ...rest }) => (
  <section css={tw`mb-16 transition delay-150 ease-out`} {...rest}>
    <Heading as={"h5"}>TimeLine</Heading>
    <TimeLineBox>
      {data?.map((bio, key) => (
        <TimeLineItem action={bio.action} date={bio.date} title={bio.title} key={key} />
      ))}
    </TimeLineBox>
  </section>
);

export { TimeLineSection };
