const Node = function (val) {
    this.val = val;
    this.next = null;

    this.get = () => {
        return this.val;
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const node = new Node(0)

    let head = node;
    let sum = 0;
    let carry = 0;

    while (!!l1 || !!l2 || sum > 0) {

        if (!!l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (!!l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        }

        head.next = new Node(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }

    return node.next;
};

module.exports = { addTwoNumbers, Node };
