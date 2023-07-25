//  =========== Sorted Array to (Balanced BST) =========== //

// Arr = {1, 2, 3, 4}

// Balanced BST:
/*
        3
      /  \
     2    4
    /
   1      

*/

/*
    The idea is to find the middle element of the array and make it the root of the tree, 
    then perform the same operation on the left subarray for the root’s left child 
    and the same operation on the right subarray for the root’s right child.
*/

// 1- Set the middle element of the array as the root
// 2- Recursively do the same for the left & right half
//         - Get the middle of the left half and make it the left child of the root created in step 1
//         - Get the middle of the right half and make it the right child of the root created in step 1
// 3- Print the PreOrder of the tree


class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function sortedArrayToBST(arr, start, end) {
    if(start > end)
        return null;
    
    let mid = parseInt(start + end) / 2;
    let node = new Node(arr[mid]);

    node.left = sortedArrayToBST(arr, start, mid-1);
    node.right = sortedArrayToBST(arr, mid+1, end);
    
    return node;
}


function PreOrder(node) {
    if(node == null)
        return;
    console.log(node.data + " ");
    PreOrder(node.left);
    PreOrder(node.right);
}


let arr = [1, 2, 3, 4, 5, 6, 7];

let n = arr.length;

root = sortedArrayToBST(arr, 0, n-1);

PreOrder(root);       // 4  2  1  3  6  5  7



////////// Approach Two (Using Queue "Iterative") ////////////////////


// 1- First initialize a queue with a root node and loop until the queue is empty
// 2- Remove first node from the queue and find mid element of the sorted array
// 3- Create new node with previously find middle node and set left child to the dequeu node left child if present and also set 
//    the right child with queu node right child. Enqueue the new node onto the queue. Set the right child of the dequeued node to the middle element 
//    on the left side of the sorted array. If the dequeued node has a left child, enqueue it onto the queue. Return the root node.



function toBST(nums) {
    if(nums.length === 0)
        return null;
    
    let mid = Math.floor(nums.length / 2);
    let root = new Node(nums[mid]);

    // initialize the queue..
    const q = [[root, [0, mid-1]], [root, [mid+1, nums.length-1]]];

    while(q.length > 0) {
        const [parent, [left, right]] = q.shift();

        // if there are elements to process and parent node is not null
        if(left <= right && parent != null) {
            const mid = Math.floor((left + right) / 2);
            const child = new Node(nums[mid]);

            // set the child node as left or right child of the parent node
            if(nums[mid] < parent.data) {
                parent.left = child;
            } else {
                parent.right = child;
            }

            // push the left & right child and their indices to the queue 
            q.push([child, [left, mid - 1]]);
            q.push([child, [mid+1, right]]);
        }
    }

    return root;
}


// Source Code & Explanation:
// https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/

function printBST(root) {
    if(root === null)
        return;
    
    
    console.log(root.data + " ");
    printBST(root.left);
    printBST(root.right);
}


const nums = [1, 2, 3, 4, 5, 6, 7];

root = toBST(nums);

printBST(root);     // 4  2  1  3  6  5  7