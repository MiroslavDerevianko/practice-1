export default function merge(data) {
    const result = {};
    for (const i of data) {
        const keys = Object.keys(i);
        for (const el of keys) {
            const buff = [];
            if (result[el] === undefined) {
                buff.push(i[el]);
                result[el] = buff;
            } else {
                result[el].push(i[el]);
            }
        }
    }
    return result;
}
