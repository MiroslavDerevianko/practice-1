
export default function sumDigits(n) {
    //Перевірка на число

    const S = n.toString();
    let result = 0;
    for (let i = 0; i < S.length; i++) {
        const currentchar = S.charAt(i);
        result += parseInt(currentchar, 10); 
    }
    return result;
}
