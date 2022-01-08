import AirdropArtifact from "./abi/injeolmi/artifacts/contracts/Airdrop.sol/Airdrop.json";
import Contract from "./Contract";

class AirdropContract extends Contract {

    constructor() {
        super("0x280c0Ea797dCC1b1292975EB3Edb1886F89a37CD", AirdropArtifact.abi);
    }
}

export default new AirdropContract();
