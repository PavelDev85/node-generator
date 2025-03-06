const fs = require("fs");

const NODE_COUNT = 100000;

const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
  id: `n${i}`,
  label: `Node ${i}`,
  x: Math.random() * 1000,
  y: Math.random() * 1000,
  size: Math.random() * 5 + 1,
  color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
}));

const EDGE_COUNT = NODE_COUNT * 2;
const edges = Array.from({ length: EDGE_COUNT }, (_, i) => ({
  id: `e${i}`,
  source: `n${Math.floor(Math.random() * NODE_COUNT)}`,
  target: `n${Math.floor(Math.random() * NODE_COUNT)}`,
  color: "#ccc",
}));

const graphData = { nodes, edges };

fs.writeFileSync("graph.json", JSON.stringify(graphData));

console.log("Graph data generated: graph.json");
