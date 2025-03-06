const fs = require("fs"); // For saving the file (Node.js only)

// Number of nodes
const NODE_COUNT = 100000;

// Generate nodes
const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
  id: `n${i}`,
  label: `Node ${i}`,
  x: Math.random() * 1000, // Random X position
  y: Math.random() * 1000, // Random Y position
  size: Math.random() * 5 + 1, // Node size between 1 and 6
  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
}));

// Generate random edges (Optional: change EDGE_COUNT)
const EDGE_COUNT = NODE_COUNT * 2; // 50% of nodes will have edges
const edges = Array.from({ length: EDGE_COUNT }, (_, i) => ({
  id: `e${i}`,
  source: `n${Math.floor(Math.random() * NODE_COUNT)}`,
  target: `n${Math.floor(Math.random() * NODE_COUNT)}`,
  color: "#ccc",
}));

// Combine data
const graphData = { nodes, edges };

// Save to file (Node.js only)
fs.writeFileSync("graph.json", JSON.stringify(graphData));

console.log("Graph data generated: graph.json");
