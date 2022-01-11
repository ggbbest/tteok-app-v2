import CeikArtifact from "./abi/ceik/artifacts/contracts/Ceik.sol/Ceik.json";
import KIP7Contract from "./standard/KIP7Contract";

class CeikContract extends KIP7Contract {

    constructor() {
        super("0xb69430f2a2f33482036FC9109c217ec5df50C1c4", CeikArtifact.abi);
    }
}

export default new CeikContract();
