import assert from "assert";
import {Problem} from "../types/problem";

export const growthOfAPopulationHandler = (fn: any) => {
    try {
        const tests = [{p0: 1500, percent: 5, aug: 100, p: 5000},
            {p0: 1500000, percent: 2.5, aug: 10000, p: 2000000}]
        const answers = [15, 10];
        for (let i = 0; i < tests.length; i++) {
            assert.deepEqual(fn(tests[i]), answers[i]);
        }
        return true;
    } catch (error: any) {
        throw new Error(error);
    }
};

const starterCodeGrowthOfAPopulation = `
function nbYear(obj) {
    // your code
}`;

export const growthOfAPopulation: Problem = {
    id: "growth-of-a-population",
    title: "2. Growth of a Population",
    problemStatement: `<p class='mt-3'>In a small town the population is <code>p0 = 1000</code> at the beginning of a year. The population regularly increases by <code>2</code> percent per year and moreover <code>50</code> new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to <code>p = 1200 inhabitants?</code></p>
	<p class='mt-3'>More generally given parameters:

<code>p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)</code>

the function <code>nb_year</code> should return <code>n</code> number of entire years needed to get a population greater or equal to <code>p</code>.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)</p>`,
    examples: [
        {
            id: 0,
            inputText: "nb_year({p0: 1500, percent: 5, aug: 100, p: 5000})",
            outputText: "15",
            explanation: '' +
                'At the end of the first year there will be: \n' +
                '1000 + 1000 * 0.02 + 50 => 1070 inhabitants\n' +
                '\n' +
                'At the end of the 2nd year there will be: \n' +
                '1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)\n' +
                '\n' +
                'At the end of the 3rd year there will be:\n' +
                '1141 + 1141 * 0.02 + 50 => 1213\n' +
                '\n' +
                'It will need 3 entire years.'
        },
        {
            id: 1,
            inputText: "nb_year({p0: 1500000, percent: 2.5, aug: 10000, p: 2000000})",
            outputText: "10",
        },
    ],
    constraints: `<li class='mt-2'>Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.</li>`,
    starterCode: starterCodeGrowthOfAPopulation,
    handlerFunction: growthOfAPopulationHandler,
    starterFunctionName: "function nbYear(",
    order: 2,
};
