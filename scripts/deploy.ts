import { TodoList__factory } from "@/index";
import { ethers } from "hardhat";

async function main() {

  // Log network name
  const network = await ethers.provider.getNetwork();
  console.log("Network:", network.name);

  const Token: TodoList__factory = await ethers.getContractFactory("TodoList");


  const token = await Token.deploy();

  console.log("Contract address:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
