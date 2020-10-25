const shortestPalindrome = function (s) {
    const n = s.length;
    const reversed = s.split('').slice().reverse().join('');
    const joined = s + '#' + reversed;
    const str_length = joined.length;

    const arr = new Array(str_length).fill(0);

    for (let i = 1; i < str_length; i++) {
        let k = arr[i - 1];

        while (k > 0 && joined[i] != joined[k])
            k = arr[k - 1];
        if (joined[i] == joined[k])
            ++k;

        arr[i] = k;
    }
    return reversed.substr(0, n - arr[str_length - 1]) + s;
}

module.exports = shortestPalindrome;
