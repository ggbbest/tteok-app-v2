import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import CeikFMContract from "../contracts/CeikFMContract";
import CeikFMPoolContract from "../contracts/CeikFMPoolContract";
import CeikFMPriceContract from "../contracts/CeikFMPriceContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class Classic implements View {

    private container: DomNode;
    private interval: any;

    private priceDisplay: DomNode;
    private ceikfmPrice: BigNumber = BigNumber.from(0);

    private buyInput: DomNode<HTMLInputElement>;
    private buyResult: DomNode;

    private sellInput: DomNode<HTMLInputElement>;
    private sellResult: DomNode;

    constructor() {
        Layout.current.title = "세이크팜";
        Layout.current.content.append(this.container = el(".classic-view",
            el("section",
                el("h1", "c4ei.net\n"),
                // el("p", `한국인의 정과 훈훈한 인심. 따뜻한 코인 커뮤니티 떡방앗간 코인 이야기.\nhttp://tteok.org으로도 접속하실 수 있습니다.\n떡방앗간 회원들은 "참새"로 불리웁니다.`),
                el("h3", " 세이크팜"),
                // el("img.ceikfm", { src: "/images/ceikfm-classic.png", height: "330" }),
                // el("h3", "세이크팜  떡크노믹스"),
                el("p", "토큰 전송 시 10% 떼감 -> 9%는 홀더들한테 떡돌림, 1%는 떡방앗간에 팁으로 제공 (팁은 이벤트, 에드, 기부, 개발자 사리사욕에 쓰임)"),
                el("p", "세이크팜 은 클레이튼 밈 토큰입니다. 따라서 클레이튼 지갑인 카이카스 지갑이 필요합니다."),
                el("a", "카이카스 지갑 다운로드", {
                    href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi",
                    target: "_blank",
                }),
                el(".links",
                    el("a", "세이크팜 카이카스 지갑에 추가(클립은 영원히 지원 계획이 없습니다.)", {
                        click: () => Wallet.addToken(
                            CeikFMContract.address,
                            "CFM",
                            8,
                            "https://raw.githubusercontent.com/tteokmill/tteok-app/main/docs/images/ceikfm.png"
                        ),
                    }), "\n",
                    el("a", "스마트 콘트랙트 주소: 0xb69430f2a2f33482036FC9109c217ec5df50C1c4", {
                        href: "https://scope.klaytn.com/token/0xb69430f2a2f33482036FC9109c217ec5df50C1c4",
                        target: "_blank",
                    }), "\n",
                    el("a", "소스 코드", {
                        href: "https://github.com/tteokmill/ceikfm",
                        target: "_blank",
                    }), "\n",
                    el("a", "세이크팜 차트보기", {
                        href: "https://dexata.kr/?tokenA=0xb69430f2a2f33482036FC9109c217ec5df50C1c4&tokenB=0x0000000000000000000000000000000000000000",
                        target: "_blank",
                    }),
                ),
                el("p.warning", "절대 본인의 세이크팜 을 본인의 지갑에 전송하지 마세요. 세이크팜 을 모두 잃어버릴 수 있습니다!"),
                el(".card",
                    el("h5", "세이크팜  가격"),
                    el("h6", (this.priceDisplay = el("span.price", "...")), " KLAY\n"),
                ),
                el("h3", "클레이로 세이크팜  사기"),
                el("p", "세이크팜 을 살때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                el(".form",
                    this.buyInput = el("input", {
                        placeholder: "KLAY 수량",
                        keyup: () => setTimeout(() => {
                            const value = utils.parseEther(this.buyInput.domElement.value);
                            this.buyResult.empty().appendText(
                                `대략 ${utils.formatEther(
                                    value.mul(utils.parseEther("1")).div(this.ceikfmPrice).mul(9).div(10)
                                )} CFM`
                            );
                        }),
                    }),
                    this.buyResult = el(".result"),
                    el("button", "사기", {
                        click: async () => {
                            await CeikFMPoolContract.swapToCFM(
                                utils.parseEther(this.buyInput.domElement.value)
                            );
                        },
                    })
                ),
                el("h3", "세이크팜  클레이로 팔기"),
                el("p", "세이크팜 을 펄때도 떡크노믹스 때문에 10%를 적게 받습니다."),
                el(".form",
                    this.sellInput = el("input", {
                        placeholder: "세이크팜 수량",
                        keyup: () => setTimeout(() => {
                            const value = utils.parseEther(this.sellInput.domElement.value);
                            this.sellResult.empty().appendText(
                                `대략 ${utils.formatEther(
                                    value.mul(this.ceikfmPrice).div(utils.parseEther("1")).mul(9).div(10)
                                )} KLAY`
                            );
                        }),
                    }),
                    this.sellResult = el(".result"),
                    el("button", "팔기", {
                        click: async () => {
                            await CeikFMPoolContract.swapToKlay(
                                utils.parseUnits(this.sellInput.domElement.value, 8)
                            );
                        },
                    })
                ),
                el("footer",
                    el("a", "트위터", {
                        href: "https://twitter.com/tteokclassic",
                        target: "_blank",
                    }), 
                    // "\n",
                    // el("a", "오카방 (오픈 카카오톡 방)", {
                    //     href: "https://open.kakao.com/o/gc5NMySd",
                    //     target: "_blank",
                    // }), "\n",
                    // el("img", { src: "/images/thankyou.gif", height: "107.5" })
                ),
            ),
        )
        );


        this.refresh();
        this.interval = setInterval(() => this.refresh(), 2000);
    }

    private async refresh() {
        this.ceikfmPrice = await CeikFMPriceContract.price();
        if (this.container.deleted !== true) {
            this.priceDisplay.empty().appendText(utils.formatEther(this.ceikfmPrice));
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}