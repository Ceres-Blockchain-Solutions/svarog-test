# SVAROG-TEST

# Intro

This is an example project which utilizes the svarog-runner package in order to demonstrate how developers can test the functionalities of a Substrate-based node on a local system.

# Installation

In order to install the necessary packages execute the following command:

```bash
yarn install
```

# Commands

## Important Note

In this example, the pre-built Substrate Frame node template was used. **However, we recommend building the desired node on your own machine, as otherwise, there is a chance that the runner may not function properly.** If you build your own node, place it in the **/runners** folder and run it with appropriate command. The Frame node for this example was built on Ubuntu 22.04.3 LTS.


## Running the network

Launching an instance of the default Substrate node can be achieved with the following command **(Note: change name of binary if you built your own node)**:

```bash
npx svarog-runner frame
```

By default, executing this command will create a network which consists of 3 nodes and will occupy the following ports:

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

To clear the set name for **Alice** run the following command:

```bash
yarn clearName
```
