
// return unique elements of a array
export function unique(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    return arr.filter((item, idx) => arr.indexOf(item) === idx );
}