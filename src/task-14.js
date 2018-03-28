export default function sumPrimes(num) {
    let result = 0;
    let buff = new Set();
    //Решето Ератосфена
    for (let i = 2; i <= num; i++) {
        if(!buff.has(i)) {
            result += i;
            for(let j = i; j <= num; j += i) {
                buff.add(j);
            }
        }
    }
    return result;
}