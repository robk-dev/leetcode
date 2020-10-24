/**
 * @param {number[]} arr
 * @return {string}
 */
const largestTimeFromDigits = function (arr) {
    const results = [];


    findTime(arr, [], results);

    if (results.length === 0) {
        return '';
    }

    const [h, hh, m, mm] = results.sort((a, b) => b.join('') - a.join(''))[0];
    return `${h}${hh}:${m}${mm}`;
};

function findTime(arr, result, results) {
    const length = arr.length;

    if (length === 0) {
        results.push([...result]);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        const digit = arr[i];

        if (!isFit(result, digit)) {
            continue;
        }

        result.push(digit);
        arr.splice(i, 1);
        findTime(arr, result, results);
        arr.splice(i, 0, digit);
        result.pop();
    }
}

function isFit(result, digit) {
    const length = result.length;

    switch (length) {
        case 0:
            return digit < 3;
        case 1:
            return result[0] * 10 + digit < 24;
        case 2:
            return digit < 6;
    }

    return true;
}

const arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

arr.reduce((prev, curr, indx, total) => {
    if(indx === 1) prev += ':'
    return prev
})