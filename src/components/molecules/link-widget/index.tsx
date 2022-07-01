import React from "react";
import tw from "twin.macro";
import type { LinkWidgetMeta } from "~/utils/remark-link-widget";

export type LinkWidgetProperties = {
  children: string;
};

const DeskTop: React.FC<LinkWidgetProperties> = properties => {
  const { children } = properties;
  const meta = JSON.parse(children) as LinkWidgetMeta;
  return (
    <a href={meta.url} target="_blank" rel="noreferrer" css={tw`hidden md:block`}>
      <div css={tw`flex justify-between h-40 rounded border border-gray-400 border-solid`}>
        <div css={[tw`flex flex-col justify-between p-5`, meta.image ? tw`w-3/5` : tw`w-full`]}>
          <div css={tw`text-night-400 dark:text-snow-300 transition delay-150 ease-out text-xl truncate`}>
            {meta.title}
          </div>
          <div
            css={tw`text-[#4c566a] dark:text-[#eceff4] transition delay-150 ease-out overflow-hidden h-12 text-base`}
          >
            {meta.description}
          </div>
          <div css={tw`flex items-center`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {meta.icon && <img src={meta.icon} css={tw`h-6`} alt={""} loading={"lazy"} />}
            <div
              css={[
                tw`text-[#3b4252] dark:text-[#d8dee9] transition delay-150 ease-out text-base truncate`,
                meta.icon ? tw`ml-2` : tw`ml-0`,
              ]}
            >
              {meta.url}
            </div>
          </div>
        </div>
        {meta.image && (
          <div css={tw`w-2/5 h-full rounded`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={meta.image} css={tw`object-cover w-full h-full`} alt={""} loading={"lazy"} />
          </div>
        )}
      </div>
    </a>
  );
};

const Mobile: React.FC<LinkWidgetProperties> = properties => {
  const { children } = properties;
  const meta = JSON.parse(children) as LinkWidgetMeta;
  return (
    <a href={meta.url} target="_blank" rel="noreferrer" css={tw`md:hidden`}>
      <div css={tw`flex flex-col justify-between rounded border border-gray-400 border-solid`}>
        {meta.image && (
          <div css={tw`object-cover w-full h-40 rounded`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={meta.image} css={tw`object-cover w-full h-full`} alt={""} loading={"lazy"} />
          </div>
        )}
        <div css={tw`flex flex-col justify-between p-5 h-40  hover:bg-gray-100 w-full`}>
          <div css={tw`text-night-400 dark:text-snow-300 transition delay-150 ease-out text-xl truncate`}>
            {meta.title}
          </div>
          <div
            css={tw`text-[#4c566a] dark:text-[#eceff4] transition delay-150 ease-out overflow-hidden h-12 text-base`}
          >
            {meta.description}
          </div>
          <div css={tw`flex items-center`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {meta.icon && <img src={meta.icon} css={tw`h-6`} alt={""} loading={"lazy"} />}
            <div
              css={[
                tw`text-[#3b4252] dark:text-[#d8dee9] transition delay-150 ease-out text-base truncate`,
                meta.icon ? tw`ml-2` : tw`ml-0`,
              ]}
            >
              {meta.url}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const LinkWidget: React.FC<LinkWidgetProperties> = properties => {
  const { children } = properties;
  return (
    <div css={tw`my-2`}>
      <DeskTop children={children} />
      <Mobile children={children} />
    </div>
  );
};

export { LinkWidget };
