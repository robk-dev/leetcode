const deep_equal = require('deep-equal');

const Node = function (val) {
    this.val = val;
    this.next = null;

    this.get = () => {
        return this.val;
    }
};

const linked_list = () => {
    let length = 0;
    let head = null;

    const getHead = function () {
        return head;
    };

    const isEmpty = function () {
        return length === 0;
    };

    const count = function () {
        return length;
    };

    const append = function (val) {
        const node = new Node(val);
        let temp;

        if (!head) {
            head = node;
        } else {
            temp = head;

            while (temp.next) {
                temp = temp.next;
            }

            temp.next = node;
        }
        length++;
    };

    const insertAt = function (val, pos) {
        if (pos < 0 || pos > length) {
            return false;
        }

        const node = new Node(val);
        let temp = head;
        let prev;
        let index = 0;

        if (pos === 0) {
            node.next = temp;
            head = node;

        } else {
            while (index++ < pos) {
                prev = temp;
                temp = temp.next;
            }
            node.next = temp; // swap
            prev.next = node;
        }

        length++;
        return true;
    };

    const removeAt = function (pos) {
        if (pos < 0 || pos >= length || !head) {
            return null;
        }

        let temp = head;
        let prev;
        let index = 0;

        if (pos === 0) {
            head = temp.next;
        } else {
            while (index++ < pos) {
                prev = temp;
                temp = temp.next;
            }

            prev.next = temp.next; // swap
        }

        length--;
        return temp.get();
    };

    const remove = function (val) {
        const index = indexOf(val)
        return removeAt(index);
    };

    const indexOf = function (val) {
        let temp = head;
        let index = 0;

        while (temp) {
            if (deep_equal(val, temp.val)) {
                return index;
            }
            index++;
            temp = temp.next;
        }
        return -1;
    };

    const toString = function () {
        let temp = head;
        let str = "->";

        while (temp) {
            str += `(${temp.val})->`;
            temp = temp.next;
        }

        return str.slice(0, -2);
    };

    const iterator = () => {
        let temp = { next: head };
        return {
            next: () => ({
                value: temp = temp.next,
                done: !temp
            })
        };
    };

    return {
        [Symbol.iterator]: iterator,
        getHead, isEmpty, count, append, insertAt, remove, removeAt, indexOf, toString
    };
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

module.exports = { addTwoNumbers, linked_list };
