// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// import ERC721 and Ownable interfaces

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/// @title Contract for manipulate NFT
/// @author Tulio Valentim
/// @notice Allows a user to mint, satke, sell and buy NFT
/// @notice This is an experimental contract.

// NFTStaking smart contract inherits ERC721 interface
contract NFTStaking is ERC721URIStorage,Ownable  {
  
   /// @notice Emitted when a new nft is minted
  /// @param nftStakingCounter number of nft minted
  /// @param message sucess message
  event LogMint(uint nftStakingCounter, string message); 

  /// @notice Emitted when a nft is staked
  /// @param tokenOwner original token owner
  /// @param message sucess message
  event LogStaking(address tokenOwner,string message);
      

  /// @notice this contract's token collection name
  string public  collectionName;
  /// @notice this contract's token symbol
  string public  collectionNameSymbol;
  /// @notice total number of nfts minted
  uint256 public nftStakingCounter;
  
  /// @notice We usually require to know who are all the stakeholders.
  address[] internal stakeholders;
  
  /// @notice The stakes for each stakeholder.
  mapping(address => uint256[]) internal stakes;
 
   
  /// @notice The accumulated rewards for each stakeholder.
   
     mapping(address => uint256) internal rewards;

     uint256[] internal nft;

 


  event collectoinNameEvent(string _name);

  /// @notice define crypto boy struct
   struct Staking {
    uint256 tokenId;
    string tokenName;
    string tokenURI;
    address payable mintedBy;
    address payable currentOwner;
    address payable previousOwner;
    bool staked;
    uint256 price;
    uint256 numberOfTransfers;
    bool forSale;
  }


  /// @notice map staking's token id to each nft
  mapping(uint256 => Staking) public allNFTStaking;
  /// @notice check if token name exists
  mapping(string => bool) public tokenNameExists;
  /// @notice check if token URI exists
  mapping(string => bool) public tokenURIExists;

  /// @notice initialize contract while deployment with contract's collection name and token
  
  constructor(string memory _name, string memory _symbol) ERC721("Staking NFT Collection", "Staking")
  {
    collectionName = _name;
   
    collectionNameSymbol = _symbol; 
  } 


  /// @notice mint a new nft using the safeMint @ERC721 
  /// @param _name name of the the new nft minted
  /// @param _tokenURI link with the image is stored 
  /// @param _price price to the nft minted
  function mintStaking(string memory _name, string memory _tokenURI, uint256 _price) public {
    // check if thic fucntion caller is not an zero address account
    require(msg.sender != address(0),"Try to mint NFT with 0x0 adress");
    // increment counter
    nftStakingCounter ++;
    // check if a token exists with the above token id => incremented counter
    require(!_exists(nftStakingCounter));

    // check if the token URI already exists or not
    require(!tokenURIExists[_tokenURI],"Try to mint anoter NFT with the same URI");
    // check if the token name already exists or not
    require(!tokenNameExists[_name], "Try to mint NFT with the same name");

    // mint the token
    _safeMint(msg.sender, nftStakingCounter);
    // set token URI (bind token id with the passed in token URI)
    _setTokenURI(nftStakingCounter, _tokenURI);

   
    // make passed token URI as exists
    tokenURIExists[_tokenURI] = true;
    // make token name passed as exists
    tokenNameExists[_name] = true;

    // creat a new nft (struct) and pass in new values
    address payable zero  = payable (address(0));
    address payable sender  = payable (msg.sender);
    Staking memory newStaking = Staking(
    nftStakingCounter,
    _name,
    _tokenURI,
    sender,
    sender,
    zero,
    false,
    _price,
    0,
    true);
    // add the token id and it's struct to all nft mapping
    allNFTStaking[nftStakingCounter] = newStaking;

    emit LogMint(nftStakingCounter, "Success Mint");
  }

 
  /// @notice get owner of the token
  /// @param _tokenId nft id
  function getTokenOwner(uint256 _tokenId) public view returns(address) {
    address _tokenOwner = ownerOf(_tokenId);
    return _tokenOwner;
  }

  
  /// @notice get metadata of the toke
  /// @param _tokenId nft id
  function getTokenMetaData(uint _tokenId) public view returns(string memory) {
    string memory tokenMetaData = tokenURI(_tokenId);
    //Staking memory staking = allNFTStaking[_tokenId];
    return (tokenMetaData);
  }
  
  /// @notice get name of the token
  /// @param _tokenId nft id
  function getTokenName(uint _tokenId) public view returns(string memory) {
    //string memory tokenMetaData = tokenURI(_tokenId);
    Staking memory staking = allNFTStaking[_tokenId];
    return (staking.tokenName);
  }

 
  /// @notice return if a token is staking or not
  /// @param _tokenId nft id
  function getOriginalOwner(uint _tokenId) public view returns(address) {
    
    Staking memory staking = allNFTStaking[_tokenId];
    return (staking.currentOwner);

    
  }

  /// @notice get price of the token
  /// @param _tokenId nft id
  function getTokenPrice(uint _tokenId) public view returns(uint256) {
    //string memory tokenMetaData = tokenURI(_tokenId);
    Staking memory staking = allNFTStaking[_tokenId];
    return (staking.price);
  }

  /// @notice get total number of tokens minted so far
  function getNumberOfTokensMinted() public view returns(uint256) {
    uint256 totalNumberOfTokensMinted = nftStakingCounter;
    return totalNumberOfTokensMinted;
  }

  /// @notice get total number of tokens owned by an address
  /// @param _owner nft ownwer address
  function getTotalNumberOfTokensOwnedByAnAddress(address _owner) public view returns(uint256) {
    uint256 totalNumberOfTokensOwned = balanceOf(_owner);
    return totalNumberOfTokensOwned;
  }

  
  /// @notice check if the token already exists
  /// @param _tokenId nft id
  function getTokenExists(uint256 _tokenId) public view returns(bool) {
    bool tokenExists = _exists(_tokenId);
    return tokenExists;
  }


  
   /// @notice  buy a token by passing in the token's id
  /// @param _tokenId nft id
  function buyToken(uint256 _tokenId) public payable {
    // check if the function caller is not an zero account address
    require(msg.sender != address(0),"Buy nft with user 0x00");
    // check if the token id of the token being bought exists or not
    require(_exists(_tokenId));
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // token's owner should not be an zero address account
    require(tokenOwner != address(0));
    // the one who wants to buy the token should not be the token's owner
    require(tokenOwner != msg.sender);
    // get that token from all crypto NFT mapping and create a memory of it defined as (struct => Staking)
    Staking memory staking = allNFTStaking[_tokenId];
    // price sent in to buy should be equal to or more than the token's price
    require(msg.value >= staking.price);
    // token should be for sale
    require(staking.forSale);
    // transfer the token from owner to the caller of the function (buyer)
    _transfer(tokenOwner, msg.sender, _tokenId);
    // get owner of the token
    address payable sendTo = staking.currentOwner;
    // send token's worth of ethers to the owner
    sendTo.transfer(msg.value);
    // update the token's previous owner
    staking.previousOwner = staking.currentOwner;
    // update the token's current owner
    staking.currentOwner = payable (msg.sender);
    // update the how many times this token was transfered
    staking.numberOfTransfers += 1;
    // set and update that token in the mapping
    allNFTStaking[_tokenId] = staking;
  }

   /// @notice change token price
  /// @param _tokenId nft id
  /// @param _newPrice nft new price
  function changeTokenPrice(uint256 _tokenId, uint256 _newPrice) public {
    // require caller of the function is not an empty address
    require(msg.sender != address(0));
    // require that token should exist
    require(_exists(_tokenId), "Token do not exist");
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // check that token's owner should be equal to the caller of the function
    require(tokenOwner == msg.sender, "Try to change token price with a user that is not the owner");
    // get that token from all crypto nft mapping and create a memory of it defined as (struct => Staking)
    Staking memory staking = allNFTStaking[_tokenId];
    // update token's price with new price
    staking.price = _newPrice;
    // set and update that token in the mapping
    allNFTStaking[_tokenId] = staking;
  }
  
  /// @notice  switch between set for sale and set not for saled
  /// @param _tokenId nft id
  function toggleForSale(uint256 _tokenId) public {
    // require caller of the function is not an empty address
    require(msg.sender != address(0));
    // require that token should exist
    require(_exists(_tokenId));
    // get the token's owner
    address tokenOwner = ownerOf(_tokenId);
    // check that token's owner should be equal to the caller of the function
    require(tokenOwner == msg.sender);
    // get that token from all crypto nft mapping and create a memory of it defined as (struct => Staking)
    Staking memory staking = allNFTStaking[_tokenId];
    // if token's forSale is false make it true and vice versa
    // check that the token is not staked
    require(staking.staked==false);
    if(staking.forSale) {
      staking.forSale = false;
    } else {
      staking.forSale = true;
    }
    // set and update that token in the mapping
    allNFTStaking[_tokenId] = staking;
  }

  
    // ---------- STAKES ----------

    
    /// @notice A method for a stakeholder to create a NFT stake. The idea of stake a NFT should be different 
    /// @notice  stake a ERC20 token. The idea here is a transfer the onwership to the contract adn not  burn the NFT
    /// @param _tokenId nft id
    
     function createStake(uint256 _tokenId) external
      {
      
      // require caller of the function is not an empty address
      require(msg.sender != address(0));
      // require that token should exist
      require(_exists(_tokenId));
      // get the token's owner
      address tokenOwner = ownerOf(_tokenId);
      // check that token's owner should be equal to the caller of the function
      require(tokenOwner == msg.sender);
      

      // get that token from all crypto NFT mapping and create a memory of it defined as (struct => Staking)
      Staking memory staking = allNFTStaking[_tokenId];
      // check that the token is not staked
      require(staking.staked==false);

      
      //_burn(_tokenId); // burn the NFT
      // transfer the token from owner to the contract
      _transfer(tokenOwner, address(this), _tokenId);
      // change the status of staked == true
      staking.staked = true;


    

      // set and update that token in the mapping
      allNFTStaking[_tokenId] = staking;
      emit LogStaking(tokenOwner,"Success Stake");
      
     
    }

    
    /// @notice A method for a stakeholder to remove a stake. Transfer the owership to the owner of the contract
    /// @param _tokenId nft id 
     
     function removeStake(uint256 _tokenId)  public
     {
        // require caller of the function is not an empty address
        require(msg.sender != address(0));
        // require that token should exist
        require(_exists(_tokenId));
        // get the token's owner
        address tokenOwner = ownerOf(_tokenId);
        // check that token's owner should be equal to the caller of the function
        require(tokenOwner == address(this));
        // get that token from all crypto NFT mapping and create a memory of it defined as (struct => Staking)
        Staking memory staking = allNFTStaking[_tokenId];
        // check that the token is not staked
        require(staking.staked==true);
        require(staking.currentOwner==msg.sender,"Try to remove the stake with a different users");
        
        // transfer the token from contract to the owner
        _transfer(address(this), msg.sender, _tokenId);
        // change the status of staked == true
        staking.staked = false;
        
        // set and update that token in the mapping
        allNFTStaking[_tokenId] = staking;
      }

    function addStakeholder(address _stakeholder)
        public
    {
        (bool _isStakeholder, ) = isStakeholder(_stakeholder);
        if(!_isStakeholder) stakeholders.push(_stakeholder);
    }


    // ---------- STAKEHOLDERS ----------

    
    /// @notice A method to check if an address is a stakeholder.
    /// @param _address The address to verify.
    /// @return bool, uint256 Whether the address is a stakeholder, 
    /// and if so its position in the stakeholders array.
     
     function isStakeholder(address _address) public view returns(bool, uint256)
     {
       for (uint256 s = 0; s < stakeholders.length; s += 1){
          if (_address == stakeholders[s]) return (true, s);
       }
       return (false, 0);
     }
     function removeStakeholder(address _stakeholder) public {
        (bool _isStakeholder, uint256 s) = isStakeholder(_stakeholder);
        if(_isStakeholder){
            stakeholders[s] = stakeholders[stakeholders.length - 1];
            stakeholders.pop();
        } 
    }

   
    /// @notice A simple method that calculates the rewards for each stakeholder.
    /// @param _stakeholder The stakeholder to calculate rewards for.
    /// @dev implement a method to distribut reward to a address ofter 1 day staking, based on the nft price
     
    function calculateReward(address _stakeholder) public view returns(uint256)
    {
    
    }
  
}
