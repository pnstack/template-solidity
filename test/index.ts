import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

import { TodoList } from "@/index";

describe("Token contract", function () {
  let token: TodoList;
  let owner: SignerWithAddress;

  // Run once before all tests
  before(async function () {
    const Token = await ethers.getContractFactory("TodoList");
    [owner] = await ethers.getSigners();
    console.log("owner", owner.address);
    token = await Token.deploy();
    // token = Token.attach("0x6cFB52926Feca2A20ac565559F3f455cB35ee5d7");
  });

  // Run before each test
  // beforeEach(async function () {
  //   const Token = await ethers.getContractFactory("VdtToken");
  //   // token = await VdtToken.new(initialHolder, initialSupply);
  //   [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

  //   // token = await Token.deploy(owner.address, initialSupply);
  //   token = Token.attach("0x6cFB52926Feca2A20ac565559F3f455cB35ee5d7");
  //   console.log("cap",cap)
  // });

  it("Contract address", async () => {
    console.log("Contract address", token.address);
  });
});
