import { getNetworkProvider } from "svarog-runner";
import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";

const main = async () => {
    const url = await getNetworkProvider("frame", "ws");

    const provider = new WsProvider("ws://127.0.0.1:9944");
    const api = await new ApiPromise({ provider }).isReady;

    const keyring = new Keyring({ type: "sr25519" });
    const signer = keyring.addFromUri("//Alice");

    const extrinsic = api.tx.nicks.clearName();

    const tx = new Promise<boolean>(async (resolve) => {
        const unsub = await extrinsic
            .signAndSend(signer, (result) => {
                if (result.status.isFinalized) {
                    if (unsub) {
                        unsub();
                    }

                    const failedEvents = result.events.filter(({ event }) =>
                        api.events?.system?.ExtrinsicFailed?.is(event)
                    );

                    resolve(failedEvents.length === 0);
                }
            })
            .catch(() => {
                resolve(false);
            });
    });

    const txStatus = await tx;

    if (txStatus) {
        console.log(`Nickname for ${signer.address} has been cleared`);
    } else {
        console.log(
            `Can not delete nickname for ${signer.address} as there isn't one to be deleted`
        );
    }
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        process.exit(0);
    });
