// The run file help us to compile the code of the contract file (in this case WavePortal.sol)
// Hardhat creates a local Ethereum network for us, and after the script completes
// the file, it'll detroy. Every time we run the contract, it'll be a fresh blockchain.

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); 
    //Grabbed 2 addresses, one for the deploy and another to use
    //the contract like someone else
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); 
    //Creates an object to our contract, to -->
    const waveContract = await waveContractFactory.deploy();
    //then deploy it.
    await waveContract.deployed();
    //and wait till it is officially deployed
    console.log("Contract deployed to:", waveContract.address);
    //Shows on screen the SC address on blockchain
    console.log('Contract deployed by:', owner.address);
    //Shows on screen the our address on blockchain


    let waveCount;
    waveCount = await waveContract.getTotalWaves(); 
    //Using our function to save the value of 'waveCount'

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
    //Waves and waits for it to end.

    waveCount = await waveContract.getTotalWaves();
    //Gets the amount of waves

    waveTxn = await waveContract.connect(randomPerson).wave(); 
    await waveTxn.wait();
    //Waving as another person after connecting like them

    waveCount = await waveContract.getTotalWaves();
    //Gets the amount of waves, again
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0); //Exit Node process without error
    } catch (error) {
      console.log(error);
      process.exit(1); //Exit Node process while indicating 'Uncaught Fatal Exception' error
    }
    //Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
  };
  
  runMain();