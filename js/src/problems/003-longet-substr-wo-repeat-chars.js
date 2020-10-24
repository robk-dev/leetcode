/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    const map = {};
    let longest = 0, current = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char] == null) {
            current += 1;
        } else {
            current = Math.min(i - map[char], current + 1);
        }
        map[char] = i;
        longest = Math.max(longest, current);
    }
    return longest;
};

module.exports = lengthOfLongestSubstring;
