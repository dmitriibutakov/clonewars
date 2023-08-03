export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		link: "https://github.com/dmitrybutakov/codewars/blob/main/6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		link: "",
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "merge-intervals",
		title: "Merge Intervals",
		difficulty: "Medium",
		category: "intervals",
		order: 7,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "maximum-depth-of-binary-tree",
		title: "Maximum Depth of Binary Tree",
		difficulty: "Easy",
		category: "Tree",
		order: 8,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 9,
		link: "6-kyu-Consecutive-strings/index.js"
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Backtracking",
		order: 10,
		link: ""
	},
];
