
function isValid(s) {
    const reversed = s.split("").reverse().join("");
    return s == reversed;
}

const longestPalindrome = (s) => {

    let longest = '';
    let i = 0, max = s.length;

    if (max <= 1) return s;

    const fromCenter = (left, right) => {
        while (left >= 0 && right < max && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    };

    while (i < max - 1) {
        const odd = fromCenter(i, i + 1);
        const even = fromCenter(i, i);
        i++;

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }
    return longest;
}

const longestPalindromeNaive = (s) => {

    let longest = '';
    let i = 0, max = s.length;

    if (max <= 1) return s;

    const map = {};
    while (i < max) {
        const substrings = s.substr(i, max);
        i++;

        let j = substrings.length;
        if (j <= longest.length) break;

        if (map[substrings]) continue;
        map[substrings] = true;

        while (j >= 0) {
            const subsub = substrings.substr(0, j);
            j--;
            if (map[subsub]) continue;
            map[subsub] = true;

            if (subsub.length < 1 || subsub.length <= longest.length)
                continue;

            if (isValid(subsub)) {
                if (subsub.length > longest.length) {
                    longest = subsub;
                }
            }

        }
    }
    return longest;
}

module.exports = { longestPalindromeNaive, longestPalindrome };