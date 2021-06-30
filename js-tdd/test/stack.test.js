// "interview quesiton make a FIFO object in js without using arrays"


class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    push(object) {
        ++this.top;
        this.items[this.top] = { value: object }
    }

    peek() {
        return this.items[this.top].value;
    }

    pop() {
        var top = this.items[this.top];
        --this.top;
        return top.value;
    }
}

describe('My Stack', () => {

    // Globals
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('is created empty', () => {
        // Tests actual value to expected value.
        expect(stack.top).toBe(-1);

        // Checks for value equality instead of object reference itself
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push('Number 1');
        expect(stack.top).toBe(0);
        expect(stack.peek()).toBe('Number 1');
    });

    it('can pop off', () => {
        stack.push('top');
        let topBefore = stack.top;
        expect(stack.pop()).toBe('top');
        expect(stack.top).toBe(topBefore - 1);
    });
})