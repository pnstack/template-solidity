# Template Solidity Project

[![CI/CD](https://github.com/pnstack/template-solidity/actions/workflows/ci.yml/badge.svg)](https://github.com/pnstack/template-solidity/actions/workflows/ci.yml)
[![Deploy](https://github.com/pnstack/template-solidity/actions/workflows/deploy.yml/badge.svg)](https://github.com/pnstack/template-solidity/actions/workflows/deploy.yml)
[![codecov](https://codecov.io/gh/pnstack/template-solidity/branch/master/graph/badge.svg)](https://codecov.io/gh/pnstack/template-solidity)
[![npm version](https://badge.fury.io/js/template-solidity.svg)](https://badge.fury.io/js/template-solidity)

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

## Features

- 🔧 **Hardhat** - Ethereum development environment
- 📝 **TypeScript** - Type safety and modern JavaScript features
- 🧪 **Testing** - Comprehensive test suite with coverage reporting
- 🎨 **Code Quality** - ESLint, Prettier, and Solhint for consistent code style
- 🔒 **Security** - Slither integration for security analysis
- 🚀 **CI/CD** - GitHub Actions for automated testing and deployment
- 📦 **Multi-format builds** - CommonJS and ESM module support
- 🌐 **Multi-network** - Support for local, testnet, and mainnet deployments

## Quick Start

```bash
# Install dependencies
npm install

# Compile contracts
npm run compile

# Run tests
npm test

# Run linting
npm run lint
npm run lint:sol

# Deploy locally
npm run start-local  # In one terminal
npm run deploy:local # In another terminal
```

## Available Scripts

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).

## CI/CD Pipeline

This project includes a comprehensive CI/CD pipeline using GitHub Actions:

### Continuous Integration (CI)

The CI pipeline runs on every push and pull request to `main`, `master`, and `develop` branches:

1. **Code Quality & Linting** - ESLint for TypeScript, Solhint for Solidity, Prettier for formatting
2. **Contract Compilation** - Compiles Solidity contracts and generates TypeScript bindings
3. **Testing** - Runs test suite on Node.js 18 and 20 with coverage reporting
4. **Package Build** - Builds TypeScript artifacts for distribution
5. **Security Audit** - npm audit and Slither security analysis

### Continuous Deployment (CD)

The CD pipeline handles automated deployments:

- **Testnet Deployment** - Automatically deploys to Sepolia testnet on pushes to main/master
- **NPM Publishing** - Publishes package to NPM on version tags (v*)
- **Mainnet Deployment** - Deploys to mainnet on GitHub releases (manual approval required)

### Required Secrets

For deployment workflows, configure these secrets in your GitHub repository:

```bash
# For testnet deployment
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
SEPOLIA_PRIVATE_KEY=0x...

# For mainnet deployment
MAINNET_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
MAINNET_PRIVATE_KEY=0x...

# For contract verification
ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY

# For NPM publishing
NPM_TOKEN=npm_token_here
```

### Status Badges

The README includes status badges for:
- CI/CD pipeline status
- Deployment status
- Code coverage (Codecov)
- NPM package version

### Local Development

```bash
# Run all quality checks locally (like CI)
npm run lint && npm run lint:sol && npm run compile && npm test

# Format code
npx prettier '**/*.{json,sol,md,ts,js}' --write

# Generate coverage report
npm run coverage
```
