import chai from "chai";
import task from "../../src/task-14.js";

const assert = chai.assert,
    sumPrimes = task;

describe("Task 14: SumPrimes", () => {
    it("Default 1 case",
        () => assert.equal(sumPrimes(10), 17));
    it("Default 2 case",
        () => assert.equal(sumPrimes(12), 28));
    it("Default 3 case",
        () => assert.equal(sumPrimes(14), 41));
});
