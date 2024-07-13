//0x75Bc2aF746a3C0DDc6ba5e5C8e90489699436F75
const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("FactoryContract");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x75Bc2aF746a3C0DDc6ba5e5C8e90489699436F75"
  );

  const store = await contract.registerMarketPlace("Pradeep", 100);

  console.log(store.value);

  const res = await contract.totalRegistered();
  console.log("Successfully ...");
  console.log(res);

  const result = await contract.getInstances();
  console.log(result);

  //   await contract.increment();
  //   let finalResult = await contract.getter();
  //   console.log("Increment Result:", finalResult);
  //   await contract.increment();
  //   finalResult = await contract.getter();
  //   console.log("Increment Result:", finalResult);

  //   await contract.decrement();
  //   finalResult = await contract.getter();
  //   console.log("Decrement Result:", finalResult);
  //0x161aBA4657174De9a36C3Ee71bC8163118d88d43
}

async function callMarketPlace() {
  const marketPlaceFactory = await ethers.getContractFactory("MarketPlace");
  const marketplace = marketPlaceFactory.attach(
    "0xa97a9d1e2F3333b76A3a4796F66344fCF43f3c43"
  );

  const res = await marketplace.checkingBalance();
  console.log(res);
}

async function callAsset() {
  const assetFactory = await ethers.getContractFactory("Asset");
  const asset = assetFactory.attach(
    "0x244CB0554e3432b019f9542c3553F8A1e88D346d"
  );

  const res = await asset.gameAssetMint(
    "0x161aBA4657174De9a36C3Ee71bC8163118d88d43",
    "Any String"
  );

  const r = await asset.addMintNFT("RandomString");

  const result = await asset.returnToMintNFT();
  console.log(result);
}

callAsset().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
