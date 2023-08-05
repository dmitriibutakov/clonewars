import {Problem} from "../types/problem";
import {growthOfAPopulation} from "./Growth-of-a-Population";
import {consecutiveStrings} from "./consecutive-strings";

interface ProblemMap {
    [key: string]: Problem;
}

export const problems: ProblemMap = {
    "consecutive-strings": consecutiveStrings,
    "Growth-of-a-Population": growthOfAPopulation,
};
