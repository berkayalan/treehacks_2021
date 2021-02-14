const ReformTheNormMain = artifacts.require('C:/Users/dvaba/Documents/ReformTheNorm/Contracts/contracts/ReformTheNormMain.sol')

contract('ReformTheNormMain', ([deployer, author]) => {

    it('should return the name of the project upon deploy', async () => {
        const reformTheNormMain = await ReformTheNormMain.deployed();
      const result = reformTheNormMain.name;
      assert(result, 'Reform The Norm Main');
    });

    //Test Post Creation:
    describe('posts', async => {

        let reformTheNormMain, result, postCount;
        const hash = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb';
        const tags = 'Police Violence, BLM, Manifestaciones';

    before(async () => {

        reformTheNormMain = await ReformTheNormMain.deployed();
        result = await reformTheNormMain.uploadPost(hash, "This is some post text", 'false', 'Mexico', 'Defund The Police', tags, {from: author});
        postCount = await reformTheNormMain.postCount();

    });

    it('should upload a post', async () => {
        
        assert.equal(postCount, 1);
        //Display the post event:
        console.log(result.logs[0].args);

        //Blanck test:
        /*
         const result2 = await reformTheNormMain.uploadPost(hash, "", 'true', 'Colombia', 'BLM', tags, {from: author});
         console.log(result2.logs[0].args);*/

      });

    });

    //Test Movement Creation:
    describe('movements', async => {

        let reformTheNormMain, result, postCount;

    before(async () => {

        reformTheNormMain = await ReformTheNormMain.deployed();
        result = await reformTheNormMain.uploadMovement("BLM", "This is a movement description.", "www.example.com, www.example2.com, www.example3.com", {from: author});
        movementCount = await reformTheNormMain.movementCount();

    });

    it('should upload a post', async () => {
        
        assert.equal(movementCount, 1);
        //Display the post event:
        console.log(result.logs[0].args);

        //Blanck test:
        /*
         const result2 = await reformTheNormMain.uploadMovement("", "This is a movement description.", "www.example.com, www.example2.com, www.example3.com", {from: author});
         console.log(result2.logs[0].args);
        
         movementCount2 = await reformTheNormMain.movementCount();

         assert.equal(movementCount2, 2);*/

      });

    });

  });