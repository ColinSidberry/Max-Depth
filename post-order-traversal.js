function maxDepth(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}







class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToTreeNode(arr) {
    if (arr.length === 0 || arr[0] === null) {
        return null;
    }

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const currentNode = queue.shift();

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

// Example usage:
const arr = [3, 9, 20, null, null, 15, 7];

// Convert array to TreeNode
const root = arrayToTreeNode(arr);

console.log("Original tree:", arr);

const depth = maxDepth(root);
console.log("depth: ", depth); // Output: 3
