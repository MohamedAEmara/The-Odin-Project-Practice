import { Node } from './node';


function toBST(arr, start, end) {
    if(start > end) {
        return null;
    }

    let mid = Math.floor((start + end) / 2);

    let node = new Node(arr[mid]);

    node.left = toBST(arr, start, mid-1);
    node.right = toBST(arr, mid+1, end);

    return node;
}


export { toBST };