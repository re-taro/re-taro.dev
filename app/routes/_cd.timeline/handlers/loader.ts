import { json } from "@remix-run/cloudflare";
import { Temporal } from "temporal-polyfill";

// TODO: Setup admin panel to manage the timeline
export async function loader() {
	return json({
		timelines: [
			{
				date: Temporal.PlainDate.from({ day: 1, month: 4, year: 2025 }),
				title: "CyberAgent Inc.",
			},
			{
				date: Temporal.PlainDate.from({ day: 8, month: 5, year: 2024 }),
				slug: "4ヶ月間Web-based TVの開発に携わる",
				title: "AbemaTV Inc.",
			},
			{
				date: Temporal.PlainDate.from({ day: 24, month: 3, year: 2024 }),
				slug: "スコア3位",
				title: "Web Speed Hackathon 2024",
			},
			{
				date: Temporal.PlainDate.from({ day: 5, month: 3, year: 2023 }),
				slug: "スコア2位",
				title: "Web Speed Hackathon 2023",
			},
			{
				date: Temporal.PlainDate.from({ day: 4, month: 11, year: 2022 }),
				slug: "5ヶ月間Angularを用いたWebアプリケーションの開発に携わる",
				title: "TwoGate Inc.",
			},
			{
				date: Temporal.PlainDate.from({ day: 31, month: 10, year: 2022 }),
				title: "第57回鈴鹿高専祭HP 入場管理システム「monaqa」作成",
			},
			{
				date: Temporal.PlainDate.from({ day: 6, month: 10, year: 2022 }),
				slug: "スタートアップ企業にて自社サービスの開発や受託開発に携わる",
				title: "C-Style Inc.",
			},
			{
				date: Temporal.PlainDate.from({ day: 6, month: 3, year: 2022 }),
				slug: "総合4位",
				title: "Web Speed Hackathon 2022 for Students",
			},
			{
				date: Temporal.PlainDate.from({ day: 18, month: 12, year: 2021 }),
				slug: "ヤフー賞、Happy Hacking賞を受賞",
				title: "Hack U KOSEN 2021",
			},
			{
				date: Temporal.PlainDate.from({ day: 16, month: 4, year: 2020 }),
				slug: "型推論の研究開発を行っている",
				title: "鈴鹿工業高等専門学校 電子情報工学科",
			},
			{
				date: Temporal.PlainDate.from({ day: 25, month: 4, year: 2004 }),
				title: "誕生",
			},
		],
	});
}
