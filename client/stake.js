

// contract address on Ropsten:
const nftSAddress = '0xb70FecBBaC07bd59F0B0Ff67dA8BD93C85FcAC1E'

// add contract ABI from Remix:


const nftSABI =
[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakeholder",
				"type": "address"
			}
		],
		"name": "addStakeholder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "buyToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
			}
		],
		"name": "changeTokenPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "createStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nftStakingCounter",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "LogMint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "LogStaking",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "mintStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "collectoinNameEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "removeStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakeholder",
				"type": "address"
			}
		],
		"name": "removeStakeholder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "toggleForSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allNFTStaking",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tokenURI",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "mintedBy",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "staked",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numberOfTransfers",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "forSale",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_stakeholder",
				"type": "address"
			}
		],
		"name": "calculateReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectionName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectionNameSymbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfTokensMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getOriginalOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenMetaData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getTotalNumberOfTokensOwnedByAnAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "isStakeholder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftStakingCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "tokenNameExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "tokenURIExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Is Available!'

      // add in web3 here
      var web3 = new Web3(window.ethereum)

    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found 2')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
  }
})


var web3 = new Web3(window.ethereum)

// Grabbing the button object,  

const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account. 
// 
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example
 
mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
}

// grab the button for input to a contract:

const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
  // grab value from input
  
  
  const id = document.getElementById('ss-input-id').value;
  console.log(id)
  
  try{
    var web3 = new Web3(window.ethereum)

    // instantiate smart contract instance
  
    const simpleNFT = new web3.eth.Contract(nftSABI, nftSAddress)
    simpleNFT.setProvider(window.ethereum)
	let txStatusDiv = document.getElementById('txStatus');
    simpleNFT.events['LogStaking']().on('data', function(event){
	/* event received - to access parameters, use the attribute returnValues */
	txStatusDiv.innerHTML = event.returnValues.message;
  });

  	await simpleNFT.methods.createStake(id).send({from: ethereum.selectedAddress}).then(() => {txStatusDiv.innerHTML = 'Transaction sent, waiting for execution';}).catch(error => {txStatusDiv.innerHTML = 'Transaction failed, please check console';});
  
   
  }
  catch(error){
    console.log('error:', error);
  }
  

}


// get elements to stake a NFT

const ssGetStake = document.getElementById('ss-get-value')

ssGetStake.onclick = async () => {


  var web3 = new Web3(window.ethereum)

  const simpleNFT = new web3.eth.Contract(nftSABI, nftSAddress)
  simpleNFT.setProvider(window.ethereum)



  //var symbol = await simpleNFT.collectionName.call()

  // get the number of contract already minted
  
  let numberOfTokenCreated = await simpleNFT.methods.getNumberOfTokensMinted().call();
  
  // get the number of nft minted by this adress
  let numberOfTokenbyOwner = 0;
  
  
 
  var imagem = [];
  var name = [];
  var price = [];
  var id = [];
  for (let i = 1; i<= numberOfTokenCreated; i++){
	

		let tokenOwner = await simpleNFT.methods.getTokenOwner(i).call();
		
		if (tokenOwner.toUpperCase() === ethereum.selectedAddress.toUpperCase()){
			
			// get url
			let tokenMetaData = await simpleNFT.methods.getTokenMetaData(i).call();
			// get name
			let tokenName = await simpleNFT.methods.getTokenName(i).call();
			// get price
			let tokenPrice = await simpleNFT.methods.getTokenPrice(i).call();
			numberOfTokenbyOwner++;
			let tokenID = i;
			
			imagem.push(tokenMetaData);
			console.log(tokenMetaData);
			name.push(tokenName);
			console.log(tokenName);
			price.push(web3.utils.fromWei(tokenPrice,'ether'));
			console.log(tokenPrice);
			id.push(tokenID);
		
			
			
					
			// get name

			console.log('---------------------------- //  ------------------------')
			

 		}
 }
	
 	$("body #nftImg").html("");
	$(document).ready(function(){	
        var nftMinted = document.getElementById('nftImg') 
		for (var i = 1; i <= numberOfTokenbyOwner; i++) {  
			var  img = "<img src =" + imagem[i-1] + " id= "+" myid"+i+"/> <br>"; 
			var  label1 = "<label for="+"name"+">NFT Name: " + name[i-1] + "</label> <br>";
			var  label2 = "<label for="+"name"+">NFT Price: " + price[i-1] + "</label> <br>";
			var  label3 = "<label for="+"name"+">NFT ID: " + id[i-1] + "</label> <br>";
			 
			$("body #nftImg").append(label1);
			$("body #nftImg").append(label2);
			$("body #nftImg").append(label3);
			$("body #nftImg").append(img);
			console.log(img);
			
			
		}
	  
  })




  const ssDisplayValue = document.getElementById('ss-display-nft-by-contract')

  ssDisplayValue.innerHTML = 'Number of NFT Created on the contract: ' + numberOfTokenCreated

  const ssDisplayNFTAddress = document.getElementById('ss-display-nft-by-address')

  ssDisplayNFTAddress.innerHTML = 'Number of NFT Created by Address: ' + numberOfTokenbyOwner

}


