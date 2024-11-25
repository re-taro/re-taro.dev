import { useLoaderData } from "@remix-run/react";
import type { ReactNode } from "react";
import { css } from "styled-system/css";
import { loader } from "./handlers";
import { WorkCard } from "./features/WorkCard";
import { PageHeading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";

export default function Page(): ReactNode {
	const { works } = useLoaderData<typeof loader>();

	return (
		<div
			className={css({
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "column",
				margin: "[5rem auto 0]",
				maxWidth: "[62.5rem]",
				rowGap: "2rem",
				width: "[100%]",
			})}
		>
			<PageHeading bold prefix css={css.raw({ fontSize: "xl" })} type="section">Works</PageHeading>
			<Paragraph as="p">私がつくったもの</Paragraph>
			<div
				className={css({
					columnGap: "1rem",
					display: "flex",
					flexWrap: "wrap",
					marginTop: "[2rem]",
					rowGap: "2rem",
				})}
			>
				{works.map(work => (
					<WorkCard key={work.title} work={work} />
				))}
			</div>
		</div>
	);
}

export { loader };
