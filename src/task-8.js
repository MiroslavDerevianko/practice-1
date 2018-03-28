export default function getTopLetter(str) {
    const map = new Map();
    let max = 0;
    let maxchar = "";
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        let count = 0;
        if (map.has(char)) {
            count = map.get(char);
            count++;
            map.set(char, count);
        } else {
            count = 1;
            map.set(char, count);
        }
        if (count > max) {
            max = count;
            maxchar = char;
        }
    }
    return maxchar;
}
