class Stringer {
    constructor(s, l){
        this.innerString = s
        this.innerLength = l
    }

    isNegative= (n) => this.innerLength - n < 0
    returnStr = (idx) => this.innerLength.slice(0, idx) 

    increase(l) {
        this.innerLength += l
    }

    decrease(l) {
        if(this.isNegative(l)) {
            this.innerLength = 0
        } else {
            this.innerLength -= l
        }
    }

    toString(){
        if (this.innerLength == 0){
            return '...'
        }

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`
        }

        return this.innerString
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
