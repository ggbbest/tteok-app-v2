import { BigNumber } from "@ethersproject/bignumber";
import CeikFMPriceArtifact from "./abi/ceikfm-price/artifacts/contracts/CeikFMPrice.sol/CeikFMPrice.json";
import Contract from "./Contract";

class CeikFMPriceContract extends Contract {

    constructor() {
        super("0x907717C48ED27B7D3876Ee7B43489A381Fb199b9", CeikFMPriceArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }
}

export default new CeikFMPriceContract();
