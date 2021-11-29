var FactoryNFT = artifacts.require("./FactoryNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(FactoryNFT);
};