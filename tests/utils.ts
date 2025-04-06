import { expect } from '@playwright/test';
import type { Locator } from '@playwright/test';

export async function waitForImageToLoad(imageLocator: Locator): Promise<void> {
	await imageLocator.scrollIntoViewIfNeeded();
	await expect(imageLocator).toBeVisible();
	await expect(async () => {
		expect(
			await (
				await imageLocator.evaluateHandle((element, prop) => {
					if (!(element instanceof HTMLImageElement)) throw new Error('Element is not an image');

					return element[prop as keyof typeof element];
				}, 'naturalWidth')
			).jsonValue(),
		).toBeGreaterThan(0);
	}).toPass();
}
