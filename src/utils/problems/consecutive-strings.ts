import assert from "assert";
import {Problem} from "../types/problem";

const starterCodeConsecutiveStrings = `function longestConsec(strarr, k) {
    // your code
}`;

// checks if the user has the correct code
const handlerConsecutiveStrings = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const strs = [
            ["zone", "abigail", "theta", "form", "libe", "zas"],
            ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"],
            [],
        ];

        const targets = [2, 1, 3];
        const answers = [
            "abigailtheta",
            "oocccffuucccjjjkkkjyyyeehh",
            "",
        ];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < strs.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(strs[i], targets[i]);
            assert.deepStrictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Consecutive strings function error");
        throw new Error(error);
    }
};

export const consecutiveStrings: Problem = {
    id: "consecutive-strings",
    title: "1. Consecutive strings",
    problemStatement: `<p class='mt-3'>
  You are given an array(list) <code>strarr</code> of strings and an integer <code>k</code>. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
    examples: [
        {
            id: 1,
            inputText: "strarr = [\"tree\", \"foling\", \"trashy\", \"blue\", \"abcdef\", \"uvwxyz\"], k = 2",
            outputText: "folingtrashy",
            explanation: "Concatenate the consecutive strings of strarr by 2, we get:\n" +
                "treefoling   (length 10)  concatenation of strarr[0] and strarr[1]\n" +
                "folingtrashy (\"      12)  concatenation of strarr[1] and strarr[2]\n" +
                "trashyblue   (\"      10)  concatenation of strarr[2] and strarr[3]\n" +
                "blueabcdef   (\"      10)  concatenation of strarr[3] and strarr[4]\n" +
                "abcdefuvwxyz (\"      12)  concatenation of strarr[4] and strarr[5]\n" +
                "\n" +
                "Two strings are the longest: \"folingtrashy\" and \"abcdefuvwxyz\".\n" +
                "The first that came is \"folingtrashy\" so \n" +
                "longest_consec(strarr, 2) should return \"folingtrashy\".",
        },
        {
            id: 2,
            inputText: "strarr = [\"ejjjjmmtthh\", \"zxxuueeg\", \"aanlljrrrxx\", \"dqqqaaabbb\", \"oocccffuucccjjjkkkjyyyeehh\"], k = 1",
            outputText: "oocccffuucccjjjkkkjyyyeehh"
        },
        {
            id: 3,
            inputText: "strarr = [], k = 3",
            outputText: "''",
        },
    ],
    constraints: `<li class='mt-2'>
  n being the length of the string array
</li> <li class='mt-2'>
if n = 0 or k > n or k <= 0 return ""
</li> <li class='mt-2'>
return Nothing in Elm, "nothing" in Erlang
</li>
<li class='mt-2'>
 consecutive strings : follow one after another without an interruption
</li>`,
    handlerFunction: handlerConsecutiveStrings,
    starterCode: starterCodeConsecutiveStrings,
    order: 1,
    starterFunctionName: "function longestConsec(",
};
