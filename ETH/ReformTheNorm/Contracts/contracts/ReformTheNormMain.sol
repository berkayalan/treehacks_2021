pragma solidity ^0.5.10;

contract ReformTheNormMain {
    
    string public name = "Reform The Norm Main";

    uint public postCount = 0;
    uint public movementCount = 0;

    mapping(uint => Post) public posts;

    mapping(uint => Movement) public movements;

    struct Post {

        uint id;
        string hash; //IPFS location
        string text;
        string trigcontent;
        string location;
        string mainmov;
        string tags;
        address author;

    }

    struct Movement {

        uint id;
        string name;
        string description;
        string links;
        address author;

    }

    event PostCreated(

        uint id,
        string hash,
        string text,
        string trigcontent,
        string location,
        string mainmov,
        string tags,
        address author

    );

    event MovementCreated (

        uint id,
        string name,
        string description,
        string links,
        address author

    );

    function uploadPost(string memory _imgHash, string memory _text, string memory _trigcontent, string memory _location, string memory _mainmov, string memory _tags) public{
        //Check for blank content:
        require(msg.sender != address(0x0));
        require(bytes(_text).length > 0);
        require(bytes(_trigcontent).length > 0);
        require(bytes(_location).length > 0);
        require(bytes(_mainmov).length > 0);
        
        //Increment Post Count:
        postCount ++;

        //Post creation:
        posts[postCount] = Post(postCount, _imgHash, _text, _trigcontent, _location, _mainmov, _tags, msg.sender);

        //Emit event:
        emit PostCreated(postCount, _imgHash, _text, _trigcontent, _location, _mainmov, _tags, msg.sender);

    }

    function uploadMovement(string memory _name, string memory _description, string memory _links) public {
        //Check for blanks content:
        require(msg.sender != address(0x0));
        require(bytes(_name).length > 0);
        require(bytes(_description).length > 0);
        require(bytes(_links).length > 0);

        movementCount ++;

        movements[movementCount] = Movement(movementCount, _name, _description, _links, msg.sender);

        emit MovementCreated(movementCount, _name, _description, _links, msg.sender);

    }

    
    
}
