const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/_BvnJciy80sTDllSLjy5CYtgcosiKFV9")
const contractAddress = "0x8764ab69d1bc3565652465ed75d8866a33cde620";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}
