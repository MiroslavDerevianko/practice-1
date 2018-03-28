export default function myReplace(str, before, after) {
    let result = "";
    let buff = str.split(" ");
    while (buff.indexOf(before) !== -1) {
        let i = buff.indexOf(before);
        buff[i] = after;
    }
    result = buff.join(" ");
    return result;
}


