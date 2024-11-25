import { Link } from "@remix-run/react";
import type { Work } from "content-collections";
import type { ReactNode } from "react";
import { css } from "styled-system/css";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { Article } from "~/components/SectioningContent";

interface Props {
	work: Work;
}

export function WorkCard({ work }: Props): ReactNode {
	return (
		<Article
			css={css.raw({
				flexBasis: "[calc(50% - 0.5rem)]",
				flexGrow: 1,
			})}
		>
			<Link
				className={css({
					_hover: {
						"& h2 > span::after": {
							transform: "scale(1, 1)",
							transformOrigin: "left top",
						},
					},
					display: "flex",
					flexDirection: "column",
				})}
				prefetch="intent"
				to={`/works/${work._meta.path}`}
			>
				<Heading
					type="block"
				>
					<span
						className={css({
							_after: {
								backgroundColor: "text.main",
								bottom: "-1px",
								content: "''",
								height: "[2px]",
								left: 0,
								position: "absolute",
								transform: "scale(0, 1)",
								transformOrigin: "right top",
								transition: "[transform 0.3s]",
								width: "[100%]",
							},
							marginTop: "[1rem]",
							position: "relative",
						})}
					>
						{work.title}
					</span>
				</Heading>
				<img
					className={css({
						aspectRatio: "16 / 9",
						height: "auto",
						objectFit: "cover",
						order: -1,
						width: "[100%]",
					})}
					alt={work.thumbnail.alt}
					height={360}
					loading="lazy"
					src={`https://img.re-taro.dev?url=${work.thumbnail.src}&w=640`}
					width={640}
				/>
				<Paragraph as="p" css={css.raw({ marginTop: "[0.5rem]" })}>{work.description}</Paragraph>
			</Link>
		</Article>
	);
}
