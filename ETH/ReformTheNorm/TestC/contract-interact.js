require('dotenv').config({path: "C:/Users/dvaba/Documents/ReformTheNorm/Contracts/seed.env"});
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//Add ABI:
const contract = require("C:/Users/dvaba/Documents/ReformTheNorm/Contracts/build/contracts/HelloWorld.json");
//console.log(JSON.stringify(contract.abi));

const contractAddress = "0x7651E42c6E95A614705c52D489813e8f35AF4f8b";
const helloWorldContract = new web3.eth.Contract(contract.abi, contractAddress);

async function updateMessage(newMessage) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
    const gasEstimate = await helloWorldContract.methods.update(newMessage).estimateGas(); // estimate gas

    // Create the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': gasEstimate, 
      'data': helloWorldContract.methods.update(newMessage).encodeABI()
    };

    // Sign the transaction
    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!"); //
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });

}

async function main() {
    const message = await helloWorldContract.methods.message.call();
    console.log("The message is: " + message);

    //await updateMessage("Hello Drupe!");

}

main();