import { BigNumber } from "@ethersproject/bignumber";
import Wallet from "../klaytn/Wallet";
import CeikFMPoolArtifact from "./abi/ceikfm/artifacts/contracts/CeikFMPool.sol/CeikFMPool.json";
import Contract from "./Contract";
import CeikFMContract from "./CeikFMContract";

class CeikFMPoolContract extends Contract {

    constructor() {
        super("0xCdA0204927fC9Ffd61D8E1Ae4C30e08b9C0e5478", CeikFMPoolArtifact.abi);
    }

    public async swapToCFM(value: BigNumber) {
        await this.runWalletMethodWithValue(value, "swapToCFM");
    }

    public async swapToKlay(amount: BigNumber) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if ((await CeikFMContract.allowance(owner, this.address)).lt(amount)) {
                await CeikFMContract.approve(this.address, amount);
                await new Promise<void>((resolve) => {
                    setTimeout(async () => {
                        await this.runWalletMethod("swapToKlay", amount);
                        resolve();
                    }, 2000);
                });
            } else {
                await this.runWalletMethod("swapToKlay", amount);
            }
        }
    }
}

export default new CeikFMPoolContract();
