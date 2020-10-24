const { longestPalindrome, longestPalindromeNaive } = require('../../src/problems/005-longest-palindrome');
const str = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
describe("Longest Palindrome Suite:", () => {
    test("longestPalindrome(str) should return expected palindrome", () => {
        const input = "babad";
        const expected = "bab";

        expect(longestPalindrome(input)).toEqual(expected);
        expect(longestPalindromeNaive(input)).toEqual(expected);
    });

    test("longestPalindrome(str) should return expected palindrome", () => {
        const expected = "ranynar";

        expect(longestPalindrome(str)).toEqual(expected);
    });

    test("longestPalindrome(str) should return input on strings of length 0 and 1", () => {
        const input1 = "";
        const input2 = "a";

        expect(longestPalindrome(input1)).toEqual(input1);
        expect(longestPalindrome(input2)).toEqual(input2);

        expect(longestPalindromeNaive(input1)).toEqual(input1);
        expect(longestPalindromeNaive(input2)).toEqual(input2);
    });
});
