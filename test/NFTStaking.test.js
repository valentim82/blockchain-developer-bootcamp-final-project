

const { assert } = require("chai");


const NFTStaking = artifacts.require("./NFTStaking.sol");

//const module = require('module');

contract("NFTStaking", async (accounts) => {
let  nftStaking,result, StakingCount;



beforeEach(async () => {
  nftStaking = await NFTStaking.deployed();
}); 

describe("Deployment", async () => {
  it("Should assert true", async () => {
   
      return assert.isTrue(true);
    });

  it("contract has an address", async () => {

    const address = await nftStaking.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("has a name", async () => {
    

    const name = await nftStaking.collectionName();
     
    assert.equal(name, "Staking NFT Collection");
  });

  it("has a symbol", async () => {
    
    const symbol = await nftStaking.collectionNameSymbol();
    assert.equal(symbol, "Staking");
  });
});

describe("application features", async () => {
  it("Initialize state ERC721 token", async () => {
    StakingCount = await nftStaking.nftStakingCounter();
    assert.equal(StakingCount.toNumber(), 0);

    let tokenExists;
    tokenExists = await nftStaking.getTokenExists(1, { from: accounts[0] });
    assert.equal(tokenExists, false);

    let tokenURIExists;
    tokenURIExists = await nftStaking.tokenURIExists(
      "https://gateway.pinata.cloud/ipfs/QmVg4ZKBHNrVEHHxn47ejBZa1QwqZPr1eTVXadmBh1BYWb?preview=1",
      { from: accounts[0] }
    );
    assert.equal(tokenURIExists, false);

    let tokenNameExists;
    tokenNameExists = await nftStaking.tokenNameExists("STAKINGNFT", {
      from: accounts[0],
    });
    assert.equal(tokenNameExists, false);
  });

  it("allows users to mint first ERC721 token", async () => {
 

    result = await nftStaking.mintStaking(
      "STAKINGNFT",
      "https://gateway.pinata.cloud/ipfs/QmVg4ZKBHNrVEHHxn47ejBZa1QwqZPr1eTVXadmBh1BYWb?preview=1",
      web3.utils.toWei("1", "Ether"),
      { from: accounts[0] }
    );

    StakingCount = await nftStaking.nftStakingCounter();
    assert.equal(StakingCount.toNumber(), 1);

    tokenExists = await nftStaking.getTokenExists(1, { from: accounts[0] });
    assert.equal(tokenExists, true);

    tokenURIExists = await nftStaking.tokenURIExists(
      "https://gateway.pinata.cloud/ipfs/QmVg4ZKBHNrVEHHxn47ejBZa1QwqZPr1eTVXadmBh1BYWb?preview=1",
      { from: accounts[0] }
    );
    assert.equal(tokenURIExists, true);

    tokenNameExists = await nftStaking.tokenNameExists("STAKINGNFT", {
      from: accounts[0],
    });
    assert.equal(tokenNameExists, true);


    let Staking;
    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.tokenId.toNumber(), 1);
    assert.equal(Staking.tokenName, "STAKINGNFT");
    assert.equal(
      Staking.tokenURI,
      "https://gateway.pinata.cloud/ipfs/QmVg4ZKBHNrVEHHxn47ejBZa1QwqZPr1eTVXadmBh1BYWb?preview=1"
    );
    assert.equal(Staking.mintedBy, accounts[0]);
    assert.equal(Staking.currentOwner, accounts[0]);
    assert.equal(
      Staking.previousOwner,
      0x0000000000000000000000000000000000000000
    );
    assert.equal(web3.utils.fromWei(Staking.price, "ether"), 1);
    assert.equal(Staking.numberOfTransfers.toNumber(), 0);
    assert.equal(Staking.forSale, true);
    
  });

  it("not allows users to mint ERC721 token  - same token uri -reject ", async () => {


    await nftStaking.mintStaking(
      "STAKINGNFT2",
      "https://gateway.pinata.cloud/ipfs/QmTggr8gpSqXP7sw6gaHica88pbicNZSCiMUBguJbvsMsF?preview=1",
      web3.utils.toWei("1", "Ether"),
      { from: accounts[1] }

    );

    try{
        // same token uri -reject
        await nftStaking.mintStaking(
          "STAKINGNFT3",
          "https://gateway.pinata.cloud/ipfs/QmTggr8gpSqXP7sw6gaHica88pbicNZSCiMUBguJbvsMsF?preview=1",
          web3.utils.toWei("1", "Ether"),
          { from: accounts[3] }
        );

    }catch (error) {
      assert.equal(error.reason, "Try to mint anoter NFT with the same URI");
    }

  });

  it("not allows users to mint 5th ERC721 token", async () => {

   await nftStaking.mintStaking(
      "STAKINGNFT5",
      "https://gateway.pinata.cloud/ipfs/QmNwM781AnDxbGmBJ7bpHuh2z3JALMNHgtpkbrbZrjy8tV?preview=1",
      web3.utils.toWei("1", "Ether"),
      { from: accounts[0] }
    );


    await nftStaking.mintStaking(
      "STAKINGNFT6",
      "https://gateway.pinata.cloud/ipfs/QmbddhPV4LZbo5hvCpKWW3bHAVX28bKRq6Qgpedp1zuQY9?preview=1",
      web3.utils.toWei("1", "Ether"),
      { from: accounts[0] }
    );



    // same token name - reject
    try{

        await nftStaking.mintStaking(
        "STAKINGNFT6",
        "https://gateway.pinata.cloud/ipfs/QmVQybBSbQftJ3GzrpY7oZxp49VnyVHQrAVWeb5yuE2Yrb?preview=1",
        web3.utils.toWei("1", "Ether"),
        { from: accounts[0] }
      );
    }catch(error){
      assert.equal(error.reason, "Try to mint NFT with the same name");
    }

  });  

  it("returns address of the token's owner", async () => {
    const tokenOwner = await nftStaking.getTokenOwner(2);
    assert.equal(tokenOwner, accounts[1]);
  });

  // returns tokenURI of the token
  it("returns metadata of a token", async () => {
    
   const tokenMetaData = await nftStaking.getTokenMetaData(2);
    assert.equal(
      tokenMetaData,
      "https://gateway.pinata.cloud/ipfs/QmTggr8gpSqXP7sw6gaHica88pbicNZSCiMUBguJbvsMsF?preview=1"
    );
  });

  it("returns total number of tokens minted so far", async () => {
    const totalNumberOfTokensMinted = await nftStaking.getNumberOfTokensMinted();
    assert.equal(totalNumberOfTokensMinted.toNumber(), 4); 
  });

  it("returns total number of tokens owned by an address", async () => {
    const totalNumberOfTokensOwnedByAnAddress = await nftStaking.getTotalNumberOfTokensOwnedByAnAddress(
      accounts[0]
    );
    assert.equal(totalNumberOfTokensOwnedByAnAddress.toNumber(), 3); 
  });
  it("allows users to stake token STAKINGNFT2 ", async () => {

    // save original NFT token
    let originalTokenOwner = await nftStaking.getTokenOwner(2);
    console.log("original NFT token owner: " + originalTokenOwner );

    await nftStaking.createStake(2, { from: accounts[1] }
      );
    // save new NFT token
     let newTokenOwner = await nftStaking.getTokenOwner(2);
     console.log("New NFT token owner: " + newTokenOwner );
     assert.notEqual(originalTokenOwner,newTokenOwner);
  });
  it("allows users to remove stake token STAKINGNFT2 ", async () => {

    // save original NFT token
    let originalTokenOwner = await nftStaking.getTokenOwner(2);
    console.log("original NFT token owner: " + originalTokenOwner );

    await nftStaking.removeStake(2, { from: accounts[1] }
      );
    // save new NFT token
    let newTokenOwner = await nftStaking.getTokenOwner(2);
    console.log("New NFT token owner: " + newTokenOwner );
    assert.notEqual(originalTokenOwner,newTokenOwner);
  });

  it("allows users to stake token STAKINGNFT ", async () => {

    // save original NFT token
    let originalTokenOwner = await nftStaking.getTokenOwner(1);
    console.log("original NFT token owner: " + originalTokenOwner );

    await nftStaking.createStake(1, { from: accounts[0] }
      );
    // save new NFT token
     let newTokenOwner = await nftStaking.getTokenOwner(1);
     console.log("New NFT token owner: " + newTokenOwner );
     assert.notEqual(originalTokenOwner,newTokenOwner);
  });



   it("try to to remove stake nft STAKINGNFT using a diffeterent user, who is not the original owner  ", async () => {

    // save original NFT token
    let originalTokenOwner = await nftStaking.getTokenOwner(1);
    console.log("original NFT token owner: " + originalTokenOwner );
    try {
      await nftStaking.removeStake(1, { from: accounts[1] }
        );

    }catch (error) {
      assert.equal(error.reason, "Try to remove the stake with a different users");
    }
    // save new NFT token
    let newTokenOwner = await nftStaking.getTokenOwner(1);
    assert.equal(originalTokenOwner,newTokenOwner);
    console.log("New NFT token owner: " + newTokenOwner );
  });

  it("allows users to remove stake token STAKINGNFT ", async () => {

    // save original NFT token
    let originalTokenOwner = await nftStaking.getTokenOwner(1);
    let original = await nftStaking.getOriginalOwner(1);
    console.log("original NFT token owner: " + originalTokenOwner );
    

    await nftStaking.removeStake(1, { from: accounts[0] }
      );
    // save new NFT token
    let newTokenOwner = await nftStaking.getTokenOwner(1);
   
    console.log("New NFT token owner: " + newTokenOwner );
    assert.notEqual(originalTokenOwner,newTokenOwner);
    assert.equal(original,newTokenOwner);
  })
 
  it("allows users to buy token for specified ethers", async () => {
    
    
    const oldTokenOwner = await nftStaking.getTokenOwner(1);
    assert.equal(oldTokenOwner, accounts[0]);

    let oldTokenOwnerBalance;
    oldTokenOwnerBalance = await web3.eth.getBalance(accounts[0]);
    oldTokenOwnerBalance = new web3.utils.BN(oldTokenOwnerBalance);

    let oldTotalNumberOfTokensOwnedBySeller;
    oldTotalNumberOfTokensOwnedBySeller = await nftStaking.getTotalNumberOfTokensOwnedByAnAddress(
      accounts[0]
    );
    assert.equal(oldTotalNumberOfTokensOwnedBySeller.toNumber(), 3); 

    let Staking;
    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.numberOfTransfers.toNumber(), 0);

    result = await nftStaking.buyToken(1, {
      from: accounts[2],
      value: web3.utils.toWei("1", "Ether"),
    });

    const newTokenOwner = await nftStaking.getTokenOwner(1);
    assert.equal(newTokenOwner, accounts[2]);

    let newTokenOwnerBalance;
    newTokenOwnerBalance = await web3.eth.getBalance(accounts[0]);
    newTokenOwnerBalance = new web3.utils.BN(newTokenOwnerBalance);

    let newTotalNumberOfTokensOwnedBySeller;
    newTotalNumberOfTokensOwnedBySeller = await nftStaking.getTotalNumberOfTokensOwnedByAnAddress(
      accounts[0]
    );
    assert.equal(newTotalNumberOfTokensOwnedBySeller.toNumber(), 2);

    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.numberOfTransfers.toNumber(), 1);

    let price;
    price = web3.utils.toWei("1", "Ether");
    price = new web3.utils.BN(price);

    const exepectedBalance = oldTokenOwnerBalance.add(price);
    assert.equal(
      newTokenOwnerBalance.toString(),
      exepectedBalance.toString()
    );

    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.currentOwner, accounts[2]);

  });
  
  
  it("allows users to change token price", async () => {
    let StakingPrice;
    StakingPrice = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(web3.utils.fromWei(StakingPrice.price, "ether"), 1);
    const newTokenOwner = await nftStaking.getTokenOwner(1);
  
    result = await nftStaking.changeTokenPrice(
      1,
      web3.utils.toWei("2", "Ether"),
      {
        from: accounts[2],
      }
    );

    StakingPrice = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(web3.utils.fromWei(StakingPrice.price, "ether"), 2);

  }); 

  it("allows users to toggle between setting the token for sale or not for sale", async () => {
    let Staking;
    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.forSale, true);

    result = await nftStaking.toggleForSale(1, { from: accounts[2] });

    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.forSale, false);

    result = await nftStaking.toggleForSale(1, { from: accounts[2] });

    Staking = await nftStaking.allNFTStaking(1, {
      from: accounts[0],
    });
    assert.equal(Staking.forSale, true);

  }); 
});
});