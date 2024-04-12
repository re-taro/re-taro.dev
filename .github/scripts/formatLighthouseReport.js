// @ts-check

/** @typedef {Record<'performance' | 'accessibility' | 'best-practices' | 'seo' | 'pwa', number>} LighthouseSummary */

/** @type {Record<keyof LighthouseSummary, string>} */
const summaryKeys = {
	"performance": "Performance",
	"accessibility": "Accessibility",
	"best-practices": "Best Practices",
	"seo": "SEO",
	"pwa": "PWA",
};

/** @param {number} rawScore */
function scoreEntry(rawScore) {
	const score = Math.round(rawScore * 100);

	const scoreIcon = score >= 90 ? "🟢" : score >= 50 ? "🟠" : "🔴";
	return `${scoreIcon} ${score}`;
}

/**
 * @param {string} url
 * @returns {module:url.URL} URL
 */
function createURL(url) {
	try {
		return new URL(url);
	}
	catch (_) {
		throw new Error(`Can't create URL for string=${url}`);
	}
}

/**
 * @param {object} param0
 * @param {string} param0.url
 * @param {LighthouseSummary} param0.summary
 * @param {string} param0.reportUrl
 */
function createMarkdownTableRow({ url, summary, reportUrl }) {
	return [
    `| [${createURL(url).pathname}](${url})`,
    ...(Object.keys(summaryKeys)).map(k => scoreEntry(summary[k])),
    `[Report](${reportUrl}) |`,
	].join(" | ");
}

function createMarkdownTableHeader() {
	return [
		["| URL", ...Object.values(summaryKeys), "Report |"].join(" | "),
		["|---", ...Array(Object.keys(summaryKeys).length).fill("---"), "---|"].join(
			"|",
		),
	];
}

/**
 * @param {object} param0
 * @param {Record<string, string>} param0.links
 * @param {{url: string, summary: LighthouseSummary}[]} param0.results
 */
function createLighthouseReport({ results, links }) {
	const tableHeader = createMarkdownTableHeader();
	const tableBody = results.map((result) => {
		const testUrl = /** @type {string} */ (
			Object.keys(links).find(key => key === result.url)
		);
		const reportPublicUrl = /** @type {string} */ (links[testUrl]);

		return createMarkdownTableRow({
			url: testUrl,
			summary: result.summary,
			reportUrl: reportPublicUrl,
		});
	});
	const comment = [
		"### ⚡️ Lighthouse report for the deploy preview of this PR",
		"",
		...tableHeader,
		...tableBody,
		"",
	];
	return comment.join("\n");
}

export default createLighthouseReport;
