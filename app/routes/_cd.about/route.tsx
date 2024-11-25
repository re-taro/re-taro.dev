import type { ReactNode } from "react";
import { css } from "styled-system/css";
import type { MetaFunction } from "@remix-run/cloudflare";
import { ListItem } from "./features/ListItem";
import { SocialLink } from "./features/SocialLink";
import Discord from "~icons/simple-icons/discord";
import Github from "~icons/simple-icons/github";
import Keybase from "~icons/simple-icons/keybase";
import Monkeytie from "~icons/simple-icons/monkeytie";
import Bluesky from "~icons/simple-icons/bluesky";
import MailLine from "~icons/ri/mail-line";
import Twitter from "~icons/ri/twitter-x-line";
import Blog from "~icons/fa-solid/blog";
import { Heading, PageHeading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { Section } from "~/components/SectioningContent";

export default function Page(): ReactNode {
	return (
		<>
			<PageHeading bold prefix css={css.raw({ fontSize: "xl" })} type="section">About me</PageHeading>
			<Section aria-label="Profile" css={css.raw({ display: "flex", flexDirection: "column", rowGap: "1rem" })}>
				<Heading bold prefix css={css.raw({ fontSize: "l" })} type="block">Profile</Heading>
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
			<Section aria-label="Skills" css={css.raw({ display: "flex", flexDirection: "column", rowGap: "1rem" })}>
				<Heading bold prefix css={css.raw({ fontSize: "l" })} type="block">Computing Skills</Heading>
				<Section aria-label="Language">
					<Heading bold prefix css={css.raw({ fontSize: "m" })} type="block">Language</Heading>
					<ul className={css({ marginTop: "[.5rem]" })}>
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
					<Heading bold prefix css={css.raw({ fontSize: "m" })} type="block">Framework</Heading>
					<ul className={css({ marginTop: "[.5rem]" })}>
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
				<hr
					className={css({
						backgroundColor: "bg.teriary",
						border: "none",
						height: "[1px]",
						margin: "[1rem 0]",
						width: "[100%]",
					})}
				/>
			</Section>
			<Section aria-label="SNS">
				<Paragraph as="p">Find me on</Paragraph>
				<p className={css({ display: "flex", flexWrap: "wrap", gap: "0.5rem" })}>
					<SocialLink href="https://github.com/re-taro" icon={Github}>GitHub</SocialLink>
					<SocialLink href="https://twitter.com/re_taro_" icon={Twitter}>Twitter</SocialLink>
					<SocialLink href="https://blog.re-taro.dev" icon={Blog}>Blog</SocialLink>
					<SocialLink href="https://bsky.app/profile/re-taro.dev" icon={Bluesky}>Bluesky</SocialLink>
					<SocialLink href="https://discord.com/users/713739439041544273" icon={Discord}>Discord</SocialLink>
					<SocialLink href="https://keybase.io/10969_rintaro" icon={Keybase}>Keybase</SocialLink>
					<SocialLink href="https://keys.openpgp.org/vks/v1/by-fingerprint/60EC8DD6265105FFDD3D6EFEB3BBD234590C77FC" icon={Monkeytie}>GPG Keys</SocialLink>
					<SocialLink href="mailto:me@re-taro.dev" icon={MailLine}>me&#64;re-taro.dev</SocialLink>
				</p>
			</Section>
		</>
	);
}

export const meta: MetaFunction = () => [
	{ content: "Rintaro Itokawa (re-taro) について。", name: "description" },
	{ name: "og:title", property: "Rintaro Itokawa - Web Developer" },
	{ name: "og:description", property: "Rintaro Itokawa (re-taro) について。" },
	{ name: "og:url", property: "https://re-taro.dev" },
	{ name: "og:image", property: "https://og.re-taro.dev?title=About+re-taro&text=re-taro.dev" },
	{ name: "og:type", property: "website" },
	{ content: "summary_large_image", name: "twitter:card" },
	{ content: "Rintaro Itokawa - Web Developer", name: "twitter:title" },
	{ content: "Rintaro Itokawa (re-taro) について。", name: "twitter:description" },
	{ content: "https://og.re-taro.dev?title=About+re-taro&text=re-taro.dev", name: "twitter:image" },
	{ content: "@re_taro_", name: "twitter:site" },
	{ content: "@re_taro_", name: "twitter:creator" },
];
