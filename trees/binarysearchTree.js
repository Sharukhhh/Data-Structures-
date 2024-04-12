class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }

    // To add node to the binary tree
    insertNode(value) {
        const node = new TreeNode(value);

        if(!this.root) {
            this.root = node;

        } else {
            this.recursiveInserttion(this.root , node);
        }
    }


    // Recursively travels down to left and right to add node
    recursiveInserttion(rootNode , newNode) {
        if(newNode.value < rootNode.value) {

            if(rootNode.left === null) {
                rootNode.left = newNode;
            } else {
                this.recursiveInserttion(rootNode.left , newNode);
            }
        } else {

            if(rootNode.right === null) {
                rootNode.right = newNode;
            } else {
                this.recursiveInserttion(rootNode.right , newNode);
            }
        }
    }


// ...............................DEPTH FIRST SEARCH METHODS - STARTS..................................

    // 1-  Pre Order Traversal
    // left node , root node , right node
    preOrderTraversal(root) {
        if(root) {
            this.preOrderTraversal(root.left);
            console.log(root.value);
            this.preOrderTraversal(root.right);
        }
    }

    // 2- In Order Traversal (Values Appears in ascending order)
    // root node, left node, right node 
    inOrderTraversal(root) {
        if(root) {
            console.log(root.value);
            this.inOrderTraversal(root.left);
            this.inOrderTraversal(root.right);
        }
    }

    // 3- Post order Traversal 
    // left node, right node, root node
    postOrderTraversal(root) {
        if(root) {
            this.postOrderTraversal(root.left);
            this.postOrderTraversal(root.right);
            console.log(root.value);
        }
    }

// ...............................DEPTH FIRST SEARCH METHODS - COMPLETED..................................  


    // BREADTH FIRST SEARCH
    BFS() {
        const queue = [];
        queue.push(this.root);

        while(queue.length > 0) {
            const node = queue.shift();
            console.log(node.value);

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
        }
    }
}




const btree = new BST();

btree.insertNode(23);
btree.insertNode(9);
btree.insertNode(34);
btree.insertNode(12);
btree.insertNode(2);
btree.insertNode(50);

btree.BFS()
