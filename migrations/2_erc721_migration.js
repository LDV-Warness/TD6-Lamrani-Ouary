const MyERC721 = artifacts.require("./ERC721.sol");

module.exports = async function(deployer) {
  await deployer.deploy(ERC721, "ERC721", "ERC721")
  const erc721 = await ERC721.deployed()
};