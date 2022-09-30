const { ethers } = require("hardhat");

async function main() {
    const factory = await ethers.getContractFactory("SimpleToken");
    const contract = await factory.deploy('1000');
    console.log('Cotract addres: ', contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });