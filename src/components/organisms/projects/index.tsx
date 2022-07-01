import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import tw from "twin.macro";
import { Button } from "~/components/atoms/button";
import { Heading } from "~/components/atoms/heading";
import { Card } from "~/components/molecules/card";
import type { HomeQuery } from "~/graphql";
import { trackEventToUmami } from "~/utils/umami";

const ProjectsBox = tw.section`mb-16 space-y-4 transition delay-150 ease-out`;

type ProjectsSectionProperties = React.ComponentProps<React.ReactHTML["section"]> & {
  data: HomeQuery["works"] | undefined;
};

const ProjectsSection: React.FC<ProjectsSectionProperties> = ({ data, ...rest }) => {
  const router = useRouter();
  useEffect(() => {
    data
      ?.sort((workA, workB) => (workA.date < workB.date ? 1 : -1))
      .slice(0, 4)
      .map(project => router.prefetch("/works/[id]", `/works/${project.id}`));
  }, [data]);
  return (
    <ProjectsBox {...rest}>
      <Link href={"/works"} passHref>
        <Heading as={"h5"} css={tw`cursor-pointer`}>
          Works
        </Heading>
      </Link>
      <Card projects={data} />
      <Link href={"/works"} passHref>
        <Button
          aria-label={"view all works"}
          as={"a"}
          variant={"icon"}
          rightIcon={"fa-solid:arrow-right"}
          boxStyles={tw`px-0`}
          textStyles={tw`text-lg`}
          onClick={() => trackEventToUmami({ eventType: "navigate", eventValue: "Home: View All Projects" })}
        >
          view all works
        </Button>
      </Link>
    </ProjectsBox>
  );
};

export { ProjectsSection };
