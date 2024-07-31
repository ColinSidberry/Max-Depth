class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right); 

    return Math.max(leftDepth, rightDepth) + 1;
}



















function arrayToTreeNode(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (currentNode !== null) {
            if (i < arr.length && arr[i] !== null) {
                currentNode.left = new TreeNode(arr[i]);
                queue.push(currentNode.left);
            }
            i++;

            if (i < arr.length && arr[i] !== null) {
                currentNode.right = new TreeNode(arr[i]);
                queue.push(currentNode.right);
            }
            i++;
        }
    }

    return root;
}

function treeNodeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        if (currentNode === null) {
            result.push(null);
        } else {
            result.push(currentNode.val);
            queue.push(currentNode.left);
            queue.push(currentNode.right);
        }
    }

    // Trim trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

// Example usage:
let arr = [1,2,3,4,5,null,null];
let root = arrayToTreeNode(arr);
console.log("Original tree:", treeNodeToArray(root));

let invertedRoot = maxDepth(root);
console.log("Inverted tree:", treeNodeToArray(invertedRoot));