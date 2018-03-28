import chai from "chai";
import task from "../../src/task-15.js";

const assert = chai.assert,
    myReplace = task;

describe("Task 15: myReplace", () => {
    it("Default 1 case",
        () => assert.equal(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"), "A quick brown fox leaped over the lazy dog"));
    it("Default with coma 2 case",
        () => assert.equal(myReplace("A quick brown fox, jumped over the lazy dog", "jumped", "leaped"), "A quick brown fox, leaped over the lazy dog"));
    it("Many replace 3 case",
        () => assert.equal(myReplace("Dog Dog Dog", "Dog", "Cat"), "Cat Cat Cat"));
});