import type { ReactNode } from "react";
import { css, cx } from "styled-system/css";
import type { Temporal } from "temporal-polyfill";
import { Paragraph } from "~/components/Paragraph";

export interface Props {
	title: string;
	date: Temporal.PlainDate;
	slug?: string;
}

export function TimelineItem({ title, date, slug }: Props): ReactNode {
	return (
		<li
			className={cx(css({
				position: "relative",
				padding: "0.5rem 0 0.5rem 1rem",
				listStyle: "none",
			}), "timeline-item")}
		>
			<span
				className={css({
					"position": "absolute",
					"top": 0,
					"bottom": 0,
					"left": "-0.5px",
					"width": "1px",
					"backgroundColor": "bg.teriary",

					".timeline-item:first-child &": {
						top: "1rem",
					},

					".timeline-item:last-child &": {
						bottom: "calc(100% - 1rem)",
					},
				})}
				role="presentation"
			/>
			<span
				className={css({
					position: "absolute",
					top: "1rem",
					left: "-4px",
					height: "0.5rem",
					width: "0.5rem",
					borderRadius: "9999px",
					backgroundColor: "bg.teriary",
				})}
				role="presentation"
			/>
			<time
				className={css({
					color: "text.secondary",
					fontSize: "s",
					fontWeight: "normal",
					lineHeight: "tight",
				})}
				dateTime={date.toString()}
			>
				{date.toLocaleString("en-US", {
					year: "numeric",
					month: "short",
				})}
			</time>
			<h2
				className={css({
					color: "text.main",
					fontSize: "l",
					fontWeight: "bold",
					lineHeight: "normal",
				})}
			>
				{title}
			</h2>
			{slug && (
				<Paragraph as="p">{slug}</Paragraph>
			)}
		</li>
	);
}
