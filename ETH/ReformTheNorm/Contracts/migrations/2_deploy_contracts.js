//const ConvertLib = artifacts.require("ConvertLib");
//const MetaCoin = artifacts.require("MetaCoin");

const ReformTheNormMain = artifacts.require("ReformTheNormMain");
//const initMessage = "Hello world!";

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
  //deployer.deploy(HelloWorld, initMessage);
    deployer.deploy(ReformTheNormMain);
};