import "@testing-library/jest-dom/vitest";
import "@vanilla-extract/css/disableRuntimeStyles";

import { setProjectAnnotations } from "@storybook/react";
import { configure } from "@testing-library/react";

import projectAnotations from "./.storybook/preview";

configure({
	testIdAttribute: "data-test",
});

setProjectAnnotations(projectAnotations);

/** @see https://github.com/jsdom/jsdom/issues/1695 */
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scrollBy = vi.fn().mockReturnValue(undefined);

/** @see https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom */
beforeAll(() => {});
