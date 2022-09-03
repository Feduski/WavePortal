//Deploy file is used to create a local blockchain, on a network that stays alive.
//We have to create a node before we run this file.
//npx hardhat node
//npx hardhat run scripts/deploy.js --network localhost

const main = async () => {
    const [deployer] = await hre.ethers.getSigners(); //The deployer of the SC (we)
    const accountBalance = await deployer.getBalance(); //Our account balance
  
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());
  
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    //Creates an object to our contract, to -->
    const waveContract = await waveContractFactory.deploy(); 
    //then deploy it
    await waveContract.deployed();
    //and wait till it is officially deployed.
    console.log("WavePortal address: ", waveContract.address); 
    //Shows on screen the SC address on blockchain
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); //Exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); //Exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    }; //this block runs the main, and show us to console if there is an eror.
  
  runMain();

 //SC = Smart Contract