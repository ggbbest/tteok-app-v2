import { BigNumber } from "@ethersproject/bignumber";
import Wallet from "../klaytn/Wallet";
import CeikPoolArtifact from "./abi/ceik/artifacts/contracts/CeikPool.sol/CeikPool.json";
import Contract from "./Contract";
import CeikContract from "./CeikContract";

class CeikPoolContract extends Contract {

    constructor() {
        super("0x20df477bf0aa41b6ae3ac27ac3d8d87fe0066e63", CeikPoolArtifact.abi);
    }

    public async swapToCEIK(value: BigNumber) {
        await this.runWalletMethodWithValue(value, "swapToCEIK");
    }

    public async swapToKlay(amount: BigNumber) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            if ((await CeikContract.allowance(owner, this.address)).lt(amount)) {
                await CeikContract.approve(this.address, amount);
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

export default new CeikPoolContract();
