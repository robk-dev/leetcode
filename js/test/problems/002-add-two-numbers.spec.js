const { addTwoNumbers, linked_list } = require('../../src/problems/002-add-two-numbers');

describe("addTwoNumbers Suite:", () => {
    test("addTwoNumbers(l1, l2) should return expected value", () => {
        const ll1 = linked_list();
        const ll2 = linked_list();
        const input1 = [2, 4, 3];
        const input2 = [5, 6, 4]

        input1.forEach(item => ll1.append(item));
        input2.forEach(item => ll2.append(item));

        const expected = [7, 0, 8];

        const output = [];

        let list = addTwoNumbers(ll1.getHead(), ll2.getHead());
        while (list) {
            output.push(list.val);
            list = list.next;
        }

        expect(output).toEqual(expected);
    });
});
