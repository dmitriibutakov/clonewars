import assert from "assert";
import {Problem} from "../types/problem";

const starterCodeDescendingOrder = `function descendingOrder(n) {
  //...
}`;

// checks if the user has the correct code
const handlerDescendingOrder = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const strs = [
            42145,
            145263,
            123456789,
        ];

        const answers = [
            54421,
            654321,
            987654321,
        ];

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < strs.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(strs[i]);
            assert.deepStrictEqual(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const descendingOrder: Problem = {
    id: "descending-order",
    title: "3. Descending order",
    problemStatement: `<p class='mt-3'>
 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
</p>
<p class='mt-3'>You can return the answer in any order.</p>`,
    examples: [
        {
            id: 1,
            inputText: "42145",
            outputText: "54421",
        },
        {
            id: 2,
            inputText: "145263",
            outputText: "654321"
        },
        {
            id: 3,
            inputText: "123456789",
            outputText: "987654321",
        },
    ],
    handlerFunction: handlerDescendingOrder,
    starterCode: starterCodeDescendingOrder,
    order: 3,
    starterFunctionName: "function descendingOrder(",
};
