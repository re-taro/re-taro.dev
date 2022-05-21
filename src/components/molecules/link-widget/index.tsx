import React from "react";
import Styled from "~/styles/link-widget.module.scss";
import type { LinkWidgetMeta } from "~/utils/remark-link-widget";

export type LinkWidgetProperties = {
  children: string;
};

const LinkWidget: React.FC<LinkWidgetProperties> = properties => {
  const { children } = properties;
  const meta = JSON.parse(children) as LinkWidgetMeta;
  return (
    <div className={Styled.Wrapper}>
      <a href={meta.url} target="_blank" rel="noopener noreferrer">
        <div className={Styled.Widget}>
          <div className={Styled.Main}>
            <div className={Styled.Title}>{meta.title}</div>
            <div className={Styled.Description}>{meta.description}</div>
            <div className={Styled.Host}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {meta.icon && <img src={meta.icon} height={15} width={15} alt="" loading="lazy" />}
              {meta.url.includes("/", 8) ? meta.url.slice(8, meta.url.indexOf("/", 8)) : meta.url.slice(8)}
            </div>
          </div>
          <div className={Styled.Image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {meta.image && <img src={meta.image} height={105} width={200} alt="image" loading="lazy" />}
          </div>
        </div>
      </a>
    </div>
  );
};

export { LinkWidget };
