import AirdropArtifact from "./abi/ceikfm/artifacts/contracts/Airdrop.sol/Airdrop.json";
import Contract from "./Contract";

class AirdropContract extends Contract {

    constructor() {
        super("0x2cC37A65E30B34B7DfF32FC8300a4E93c40aE8E8", AirdropArtifact.abi);
    }
}

export default new AirdropContract();
