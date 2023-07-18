function fibRec(n, sequence = [0, 1]) {
    if(n <= sequence.length)
        return sequence.slice(0, n);
    
    const newNumber = sequence.at(-1) + sequence.at(-2);
    return fibRec(n, sequence.concat(newNumber));
}

console.log(fibRec(8));

