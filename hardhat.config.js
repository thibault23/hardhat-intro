/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL = 'https://rinkeby.infura.io/v3/52362bff24c74c3fb660546ed35352b0';
const PRIVATE_KEY =
module.exports = {
  solidity: "0.8.0",
  netowkr: {
    rinkeby: {
      url: INFURA_URL,
      accounts: []
    }
  }
};
