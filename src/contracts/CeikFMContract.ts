import CeikFMArtifact from "./abi/ceikfm/artifacts/contracts/CeikFM.sol/CeikFM.json";
import KIP7Contract from "./standard/KIP7Contract";

class CeikFMContract extends KIP7Contract {

    constructor() {
        super("0xb69430f2a2f33482036FC9109c217ec5df50C1c4", CeikFMArtifact.abi);
    }
}

export default new CeikFMContract();
