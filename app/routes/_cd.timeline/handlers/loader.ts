import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

// TODO: Setup admin panel to manage the timeline
export async function loader() {
	return json({
		timelines: [
			{
				title: "CyberAgent Inc.",
				date: Temporal.PlainDate.from({ year: 2025, month: 4, day: 1 }),
			},
			{
				title: "AbemaTV Inc.",
				date: Temporal.PlainDate.from({ year: 2024, month: 5, day: 8 }),
				slug: "4ヶ月間Web-based TVの開発に携わる",
			},
			{
				title: "Web Speed Hackathon 2024",
				date: Temporal.PlainDate.from({ year: 2024, month: 3, day: 24 }),
				slug: "スコア3位",
			},
			{
				title: "Web Speed Hackathon 2023",
				date: Temporal.PlainDate.from({ year: 2023, month: 3, day: 5 }),
				slug: "スコア2位",
			},
			{
				title: "TwoGate Inc.",
				date: Temporal.PlainDate.from({ year: 2022, month: 11, day: 4 }),
				slug: "5ヶ月間Angularを用いたWebアプリケーションの開発に携わる",
			},
			{
				title: "第57回鈴鹿高専祭HP 入場管理システム「monaqa」作成",
				date: Temporal.PlainDate.from({ year: 2022, month: 10, day: 31 }),
			},
			{
				title: "C-Style Inc.",
				date: Temporal.PlainDate.from({ year: 2022, month: 10, day: 6 }),
				slug: "スタートアップ企業にて自社サービスの開発や受託開発に携わる",
			},
			{
				title: "Web Speed Hackathon 2022 for Students",
				date: Temporal.PlainDate.from({ year: 2022, month: 3, day: 6 }),
				slug: "総合4位",
			},
			{
				title: "Hack U KOSEN 2021",
				date: Temporal.PlainDate.from({ year: 2021, month: 12, day: 18 }),
				slug: "ヤフー賞、Happy Hacking賞を受賞",
			},
			{
				title: "鈴鹿工業高等専門学校 電子情報工学科",
				date: Temporal.PlainDate.from({ year: 2020, month: 4, day: 16 }),
				slug: "型推論の研究開発を行っている",
			},
			{
				title: "誕生",
				date: Temporal.PlainDate.from({ year: 2004, month: 4, day: 25 }),
			},
		],
	});
}
