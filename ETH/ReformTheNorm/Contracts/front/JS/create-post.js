var contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "links",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "sender",
        "type": "string"
      }
    ],
    "name": "MovementCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "text",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "trigcontent",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "mainmov",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "tags",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "sender",
        "type": "string"
      }
    ],
    "name": "PostCreated",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "movementCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "movements",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "links",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sender",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "postCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "posts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "hash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "text",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "trigcontent",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "mainmov",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "tags",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sender",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_imgHash",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_text",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_trigcontent",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_mainmov",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_tags",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_sender",
        "type": "string"
      }
    ],
    "name": "uploadPost",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_links",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_sender",
        "type": "string"
      }
    ],
    "name": "uploadMovement",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      }
    ],
    "name": "getPost",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "hash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "text",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "trigcontent",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mainmov",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tags",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sender",
            "type": "string"
          }
        ],
        "internalType": "struct ReformTheNormAlt.Post",
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      }
    ],
    "name": "getMovement",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "links",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sender",
            "type": "string"
          }
        ],
        "internalType": "struct ReformTheNormAlt.Movement",
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPostCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMovementCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
var contractAddress = '0xA30Cc6685d7189682b3AB09a839939fC5a2d4eeb';

const web3 = new Web3('https://eth-ropsten.alchemyapi.io/v2/####');

/*
if (window.ethereum) {
  ethereum
    .enable()
    .then(accounts => {
      // Metamask is ready to go!
    })
    .catch(reason => {
      // Handle error. Likely the user rejected the login.
    });
} else {
  // The user doesn't have Metamask installed.
  alert("You need metamask to post!");
}*/

//Pointer to deployed instance on the blockchain:
var ReformTheNormMain = new web3.eth.Contract(contractABI, contractAddress);
console.log(ReformTheNormMain)

async function createPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender) {
  const nonce = await web3.eth.getTransactionCount('', 'latest'); // get latest nonce
  web3.eth.getBalance("").then(console.log);
  const gasEstimate = await ReformTheNormMain.methods.uploadPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender).estimateGas(); // estimate gas

  console.log(gasEstimate);
  // Create the transaction
  const tx = {
    'from': '',
    'to': contractAddress,
    'nonce': nonce,
    'gas': web3.utils.toHex(gasEstimate), 
    'data': ReformTheNormMain.methods.uploadPost(imgHash, postText, Trigcontent, location, mainmov, tags, sender).encodeABI()
  };

  console.log('It gets here...');

  // Sign the transaction
  const signPromise = web3.eth.accounts.signTransaction(tx, '');
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
  var post1 = await ReformTheNormMain.methods.getPost(1);
  console.log(post1);
  var postCounter = await ReformTheNormMain.methods.getPostCount();
  console.log(postCounter);

}

main();
const hash1 = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb';
const tags = 'Police Violence, BLM, Manifestaciones';
createPost(hash1, "This is some post text", 'false', 'Mexico', 'Defund The Police', tags, 'Tester_01');
