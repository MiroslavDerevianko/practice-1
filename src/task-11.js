export default function checkCashRegister(price, cash, cid) {
    let change = null;
    const diff = cash - price;
    // let summ = getCashSumm(cid);
    if (price > cash) {
        return "Insufficient Funds";
    }
    if (price === cash) {
        return "Closed";
    }
    const cashval = new Map([["PENNY", 1], 
                            ["NICKEL", 5], 
                            ["DIME", 10], 
                            ["QUARTER", 25], 
                            ["ONE", 100],
                            ["FIVE", 500], 
                            ["TEN", 1000],
                            ["TWENTY", 2000], 
                            ["ONE HUNDRED", 10000]]);
    
    const cashsumm = getCashSummMap(cid, cashval);
    change = check(diff, cashval, cashsumm);
    return change;
}

/*
function getCashSumm(cid) {
    let result = 0;
    for (const i of cid) {
        // console.log(i);
        result += i[1];
    }
    return result;
}*/

function getCashSummMap(cid, cashval) {
    let result = new Map();
    for (const i of cid) {
        const buff = Math.round(i[1] * 100 / cashval.get(i[0]));
        const key = i[0];
        result.set(key, buff);
    }
    result = new Map([...result.entries()]);
    return result;
}

// жадібний алгоритм
function check(x, cashval, cashsumm) {
    let result = "";
    let flag = true; // відіграє роль break;
    let diff = x * 100;
    let buff = new Map([...cashval.entries()].sort((a, b) => a[1] < b[1]));
    buff.forEach((value, key) => {
        if (flag) {
            const val = cashsumm.get(key);
            const currentsumm = mod(diff, value); // скільки можна взяти монет даного номіналу
            diff = (currentsumm <= val) ? (diff - currentsumm * value) : (diff - val * value); // перевірка чи є у касі дане число монет
            if (diff === 0) {
                result = "Closed";
                flag = false;
            }
        }
    });
    if (diff !== 0) {
        result = "Insufficient Funds";
    }
    return result;
}

function mod(x, y) {
    let result = 0;
    while (x >= y) {
        result++;
        x -= y;
    }
    return result;
}
