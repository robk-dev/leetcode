
function isValid(s) {
    const reversed = s.split("").reverse().join("");
    return s == reversed;
}

const longestPalindrome = (s) => {

    let longest = '';
    let i = 0, max = s.length;

    const map = {};
    while (i < max) {
        const substrings = s.substr(i, max);
        i++;

        let j = substrings.length;
        if (j <= longest.length) break;

        while (j >= 0) {
            const subsub = substrings.substr(0, j);
            console.log({ [`subsub[${[i]}][${j}]`]: subsub });
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

module.exports = longestPalindrome;

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));