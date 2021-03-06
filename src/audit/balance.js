var CaerusToken = artifacts.require("CaerusToken");
var TokenVesting = artifacts.require("TokenVesting");
var moment = require('moment');
var async = require('async');


module.exports = async function (callback) {
  const investorAddresses = web3.eth.accounts.splice(0, 75);
  const transferAddress = web3.eth.accounts[9];
  //How many tokens should be received per wei sent in
  //The math works out to be the same as the previous rate with the new 18 decimal place functionality written into the contract
  const initialRate = 416;

  const caerusToken = await CaerusToken.deployed();

  console.log(`Total Supply: ${(await caerusToken.totalSupply()).shift(-18)}`)
  console.log(`MultiSig Balance: ${web3.eth.getBalance(transferAddress).shift(-18)} Ether`)
  console.log('');
  async.eachSeries(investorAddresses, (address, cb) => {
    caerusToken.balanceOf(address).then((a) => { console.log(`${address}  balance: ${a.shift(-18).toFixed(18)}`); cb() })
      .catch(e => {  console.log(e); console.log('stopping launchPartners operation'); callback() });
  }, callback);
  
}