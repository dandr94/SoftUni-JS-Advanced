function solution(){
    let finalStr = ''

    return {
        append: s => finalStr += s,
        removeStart: n => finalStr = finalStr.slice(n),
        removeEnd: n => finalStr = finalStr.slice(0, -n),
        print: () => console.log(finalStr)
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();



let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
