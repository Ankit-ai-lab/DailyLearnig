function greedyAlgorithm(graph, start, goal) {
    // Priority Queue to store the current cost and the current node
    const pq = [{ node: start, cost: 0 }];
    const visited = new Set();
    
    while (pq.length > 0) {
        // Sort the priority queue to get the node with the least cost
        pq.sort((a, b) => a.cost - b.cost);
        const { node, cost } = pq.shift();  // Get the node with the least cost
        
        if (node === goal) {
            return cost;  // If we reach the goal, return the cost
        }
        
        if (visited.has(node)) {
            continue;
        }
        
        visited.add(node);
        
        // For every neighbor, add the edge to the priority queue
        if (graph[node]) {
            for (const [neighbor, weight] of graph[node]) {
                if (!visited.has(neighbor)) {
                    pq.push({ node: neighbor, cost: cost + weight });
                }
            }
        }
    }
    
    return Infinity;  // Return a large number if goal is unreachable
}

// Define the graph as adjacency list (node: [(neighbor, cost), ...])
const graph = {
    'start': [['A', 5], ['B', 2], ['C', 11]],
    'A': [['goal', 20]],
    'B': [['A', 4], ['goal', 25]],
    'C': [['goal', 17]],
    'goal': []
};

// Test the Greedy Algorithm
const startNode = 'start';
const goalNode = 'goal';
const greedyCost = greedyAlgorithm(graph, startNode, goalNode);
console.log(`Greedy Algorithm: The minimum cost is ${greedyCost}`);
