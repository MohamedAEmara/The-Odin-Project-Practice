
import { toBST } from './toBST';
import { Tree } from './tree';

function sortAndRemoveDuplicates(arr) {
    // Sort the array
    arr.sort(function (a, b) { return a - b });
    // remove duplicates
    let n = arr.length;
    let newArr = [];
    newArr.push(arr[0]);
    for(let i=1; i<n; i++) {
        if(arr[i] != arr[i-1])
            newArr.push(arr[i]);
    }

    // console.log(newArr);

    return newArr;
}


function buildTree(arr) {
    arr = sortAndRemoveDuplicates(arr);
    
    let root = toBST(arr, 0, arr.length-1);

    // prettyPrint(root);

    return root;
}


function disp(node) {
    if(node == null)
        return;

    this.disp(node.left);
    console.log(node.data);
    this.disp(node.right);

    return node;
}

let arr = [4, 5, 3, 4, 1, 23, 1, 4, 7, 8, 7];
console.log(arr);
arr = sortAndRemoveDuplicates(arr);
console.log(arr);
// buildTree(arr);
let tree = new Tree(arr);
tree.graph();
// console.log(tree.root);
tree.insert(77);
tree.insert(11);
// tree.insert(0);
tree.graph();

tree.delete(1);
tree.graph();

tree.delete(8);
tree.graph();

tree.delete(11);
tree.graph();


console.log(tree.find(77));
console.log(tree.find(1));
console.log(tree.find(23));