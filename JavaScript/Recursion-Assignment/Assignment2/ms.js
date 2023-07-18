function mergeSort(arr) {
    if(arr.length === 1)
        return arr;
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}


function merge(l, r) {
    let i = 0;
    let j = 0;

    let res = [];

    while(i < l.length && j < r.length) {
        if(l[i] < r[j]) {
            res.push(l[i]);
            i ++;
        } else {
            res.push(r[j]);
            j ++;
        }
    }
    
    while(i < l.length) {
        res.push(l[i]);
        i ++;
    } 

    while(j < r.length) {
        res.push(r[j]);
        j ++;
    }
    
    return res;
}

let arr = [5, 2, 1, 3, 6, 4];

console.log(mergeSort(arr));