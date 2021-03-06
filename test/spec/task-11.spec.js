import chai from "chai";
import task from "../../src/task-11.js";

const assert = chai.assert,
    checkCashRegister = task;

describe("Task 11: Cash register drawer", () => {
    it("Default 1 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 1.01], 
        	                                              ["NICKEL", 2.05], 
        	                                              ["DIME", 3.10], 
        	                                              ["QUARTER", 4.25], 
        	                                              ["ONE", 90.00], 
        	                                              ["FIVE", 55.00], 
        	                                              ["TEN", 20.00], 
        	                                              ["TWENTY", 60.00], 
        	                                              ["ONE HUNDRED", 100.00]]),
        	                                               "Closed"));
    it("No cash 2 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 0], 
        	                                              ["NICKEL", 0], 
        	                                              ["DIME", 0], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 0], 
        	                                              ["FIVE", 0], 
        	                                              ["TEN", 0], 
        	                                              ["TWENTY", 0], 
        	                                              ["ONE HUNDRED", 0]]),
        	                                               "Insufficient Funds"));
    it("Price > cash 3 case",
        () => assert.equal(checkCashRegister(39.50, 20.00, 
        	                                              [["PENNY", 0], 
        	                                              ["NICKEL", 0], 
        	                                              ["DIME", 0], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 0], 
        	                                              ["FIVE", 0], 
        	                                              ["TEN", 0], 
        	                                              ["TWENTY", 0], 
        	                                              ["ONE HUNDRED", 0]]),
        	                                               "Insufficient Funds"));

    it("Smart 4 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 0], 
        	                                              ["NICKEL", 0], 
        	                                              ["DIME", 0], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 20], 
        	                                              ["FIVE", 50], 
        	                                              ["TEN", 100], 
        	                                              ["TWENTY", 60], 
        	                                              ["ONE HUNDRED", 300]]),
        	                                               "Insufficient Funds"));
    it("Another Smart 5 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 0.05], 
        	                                              ["NICKEL", 0.25], 
        	                                              ["DIME", 0.2], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 20], 
        	                                              ["FIVE", 50], 
        	                                              ["TEN", 100], 
        	                                              ["TWENTY", 60], 
        	                                              ["ONE HUNDRED", 300]]),
        	                                               "Closed"));
    it("More Smart 6 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 0.04], 
        	                                              ["NICKEL", 0.25], 
        	                                              ["DIME", 0.2], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 20], 
        	                                              ["FIVE", 50], 
        	                                              ["TEN", 100], 
        	                                              ["TWENTY", 60], 
        	                                              ["ONE HUNDRED", 300]]),
        	                                               "Insufficient Funds"));
    it("6 case",
        () => assert.equal(checkCashRegister(19.50, 20.00, 
        	                                              [["PENNY", 0.34], 
        	                                              ["NICKEL", 0.20], 
        	                                              ["DIME", 0.2], 
        	                                              ["QUARTER", 0], 
        	                                              ["ONE", 20], 
        	                                              ["FIVE", 50], 
        	                                              ["TEN", 100], 
        	                                              ["TWENTY", 60], 
        	                                              ["ONE HUNDRED", 300]]),
        	                                               "Closed"));
});
