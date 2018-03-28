import chai from "chai";
import task from "../../src/task-12.js";

const assert = chai.assert,
    updateInventory = task;

describe("Task 12: UpdateInventory", () => {
    it("Default 1 case",
        () => assert.deepEqual(updateInventory([
                                            [21, "Bowling Ball"],
                                            [2, "Dirty Sock"],
                                            [1, "Hair Pin"],
                                            [5, "Microphone"]
                                                                 ], 
                                           [
                                            [2, "Hair Pin"],
                                            [3, "Half-Eaten Apple"],
                                            [67, "Bowling Ball"],
                                            [7, "Toothpaste"]
                                                                 ]), 
                                           [
                                            [67, "Bowling Ball"],
                                            [2, "Dirty Sock"],
                                            [2, "Hair Pin"],
                                            [3, "Half-Eaten Apple"],
                                            [5, "Microphone"],
                                            [7, "Toothpaste"]
                                                                 ]));
    
});
