import { BigNumber } from "@ethersproject/bignumber";
import CeikPriceArtifact from "./abi/ceik-price/artifacts/contracts/CeikPrice.sol/CeikPrice.json";
import Contract from "./Contract";

class CeikPriceContract extends Contract {

    constructor() {
        super("0x6E22cd771d0BBC18501F3113e01fD95947299Ca1", CeikPriceArtifact.abi);
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }
}

export default new CeikPriceContract();
