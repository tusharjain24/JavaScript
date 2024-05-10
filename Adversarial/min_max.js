class Node {
    constructor(value, depth, maximizingPlayer) {
        this.value = value;
        this.depth = depth;
        this.maximizingPlayer = maximizingPlayer;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

function minimax(node, depth, maximizingPlayer) {
    if (depth === 0 || node.children.length === 0) {
        return node.value;
    }

    if (maximizingPlayer) {
        let bestValue = -Infinity;
        for (let child of node.children) {
            let value = minimax(child, depth - 1, false);
            bestValue = Math.max(bestValue, value);
        }
        return bestValue;
    } else {
        let bestValue = Infinity;
        for (let child of node.children) {
            let value = minimax(child, depth - 1, true);
            bestValue = Math.min(bestValue, value);
        }
        return bestValue;
    }
}

// Create a simple perfect binary tree
let root = new Node(3, 0, false);//True=maximizing Player
let child1 = new Node(5, 1, true);//=minimizing Player
let child2 = new Node(2, 1, true);
let grandchild1 = new Node(9, 2, false);
let grandchild2 = new Node(7, 2, false);
let grandchild3 = new Node(1, 2, false);
let grandchild4 = new Node(8, 2, false);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);
child2.addChild(grandchild3);
child2.addChild(grandchild4);

// Calculate the optimal value using Minimax
let optimalValue = minimax(root, 3, true);
console.log("Optimal Value:", optimalValue);