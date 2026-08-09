class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity
        this.length = 0;
        this.arr = new Array(capacity)
    }

    resize() {
        this.capacity *= 2
        const newArray = new Array(this.capacity)
        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.arr[i]
        }

        this.arr = newArray
    }

    getSize() {
        return this.length
    }

    getCapacity() {
        return this.capacity
    }

    get(i) {
        if (i < this.length) {
            return this.arr[i]
        }
        return
    }

    set(i, n) {
        if (i < this.length) {
            this.arr[i] = n
            return
        }
        return true;
    }

    pushback(n) {
        if (this.length == this.capacity) {
            this.resize();
        }

        this.arr[this.length] = n;
        this.length++
    }

    popback() {

        if (this.length > 0) {
            const last = this.arr[this.length - 1]
            this.length--
            return last
        }
    }
}