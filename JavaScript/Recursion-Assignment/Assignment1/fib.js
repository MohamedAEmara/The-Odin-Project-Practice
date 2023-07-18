function fib(n) {
    let res = [];
    let one = 0, two = 1;
    if(n == 1)
    {
        res.push(one);
        return res;
    }
    
    res.push(one);
    res.push(two);

    for(let i=2; i<n; i++) {
        res.push(one + two);
        let tmp = one;
        one = two;
        two = two + tmp;
    }


    return res;
}


console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(8));



