export default function isTriangle(a, b, c) {
    // Добавити перевірку на число
    // if ((typeof a !== Number) || (typeof b !== Number) || (typeof c !== Number)) return false;
    if (a === 0 || b === 0 || c === 0) {
        return false;
    } else if ((a + c > b) && (a + b > c) && (b + c > a)) {
        return true;
    }
    return false;
}

