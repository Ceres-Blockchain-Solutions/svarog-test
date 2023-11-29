# Intro

This is an example project which uses the **svarog-runner** package to demonstrate how a developer would test the capabilities of a substrate-based node on a local system.

# Installation

First install of the required packages via the following command:

```bash
yarn install
```

# Commands

## Running the network

In this example we can run a instance of the default substrate node by using the following command:

```bash
npx svarog-runner frame
```

By default, this command will instantiate a network which consists of 3 nodes and will occupy the following ports:

| Node    | HTTP port | RPC port |
| :------ | :-------: | :------: |
| Alice   |   10000   |   9943   |
| Bob     |   10100   |   9944   |
| Charlie |   10200   |   9945   |

In order to connect with the network we will be using the 9944 port. Please look at the official **[svarog documentation](https://github.com/Ceres-Blockchain-Solutions/svarog)** for more information.

## Extrinsic calls

To demonstrate how a user would test the network, we included the **[nicks](https://paritytech.github.io/polkadot-sdk/master/pallet_nicks/index.html)** pallet in our frame node binary.

In our example we can change the name for **Alice** to _AliceTestName_ via the following command:

```bash
yarn setName
```

To remove the seet name for **Alice** run the following command:

```bash
yarn clearName
```