// show NFT stake by the contract

const ssShowStake = document.getElementById('ss-get-staking')

ssShowStake.onclick = async () => {


 

  var web3 = new Web3(window.ethereum)

  const simpleNFT = new web3.eth.Contract(nftSABI, nftSAddress)
  simpleNFT.setProvider(window.ethereum)



  //var symbol = await simpleNFT.collectionName.call()

  // get the number of contract already minted
  
  let numberOfTokenCreated = await simpleNFT.methods.getNumberOfTokensMinted().call();
  
  // get the number of nft minted by this adress
  let numberOfTokenbyOwner = 0;
  var imagem = [];
  var name = [];
  var price = [];
  var id = [];
  for (let i = 1; i<= numberOfTokenCreated; i++){
	

	let tokenOwner = await simpleNFT.methods.getTokenOwner(i).call();
	let original = await simpleNFT.methods.getOriginalOwner(i).call();
	if ( ( tokenOwner.toUpperCase() === nftSAddress.toUpperCase() ) && ( original.toUpperCase() === ethereum.selectedAddress.toUpperCase() )){
	
		// get url
		let tokenMetaData = await simpleNFT.methods.getTokenMetaData(i).call();
		// get name
		let tokenName = await simpleNFT.methods.getTokenName(i).call();
		// get price
		let tokenPrice = await simpleNFT.methods.getTokenPrice(i).call();
			
		let tokenID = i;
		numberOfTokenbyOwner++;
			
		imagem.push(tokenMetaData);
		console.log(tokenMetaData);
		name.push(tokenName);
		console.log(tokenName);
		price.push(web3.utils.fromWei(tokenPrice,'ether'));
		console.log(tokenPrice);
		id.push(tokenID);
		
			
			
					
			// get name

			console.log('---------------------------- //  ------------------------')
			

 		}
 }
	
 	$("body #nftImg").html("");
	$(document).ready(function(){	
        var nftMinted = document.getElementById('nftImg') 
		for (var i = 1; i <= numberOfTokenbyOwner; i++) {  
			var  img = "<img src =" + imagem[i-1] + " id= "+" myid"+i+"/> <br>"; 
			var  label1 = "<label for="+"name"+">NFT Name: " + name[i-1] + "</label> <br>";
			var  label2 = "<label for="+"name"+">NFT Price: " + price[i-1] + "</label> <br>";
			var  label3 = "<label for="+"name"+">NFT ID: " + id[i-1] + "</label> <br>";
			 
			$("body #nftImg").append(label1);
			$("body #nftImg").append(label2);
			$("body #nftImg").append(label3);
			$("body #nftImg").append(img);
			console.log(img);
			
			
		}
	  
  })




  const ssDisplayValue = document.getElementById('ss-display-nft-by-contract')

  ssDisplayValue.innerHTML = 'Number of NFT Created on the contract: ' + numberOfTokenCreated

  const ssDisplayNFTAddress = document.getElementById('ss-display-nft-by-address')

  ssDisplayNFTAddress.innerHTML = 'Number of NFT Created by Address: ' + numberOfTokenbyOwner


}

