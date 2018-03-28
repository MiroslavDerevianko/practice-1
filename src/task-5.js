
export default function trim(text, maxLength) {
    let string = "";
    if (maxLength < 1) {
        throw new RangeError();
    } else {
        if (maxLength >= text.length) {
            string = text;
        } else {
            string = text.substr(0, maxLength - 1);
            string += "\u2026";
        }
    }
    return string;
}
