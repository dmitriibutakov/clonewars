import {Problem} from "../types/problem";
import {growthOfAPopulation} from "./growth-of-a-population";
import {consecutiveStrings} from "./consecutive-strings";
import {descendingOrder} from "@/utils/problems/descending-order";
import {playingWithDigits} from "@/utils/problems/playing-with-digits";
import {sumOfOddNumbers} from "@/utils/problems/sum-of-odd-numbers";
import {findTheNextPerfectSquare} from "@/utils/problems/find-the-next-perfect-square";

interface ProblemMap {
    [key: string]: Problem;
}

export const problems: ProblemMap = {
    "consecutive-strings": consecutiveStrings,
    "growth-of-a-population": growthOfAPopulation,
    "descending-order": descendingOrder,
    "playing-with-digits": playingWithDigits,
    "sum-of-odd-numbers": sumOfOddNumbers,
    "find-the-next-perfect-square": findTheNextPerfectSquare
};
