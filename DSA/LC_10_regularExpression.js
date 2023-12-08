var isMatch = function(s, p) {
    return !!p.test(s);
};

let s = 'aa';
let p = /a/;
let result = isMatch(s, p);
console.log(result);
