import assert from "assert";
import {Problem} from "../types/problem";

export const playingWithDigitsHandler = (fn: any) => {
    try {
        const tests = [[89, 1],
            [92, 1], [695, 2], [46288, 3]]
        const answers = [1, -1, 2, 51];
        for (let i = 0; i < tests.length; i++) {
            assert.deepEqual(fn(tests[i][0], tests[i][1]), answers[i]);
        }
        return true;
    } catch (error: any) {
        throw new Error(error);
    }
};

const starterCodePlayingWithDigits = `
function digPow(n, p) {
  // Your code here...
}`;

export const playingWithDigits: Problem = {
    id: "playing-with-digits",
    title: "4. Playing with digits",
    problemStatement: `<p class='mt-3'>Some numbers have funny properties. For example: <br>
<code>"89 --> 8¹ + 9² = 89 * 1"</code> <br>
<code>"695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2"</code> <br>
<code>"46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51"</code> <br>

<p class='mt-3'>Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p</p>
<p class='mt-3'>we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.</p>
<p class='mt-3'>In other words:</p>
<code>Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k</code>
<p class='mt-3'>If it is the case we will return k, if not return -1.</p>`,
    examples: [
        {
            id: 0,
            inputText: "digPow(89, 1)",
            outputText: "1",
            explanation: "since 8¹ + 9² = 89 = 89 * 1"
        },
        {
            id: 1,
            inputText: "digPow(92, 1)",
            outputText: "-1",
            explanation: "since there is no k such as 9¹ + 2² equals 92 * k"
        },
        {
            id: 2,
            inputText: "digPow(695, 2)",
            outputText: "2",
            explanation: "since 6² + 9³ + 5⁴= 1390 = 695 * 2"
        },
        {
            id: 3,
            inputText: "digPow(46288, 3)",
            outputText: "51",
            explanation: "since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51"
        },
    ],
    constraints: `<li class='mt-2'>Note: n and p will always be given as strictly positive integers.</li>`,
    starterCode: starterCodePlayingWithDigits,
    handlerFunction: playingWithDigitsHandler,
    starterFunctionName: "function digPow(",
    order: 4,
};
