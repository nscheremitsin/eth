const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleToken", () => {
    let owner;
    let initialSupply;
    let contract;

    // TODO: find out why "beforeEach" and all "it" funcs fail withoud async await

    beforeEach(async () => {
        owner = await ethers.getSigner();
        initialSupply = ethers.utils.parseEther("10000");
        factory = await ethers.getContractFactory("SimpleToken");
        contract = await factory.deploy(initialSupply);
    });

    describe("Setup", () => {
        it("Should be named Simple", async () => {
            const name = await contract.name();
            expect(name).to.equal("Simple");
        });
        it("Should be symboled SMPL", async () => {
            const symbol = await contract.symbol();
            expect(symbol).to.equal("SMPL");
        });
        it("Owner should have initial supply", async () => {
            const balance = await contract.balanceOf(owner.address);
            expect(balance).to.equal(initialSupply);
        });
    });
});