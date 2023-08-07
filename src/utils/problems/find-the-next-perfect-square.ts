import assert from "assert";
import {Problem} from "../types/problem";

export const findTheNextPerfectSquareHandler = (fn: any) => {
    try {
        const tests = [319225, 15241383936, 625]
        const answers = [320356, 15241630849, 676];
        for (let i = 0; i < tests.length; i++) {
            assert.deepEqual(fn(tests[i]), answers[i]);
        }
        return true;
    } catch (error: any) {
        throw new Error(error);
    }
};

const starterCodeFindTheNextPerfectSquare = `
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return -1;
}`;

export const findTheNextPerfectSquare: Problem = {
    id: "find-the-next-perfect-square",
    title: "6. Find the next perfect square",
    problemStatement: `<p class='mt-3'> You might know some pretty large perfect squares. But what about the NEXT one?</p>
<p class="mt-3">Complete the <code>findNextSquare</code> method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.</p>

<p class='mt-3'>If the parameter is itself not a perfect square then <code>-1</code> should be returned. You may assume the parameter is non-negative.</p>`,
    examples: [
        {
            id: 0,
            inputText: "121",
            outputText: "144",
        },
        {
            id: 1,
            inputText: "625",
            outputText: "676",
        },
        {
            id: 2,
            inputText: "114",
            outputText: "-1 since 114 is not a perfect square",
        }
    ],
    starterCode: starterCodeFindTheNextPerfectSquare,
    handlerFunction: findTheNextPerfectSquareHandler,
    starterFunctionName: "function findNextSquare(",
    order: 6,
};
