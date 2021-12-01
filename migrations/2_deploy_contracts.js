var NFTStaking = artifacts.require("./NFTStaking.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTStaking, "Staking NFT Collection", "Staking");
};