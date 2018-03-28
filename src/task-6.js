export default function getStats(data) {
    let count = 0;
    let min = 0;
    let max = 0;
    let avg = 0;
    const result = {
        min: null,
        max: null,
        avg: null
    };
    if (data.length !== 0) {
        min = data[0];
        max = data[0];
        for (const el of data) {
            max = (el > max) ? el : max;
            min = (el < min) ? el : min;
            avg += el;
            count++;
        }
        avg /= count;
        result.min = min;
        result.max = max;
        result.avg = avg;
    }
    return result;
}
