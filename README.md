# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test

REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

For solving problems with  hardhat smart contract compile
```rm -rf node_modules
yarn cache clean
yarn
yarn start```

==============================================================

Problems solving steps

1- hardhat-toobox module installing
```yarn add @nomicfoundation/hardhat-toolbox```

2- Required plugins installing
```npm install --save-dev "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "@types/mocha@^9.1.0" "@typechain/hardhat@^6.1.2" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.8.1" "ts-node@>=8.0.0" "typescript@>=4.5.0"```


or use yarn for package installing
```yarn add --dev @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
```


3- Compilling solidity smart contract 
```yarn hardhat compile```



4- Migrating from Waffle
 setp 1 : uninstall hardhat-waffle package
 ```npm uninstall @nomiclabs/hardhat-waffle ethereum-waffle```
                or
```yarn remove @nomiclabs/hardhat-waffle ethereum-waffle```

step 2 :  install the Hardhat Chai Matchers plugin
```npm install --save-dev @nomicfoundation/hardhat-chai-matchers```
                    or
```yarn add --dev @nomicfoundation/hardhat-chai-matchers```


5- View all test nodes on hardhat 
```npx hardhat node```

6- Run the script to deploy hardhat contract
```npx hardhat run scripts/deploy.js --network localhost```
