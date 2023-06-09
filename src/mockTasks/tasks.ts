export type Task = {
  id: string
  title: string
  difficulty: string
  category: string
  order: number
  link?: string
}

export const tasks: Task[] = [
  {
    id: "6-kyu-Consecutive-strings",
    title: "Consecutive strings",
    difficulty: "Medium",
    category: "Array",
    order: 1,
    link: "6-kyu-Consecutive-strings/index.js",
  },
  {
    id: "6-kyu-Highest-Scoring-Word",
    title: "Highest scoring word",
    difficulty: "Easy",
    category: "Linked List",
    order: 2,
    link: "6-kyu-Highest-Scoring-Word/index.js",
  },
  {
    id: "6-kyu-Playing-with-digits",
    title: "Playing with digits",
    difficulty: "Medium",
    category: "Dynamic Programming",
    order: 3,
    link: "6-kyu-Playing-with-digits/index.js",
  },
  {
    id: "6-kyu-Your-order-please",
    title: "Your order please",
    difficulty: "Medium",
    category: "Stack",
    order: 4,
    link: "6-kyu-Your-order-please/index.js",
  },
  {
    id: "7-kyu-Beginner-Series-of-Numbers",
    title: "Beginner series of numbers",
    difficulty: "Easy",
    category: "Binary Search",
    order: 5,
    link: "7-kyu-Beginner-Series-%233-of-Numbers/index.js",
  },
  {
    id: "container-with-most-water",
    title: "Container with most water",
    difficulty: "Medium",
    category: "Two Pointers",
    order: 6,
    link: "",
  },
  {
    id: "merge-intervals",
    title: "Merge intervals",
    difficulty: "Medium",
    category: "intervals",
    order: 7,
    link: "",
  },
  {
    id: "7-kyu-Categorize-New-Member",
    title: "Categorize new member",
    difficulty: "Easy",
    category: "Tree",
    order: 8,
    link: "7-kyu-Categorize-New-Member/index.js",
  },
  {
    id: "7-kyu-Descending-Order",
    title: "Descending order",
    difficulty: "Easy",
    category: "Array",
    order: 9,
    link: "7-kyu-Descending-Order/index.js",
  },
  {
    id: "7-kyu-Find-the-next-perfect-square",
    title: "Find the next perfect square",
    difficulty: "Easy",
    category: "Backtracking",
    order: 10,
    link: "7-kyu-Find-the-next-perfect-square/index.js",
  }
]
