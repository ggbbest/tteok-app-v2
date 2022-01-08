import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import FirstcomeAirdropArtifact from "./abi/injeolmi/artifacts/contracts/FirstcomeAirdrop.sol/FirstcomeAirdrop.json";
import Contract from "./Contract";

class FirstcomeAirdropContract extends Contract {

    constructor() {
        super("0xE1eFF4230c2cf812e4f5214ACe5a1888f2b1A68e", FirstcomeAirdropArtifact.abi);
    }

    public async airdropAmount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("airdropAmount"));
    }

    public async season(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("season"));
    }

    public async dropped(season: BigNumberish, address: string): Promise<boolean> {
        return await this.runMethod("dropped", season, address);
    }

    public async airdrop() {
        await this.runWalletMethod("airdrop");
    }
}

export default new FirstcomeAirdropContract();
