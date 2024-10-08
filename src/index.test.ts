import { deepEqual } from "node:assert/strict";
import test from "node:test";

const data = [
	{
		id: "76579987-5003-4a50-a31a-a561021479a3",
		name: "Carlos Doe",
	},
	{
		id: "e515a8b0-acb5-456f-8ded-c7c1f632f408",
		name: "john Doe",
	},
];

type Person = {
	id: string;
	name: string;
};

function uppercaseName(names: Person[]) {
    return [];
}

test("uppercaseNames works with empty array", () => {
	const result = uppercaseName([]);

	deepEqual(result, []);
});

