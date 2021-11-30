var CryptoBoys = artifacts.require("./CryptoBoys.sol");

module.exports = function(deployer) {
  deployer.deploy(CryptoBoys, "Crypto Boys Collection", "CB");
};
  