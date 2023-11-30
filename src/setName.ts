import { getNetworkProvider } from "svarog-runner";
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";

const main = async () => {
    const url = await getNetworkProvider("frame", "ws");

    const provider = new WsProvider(url);
    const api = await new ApiPromise({ provider }).isReady;

    const keyring = new Keyring({ type: "sr25519" });
    const signer = keyring.addFromUri("//Alice");

    const nick = "AliceTestName";

    const extrinsic = api.tx.nicks.setName(nick);
    await extrinsic.signAndSend(signer);

    console.log(`Nickname for ${signer.address} has been set to ${nick}`);
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        process.exit(0);
    });
