
export default function convertToRoman(n) {
    // перевірка на 3999
    const arnumb = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const romnumb = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let result = "";
    let string = n.toString();
    let length = arnumb.length - 1;
    while (string > 0) {
        if (string >= arnumb[length]) {
            result += romnumb[length];
            string -= arnumb[length];
        } else {
            length--;
        }
    }
    return result;
}
