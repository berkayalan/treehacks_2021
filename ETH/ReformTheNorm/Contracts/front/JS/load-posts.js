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
  
  //Pointer to deployed instance on the blockchain:
  var ReformTheNormMain = new web3.eth.Contract(contractABI, contractAddress);
  console.log(ReformTheNormMain)
  
  async function main() {
    var postCounter = await ReformTheNormMain.methods.postCount().call()
    console.log(postCounter);

    for (i = 1; i <= postCounter; i++){

        ReformTheNormMain.methods.posts(i).call().then(result => {
            console.log(result);

            const postCont = document.getElementById('divDisplay');

            var postDiv = document.createElement('div');
            postDiv.className = 'post';

            var headDiv = document.createElement('div');
            headDiv.className = 'userContainer';

            var profileDiv = document.createElement('div');
            profileDiv.className = 'pictureButton';
            profileDiv.innerHTML = '<button class="pictureButton"><img class="userPicture" src="Usuario.jpg"></button>';

            var usernameDiv = document.createElement('div');
            usernameDiv.className = 'usernameContianer';
            usernameDiv.innerHTML = "<p class='username'>" + result.sender + "</p><p class='geo'>Movement Location: " + result.location + "</p>";

            var moreOptions = '<div class="moreInfoPostButton">...</div>';

          });

    }
  
  }

  /*
  document.addEventListener('DOMContentLoaded', () => {
    ReformTheNormMain.methods.getPost(1).call().then(result => {
      console.log(result);
    });
  });*/
  
  main();
  