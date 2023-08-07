import assert from "assert";
import {Problem} from "../types/problem";

export const sumOfOddNumbersHandler = (fn: any) => {
    try {
        const tests = [1, 42, 2]
        const answers = [1, 74088, 8];
        for (let i = 0; i < tests.length; i++) {
            assert.deepEqual(fn(tests[i]), answers[i]);
        }
        return true;
    } catch (error: any) {
        throw new Error(error);
    }
};

const starterCodeSumOfOddNumbers = `
function rowSumOddNumbers(n) {
// TODO
}`;

export const sumOfOddNumbers: Problem = {
    id: "sum-of-odd-numbers",
    title: "5. Playing with digits",
    problemStatement: `<p class='mt-3'> Given the triangle of consecutive odd numbers: <br>
<code>
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
</code>
<p class='mt-3'>Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)</p>`,
    examples: [
        {
            id: 0,
            inputText: "1",
            outputText: "1",
        },
        {
            id: 1,
            inputText: "2",
            outputText: "8",
            explanation: "3 + 5 = 8"
        }
    ],
    starterCode: starterCodeSumOfOddNumbers,
    handlerFunction: sumOfOddNumbersHandler,
    starterFunctionName: "function rowSumOddNumbers(",
    order: 5,
};
