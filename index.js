const Blockchain = require("./blockchain");
const Block = require("./block");

let myBlockchain = new Blockchain();

console.log("Mining Block 1...");
myBlockchain.addBlock(
  new Block(1, "17/05/2026", {
    sender: "Komal",
    receiver: "Dishu",
    amount: 100
  })
);

console.log("Mining Block 2...");
myBlockchain.addBlock(
  new Block(2, "17/05/2026", {
    sender: "A",
    receiver: "B",
    amount: 500
  })
);

console.log(JSON.stringify(myBlockchain, null, 4));

console.log("Is Blockchain Valid?");
console.log(myBlockchain.isChainValid());