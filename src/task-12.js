export default function updateInventory(arr1, arr2) {
    let result = [];
    let buff = new Map();
    //Найшвидший варіант
    for (const i of arr1) {
        const key = i[1];
        const value = i[0];
        buff.set(key, value);
    }
    for (const i of arr2) {
        const key = i[1];
        const value = i[0];
        buff.set(key, value);
    }
    buff.forEach((value, key, map) => {
        result.push([value, key]);
    });
    result.sort((a, b) => a[1] > b[1]);
    return result;
}