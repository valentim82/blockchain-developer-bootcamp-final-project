
# Final project - The NFT ecosystem is here to stay and rapidly grow into the metaverse world. Being able to have access to any assets for one day or one month even if it does not belong to you should be a reality in the NFT world.

## What does the project do?

### Provide a simple platformer for users to can sell, stake and in a final stage rent their NFTs, in a decentralized platform, using smart contracts solution. 

## Deployed version url:

https://valentim82.github.io/

## How to run this project locally:


### Landing Contract  Workflow

  - Users will have to register themselves somehow on the contract, using their metamask.

  - Users can mint their NFT

  - Users can sell their NFT

  - Users can stake their NFT  on the platform

### Nice to have:

   - User can receive "rewards" for their assets in stake

   - "Lanlords" Users can register their NFT on the smart contract, defining rent price, a period for renting, etc.

   - "Tenant" Users canchoose an NFT to rend and register on their contract, the first rent period will be paid in advance.

   - After seal the smart contract, the "Tenant" will have ownership over the NFT, thorough out the smart contract.

   - The contract will be terminated after the defined period or in case the "Tenant" has no funds on their wallet.  

### To do:
  - Create a token utility to reward the staking.


## How to run project

- Node.js v10.19.0 or later
- NPM v7.24.1 or later
- Windows, Linux or Mac OS X
- MetaMask extension in browser
- Ganache or another local testnet on port 7545

## Run dApp on browser with Ropsten testnet

- Connect MetaMask with Ropsten testnet
- Open https://valentim82.github.io/

## Run smartcontract unit test

- In terminal, git clone https://github.com/valentim82/blockchain-developer-bootcamp-final-project.git
- In terminal at project root folder, npm install
- truffle develop
- truffle migrate
- truffle test

## Run dApp on local server

- In terminal, git clone  https://github.com/valentim82/blockchain-developer-bootcamp-final-project.git
- In terminal at project root folder, npm install
- Open Ganache and run testnet on port 7545
- In Ganache, click on the key icon to the right of the first wallet and copy the private key
- In browser, connect Metamask with testnet on port 7545
- In Metamask, click ‘Import Account’ and paste the private key
- In terminal at project root folder, truffle migrate --network development
- Copy 'NFTStaking Contract Address' from terminal and paste after 'nftSAddress' in blockchain-developer-bootcamp-final-project/client/index.js at line 4 and blockchain-developer-bootcamp-final-project/stake/index.js at line 4

### To setup frontend:

- In terminal at project root folder, cd client
- npm install
- npm start
- In browser, go to http://localhost:3000/
- Add more accounts from Ganache to Metamask to test multiple features

