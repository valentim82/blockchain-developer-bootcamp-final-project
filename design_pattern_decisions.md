
#Design patterns used

## Inheritance and Interfaces
### NFT Staking contract inherits the OpenZeppelin ERC721URIStorage contract to enable use the ERC721 NFT standart contract functions.
### NFT Staking contract inherits the OpenZeppelin  contract to enable ownership for one managing user/party.




## Optimizing Gas

### Only used for at function isStakeholder without modifying storage variables in the loop and executing only one loop.
