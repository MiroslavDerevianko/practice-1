import chai from "chai";
import task from "../../src/task-13.js";

const assert = chai.assert,
    sym = task;

describe("Task 13: Sym", () => {
    it("Default 1 case",
        () => assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]));
    it("Default 2 case",
        () => assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4], [3, 4]), [5]));
    it("Empty 3 case",
        () => assert.deepEqual(sym([], [], []), []));
    it("Default 4 case",
        () => assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4], [3, 4], [5, 3, 2]), [2, 3]));
});
