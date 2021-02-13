async function main() {
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3("");
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("The latest block number is " + blockNumber);
   }
   main();  