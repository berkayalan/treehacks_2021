require('dotenv').config({path: "C:/Users/dvaba/Documents/ReformTheNorm/Contracts/seed.env"});
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//Add ABI:
const contract = require("C:/Users/dvaba/Documents/ReformTheNorm/Contracts/build/contracts/ReformTheNormAlt.json");
//console.log(JSON.stringify(contract.abi));

const contractAddress = "0xA30Cc6685d7189682b3AB09a839939fC5a2d4eeb";
const ReformTheNormMain = new web3.eth.Contract(contract.abi, contractAddress);

async function createPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // get latest nonce
    const gasEstimate = await ReformTheNormMain.methods.uploadPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender).estimateGas(); // estimate gas

    // Create the transaction
    const tx = {
      'from': PUBLIC_KEY,
      'to': contractAddress,
      'nonce': nonce,
      'gas': gasEstimate, 
      'data': ReformTheNormMain.methods.uploadPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender).encodeABI()
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


/*async function main() {
  const posts = await ReformTheNormMain.methods.posts();
  console.log(posts);

}*/

//main();

const hash = 'https://ipfs.io/ipfs/Qmd25TDv3ik15HwGuk2Hx7aPkZpEzVPFxGd3W7Kdspkoyz?filename=201911us_lgbt_rights.jpg';
const tags = 'LGBTQ+, Gay Rights, Marriage, Rights';
createPost(hash, "People around the world face violence and inequality—and sometimes torture, even execution—because of who they love, how they look, or who they are. Sexual orientation and gender identity are integral aspects of our selves and should never lead to discrimination or abuse. Human Rights Watch works for lesbian, gay, bisexual, and transgender peoples' rights, and with activists representing a multiplicity of identities and issues.", 'false', 'Colombia', 'Gay Rights', tags, 'User55');