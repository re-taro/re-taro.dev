import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

globalStyle("body", {
	"@layer": {
		[layers.base]: {
			fontFamily: 'Inter, "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',

			/**
			 * アンチエイリアスによってブラウザによって表示が変わるのを防ぐ
			 *
			 * @see {@link https://ics.media/entry/230830/#%E5%AF%BE%E5%87%A6%E6%B3%951-%E9%81%A9%E5%88%87%E3%81%AA%E3%82%A2%E3%83%B3%E3%83%81%E3%82%A8%E3%82%A4%E3%83%AA%E3%82%A2%E3%82%B9%E8%A8%AD%E5%AE%9A%E3%81%A8css%E3%81%AE%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B}
			 */
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
		},
	},
});
