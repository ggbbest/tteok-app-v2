import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(
            (this.container = el(".layout",
                el("main", (this.content = el(".content"))),
                el("footer", el("", "nft.c4ei.net"))
            ))
        );
    }

    public set title(title: string) {
        document.title = `${title} | nft.c4ei.net `;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
