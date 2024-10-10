import { equal, deepEqual } from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";

test("uppercaseNames works with empty array", () => {
	const dom = new JSDOM(`<!DOCTYPE html><p>Hi!</p>`);

	equal(dom.window.document.querySelector("p")!.textContent, "Hi!");
});

test("", () => {
	const dom = new JSDOM(`
		<!DOCTYPE html><p>Hi!</p><p>Hello!</p>
		`);
	const result = dom.window.document.querySelectorAll("p")[0];
	deepEqual(result, dom.window.document.createElement("p"));
});
