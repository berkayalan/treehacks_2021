const Migrations = artifacts.require("Migrations");

/*module.exports = function(deployer) {
  deployer.deploy(Migrations, {from: ''});
};*/

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
