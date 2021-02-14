pragma solidity ^0.5.10;
pragma experimental ABIEncoderV2;

contract ReformTheNormAlt {
    
    string public name = "Reform The Norm Main";

    uint public postCount = 0;
    uint public movementCount = 0;

    struct Post {

        uint id;
        string hash; //IPFS location
        string text;
        string trigcontent;
        string location;
        string mainmov;
        string tags;
        string sender;

    }

    struct Movement {

        uint id;
        string name;
        string description;
        string links;
        string sender;

    }

    event PostCreated (

        uint id,
        string hash,
        string text,
        string trigcontent,
        string location,
        string mainmov,
        string tags,
        string sender

    );

    event MovementCreated (

        uint id,
        string name,
        string description,
        string links,
        string sender

    );

    mapping(uint => Post) public posts;

    mapping(uint => Movement) public movements;

    function uploadPost(string memory _imgHash, string memory _text, string memory _trigcontent, string memory _location, string memory _mainmov, string memory _tags, string memory _sender) public{
        
        //Increment Post Count:
        postCount = postCount + 1;

        //Post creation:
        posts[postCount] = Post(postCount, _imgHash, _text, _trigcontent, _location, _mainmov, _tags, _sender);

        //Emit event:
        emit PostCreated(postCount, _imgHash, _text, _trigcontent, _location, _mainmov, _tags, _sender);

    }

    function uploadMovement(string memory _name, string memory _description, string memory _links, string memory _sender) public {

        movementCount = movementCount + 1;

        movements[movementCount] = Movement(movementCount, _name, _description, _links, _sender);

        emit MovementCreated(movementCount, _name, _description, _links, _sender);

    }

    function getPost(uint _key) view public returns(Post memory) {
        
        return posts[_key];
    
    }

    function getMovement(uint _key) view public returns(Movement memory) {
        
        return movements[_key];
    
    }

    function getPostCount() view public returns(uint) {

        return postCount;

    }

    function getMovementCount() view public returns(uint) {

        return movementCount;

    }
    
}
