
// function merge(a, b) {
//     if(a.length == 1 && b.length == 1) {
//         let mn = Math.min(a[0], b[0]);
//         let mx = Math.max(a[0], b[0]);

//     }
// }

// // function sortt(arr) {
// //     if(arr.length == 1)
// //         return 
// // }

// function mergeSort(arr) {
//     let l = 0, r = arr.length - 1;
//     let mid = l + (r-l)/2;
//     let left = arr.slice(l, mid);
//     let right = arr.slice(mid, r);

//     if(arr.length == 1)
//         return arr[0];
    
//     // 1- Sort the left half of the array 
//     mergeSort(left);

//     // 2- Sort the right half of the array
//     mergeSort(right);

//     // 3- Merge the two halves together
//     if(left[0] < right[0])
//         return mergeSort(left.concat(right));
//     else 
//         return mergeSort(right.concat(left));
// }





// function ms(arr) {
//     if(arr.length <= 1)
//         return arr;
    
//     const mid = Math.floor(arr.length/2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);

//     return merge(ms(left), ms(right));
// }


// function merge(left, right) {
//     const res = [];

//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             res.push(left.shift());
//         } else {
//             res.push(right.shift());
//         }
//     }

//     while(left.length) {
//         res.push(left.shift());
//     }

//     while(right.length) {
//         res.push(right.shift());
//     }

//     return res;
// }





function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result, ...left, ...right];
  }



let arr = [5, 2, 1, 3, 6, 4];

let sortedArr = mergeSort(arr);

console.log(arr);
console.log(sortedArr);