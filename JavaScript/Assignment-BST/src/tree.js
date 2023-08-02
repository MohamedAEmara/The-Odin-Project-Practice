import { prettyPrint } from "./prettyPrint";
import { Node } from './node';
import { toBST } from './toBST';

// const { toBST } = require("./toBST");




class Tree {
    constructor(arr) {
        console.log("before");
        this.root = toBST(arr, 0, arr.length-1);
        console.log("after");
    }

    insert(val, node = this.root) {
        if(node == null || node.data == val) {
            console.log(node);
            node = new Node(val);
            return node;   
        }

        if(parseInt(val) > parseInt(node.data)) {
            node.right = this.insert(val, node.right);
        } else {
            node.left = this.insert(val, node.left);
        }

        return node;
    }

    delete(val, node = this.root) {
        // Base Case:
        if(node == null) {
            return node;
        }

        // Recursivle calls for ancestors of node to be deleted.
        if(node.data > val) {
            node.left = this.delete(val, node.left);
            return node;
        } else if(node.data < val) {
            node.right = this.delete(val, node.right);
            return node;
        }

        // We reach here if the node is the node to be deleted..

        // There are more than one scenario 
        // 1- if the node has just one child
        // make the node points to its right or left child
        if(node.left == null && node.right != null) {
            node = node.right;
            return node;
        }
        if(node.right == null && node.left != null) {
            node = node.left;
            return node;
        }

        // 2- If the node has two children
        // Now, we have to replace the value of the node we want to remove with the 
        // value of tis successor (the smallest value in the right sub tree)
        // Then, Delete the successor node instead of the original node you want to remove       

        if(node.right != null && node.left != null) {
            const successor = this.findSuccessor(node.right);
            node.data = successor.data;
            node.right = this.delete(successor.data, node.right);
            
            return node;
        }

    }


    find(val) {
        let node = this.root;
        while(node != null && node.data != val) {
            if(val > node.data) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        return node;
    }


    graph() {
        console.log(this.root);
        prettyPrint(this.root);
    }

    findSuccessor(root) {
        let node = root;
        while (node.left != null) {
          node = node.left;
        }
        return node;
    }

    levelOrder(root) {
        // Traverse the Tree in BFS
        if(root == null) 
            return null;
        
    }

    
}



export { Tree };