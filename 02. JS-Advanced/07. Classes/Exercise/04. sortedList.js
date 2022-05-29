class List {
    constructor(){
        this.list = []
        this.size = this.list.length
    }

    isValidPosition = (idx) => this.list[idx] !== undefined
    updateSize = () => this.size = this.list.length
    sortList = () => this.list.sort( (a, b) => a - b)


    add (el) {
        this.list.push(el)
        this.sortList()
        this.updateSize()
    }

    remove(idx) {
        if (this.isValidPosition(idx)){
            this.list.splice(idx, 1)
        }
        this.sortList()
        this.updateSize()
    }

    get (idx) {
        if (this.isValidPosition(idx)){
        this.sortList()
        this.updateSize()
        return this.list[idx]
        }
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
