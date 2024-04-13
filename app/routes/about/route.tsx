import type { ReactNode } from "react";
import { css } from "styled-system/css";
import { ListItem } from "./features/ListItem";
import { Heading, PageHeading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { Section } from "~/components/SectioningContent";

export default function Page(): ReactNode {
	return (
		<div className={css({
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "column",
			rowGap: "2rem",
			width: "100%",
			maxWidth: "50rem",
			margin: "5rem auto 0",
		})}
		>
			<PageHeading css={css.raw({ fontSize: "xl" })} type="section" prefix bold>About me</PageHeading>
			<Section css={css.raw({ display: "flex", flexDirection: "column", rowGap: "1rem" })} aria-label="Profile">
				<Heading css={css.raw({ fontSize: "l" })} type="block" prefix bold>Profile</Heading>
				<Paragraph as="p">鈴鹿高専で情報工学を学んでいる学生です。</Paragraph>
				<Paragraph as="p">趣味や仕事でWebアプリケーション開発を行っています。</Paragraph>
				<Paragraph as="p">
					座右の銘は
					<wbr />
					「君に夢中になる。
					<wbr />
					「だれか」や「なにか」を愛する事が、
					<wbr />
					きっと世界を動かすクレイジーな原動力」
					<wbr />
					です。
					<wbr />
					この言葉に従い、開発者や技術などあらゆるバックボーンを尊重し開発しています。
				</Paragraph>
				<Paragraph as="p">
					Web技術が好きでライブラリや標準仕様を追っています。
					<wbr />
					また、その知識を活かして日々開発しています。
				</Paragraph>
				<Paragraph as="p">
					プログラミング以外の趣味は音楽鑑賞とコーヒーです。
					<wbr />
					邦ロックのライブやフェスに行くのが好きです。
					<wbr />
					また、統一された世界観を持つアーティストが好きで、
					<wbr />
					KAMITSUBAKI STUDIOやヨルシカをよく聴いています。
				</Paragraph>
			</Section>
			<Section css={css.raw({ display: "flex", flexDirection: "column", rowGap: "1rem" })} aria-label="Skills">
				<Heading css={css.raw({ fontSize: "l" })} type="block" prefix bold>Computing Skills</Heading>
				<Section aria-label="Language">
					<Heading css={css.raw({ fontSize: "m" })} type="block" prefix bold>Language</Heading>
					<ul className={css({ marginTop: ".5rem" })}>
						<ListItem name="TypeScript (JavaScript)">
							Webアプリケーションや
							<wbr />
							バックエンドサービスを構築できます。
						</ListItem>
						<ListItem name="Rust">
							WasmやCLIツール、
							<wbr />
							バックエンドサービスを構築できますす。
						</ListItem>
						<ListItem name="CSS">
							デザインやアニメーションを
							<wbr />
							実装できます。
						</ListItem>
						<ListItem name="C++">
							レガシーなOSSのコードを読むことができます。
							<wbr />
							また、簡単なアルゴリズムを実装できます。
						</ListItem>
					</ul>
				</Section>
				<Section aria-label="Framework">
					<Heading css={css.raw({ fontSize: "m" })} type="block" prefix bold>Framework</Heading>
					<ul className={css({ marginTop: ".5rem" })}>
						<ListItem name="React / Next.js (Remix.js)">
							大規模なWebアプリケーションを
							<wbr />
							構築できます。
							<wbr />
							また、React Nativeを用いてモバイルアプリを
							<wbr />
							構築できます。
						</ListItem>
						<ListItem name="Svelte / SvelteKit">
							簡単なWebアプリケーションを
							<wbr />
							構築できます。
						</ListItem>
						<ListItem name="Vue.js / Nuxt.js">
							簡単なWebアプリケーションを
							<wbr />
							構築できます。
						</ListItem>
						<ListItem name="Angular">
							中規模のWebアプリケーションを
							<wbr />
							構築できます。
							<wbr />
							RxJSを用いた非同期処理を書けます。
						</ListItem>
						<ListItem name="axum">
							大規模なバックエンドサービスを
							<wbr />
							構築できます。
							<wbr />
							tokioを用いた非同期処理を書けます。
						</ListItem>
						<ListItem name="NestJS">
							中規模のバックエンドサービスを
							<wbr />
							構築できます。
						</ListItem>
					</ul>
				</Section>
			</Section>
		</div>
	);
}
