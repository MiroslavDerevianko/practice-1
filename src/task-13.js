export default function sym(...args) {
    let result = [];
    for (let i of arguments) {
        result = sum(result, i);
    }
    return result;
}

function sum(arr1, arr2) {
    let result = [];
    let buff = arr1.concat(arr2);
    
    for (let i of buff) {
        if(result.indexOf(i) === -1) {
            let count = 0;
            count = (arr1.indexOf(i) !== -1) ? count++ : count;
            count = (arr2.indexOf(i) !== -1) ? count++ : count;
            /*if (arr1.indexOf(i) !== -1) count++;
            if (arr2.indexOf(i) !== -1) count++;*/
            if (count === 1) result.push(i);
        }
    }

    return result.sort();
}