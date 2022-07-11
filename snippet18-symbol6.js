const a = Symbol("my symbol");
console.log(a);         // Symbol(my symbol)
const b = Symbol("my symbol");
console.log(b);         // Symbol(my symbol)
console.log(a === b);   // false
const obj = {
    [a]: 6,
    [b]: 7
};
console.log(obj[a]);    // 6
console.log(obj[b]);    // 7
