const { addTwoNumbers, Node } = require('../../src/problems/002-add-two-numbers');

describe("addTwoNumbers Suite:", () => {
    test("addTwoNumbers(l1, l2) should return expected value", () => {
        const input1 = [2, 4, 3];
        const input2 = [5, 6, 4]
        const expected = [7, 0, 8];


        const head1 = new Node(0);
        const head2 = new Node(0);

        let i = -1;
        let temp1 = head1;
        let temp2 = head2;
        while (++i < input1.length) {
            temp1.next = new Node(input1[i]);
            temp1 = temp1.next;

            temp2.next = new Node(input2[i]);
            temp2 = temp2.next;
        }

        const output = [];
        let list = addTwoNumbers(head1.next, head2.next);

        while (list) {
            output.push(list.val);
            list = list.next;
        }

        expect(output).toEqual(expected);
    });
});
