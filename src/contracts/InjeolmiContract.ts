import InjeolmiArtifact from "./abi/injeolmi/artifacts/contracts/Injeolmi.sol/Injeolmi.json";
import KIP7Contract from "./standard/KIP7Contract";

class InjeolmiContract extends KIP7Contract {

    constructor() {
        super("0x18814b01b5cc76f7043e10fd268cc4364df47da0", InjeolmiArtifact.abi);
    }
}

export default new InjeolmiContract();
