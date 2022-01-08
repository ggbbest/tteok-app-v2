import CeikArtifact from "./abi/ceik/artifacts/contracts/Ceik.sol/Ceik.json";
import KIP7Contract from "./standard/KIP7Contract";

class CeikContract extends KIP7Contract {

    constructor() {
        super("0x18814b01b5cc76f7043e10fd268cc4364df47da0", CeikArtifact.abi);
    }
}

export default new CeikContract();
