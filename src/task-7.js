export default function unique(data) {
    const set = new Set();
    for (const el of data) {
        if (!set.has(el)) {
            set.add(el);
        }
    }
    const result = [...set];
    return result;
}
