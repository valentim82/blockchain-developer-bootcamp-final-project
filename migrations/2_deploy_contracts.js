var NFTStaking = artifacts.require("./NFTStaking.sol");
//var Helper = artifacts.require("./NFTStaking.sol");

module.exports = function(deployer) {
  deployer.deploy(NFTStaking, "Staking NFT Collection", "Staking");
 // deployer.deploy(Helper);
};