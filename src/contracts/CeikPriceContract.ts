import { BigNumber } from "@ethersproject/bignumber";
import CeikPriceArtifact from "./abi/ceik-price/artifacts/contracts/CeikPrice.sol/CeikPrice.json";
import Contract from "./Contract";

class CeikPriceContract extends Contract {

    constructor() {
        super("0x907717C48ED27B7D3876Ee7B43489A381Fb199b9", CeikPriceArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }
}

export default new CeikPriceContract();
