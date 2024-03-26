import Image from "next/image";
import styles from "./Resources.module.css"
import { FaComments } from "react-icons/fa";



const Resources = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text}>
                    <div className="text1">
                        <span className={styles.nfts}>NFTs</span>
                    </div>
                    <div className={styles.text2}>
                        Resouces for getting started
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.img}>
                        <Image src="/Image.png" width={636} height={464} alt="img1"/>
                    </div>
                    <div className={styles.cards}>


                        <div className={styles.card2}>
                            <div className={styles.card_img}>
                                <Image src="/bg.png" width={158} height={152} alt="card img"/>
                            </div>
                            <div className={styles.card_text}>
                                <div className={styles.cont1}>
                                    <div className={styles.a1}>
                                        <a href="#">Game</a>
                                    </div>
                                    <div className={styles.a2}>
                                        <a href="#">NFT</a>
                                    </div>
                                    <div className={styles.a3}>
                                        <FaComments/> Comment
                                    </div>
                                </div>
                                <div className={styles.cont2}>
                                    I think I minted duplicate NFTs
                                </div>
                                <div className={styles.cont3}>
                                    <div className={styles.cont_img}>
                                        <Image src="/Ellipse2.png" width={44} height={44} alt="avatar"/>
                                    </div>
                                    <div className={styles.cont_text}>
                                        <div className={styles.cont_text1}>
                                            Courtney Henry
                                        </div>
                                        <div className={styles.cont_text2}>
                                            May 27, 2022
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>


                        <div className={styles.card2}>
                            <div className={styles.card_img}>
                                <Image src="/bg2.png" width={158} height={152} alt="card img"/>
                            </div>
                            <div className={styles.card_text}>
                                <div className={styles.cont1}>
                                    <div className={styles.a1}>
                                        <a href="#">NFT Token</a>
                                    </div>
                                    <div className={styles.a2}>
                                        <a href="#">NFT</a>
                                    </div>
                                    <div className={styles.a3}>
                                        <FaComments/> No Comment
                                    </div>
                                </div>
                                <div className={styles.cont2}>
                                    The  Marketplace isn’t working
                                </div>
                                <div className={styles.cont3}>
                                    <div className={styles.cont_img}>
                                        <Image src="/Ellipse3.png" width={44} height={44} alt="avatar"/>
                                    </div>
                                    <div className={styles.cont_text}>
                                        <div className={styles.cont_text1}>
                                            Courtney Henry
                                        </div>
                                        <div className={styles.cont_text2}>
                                            May 27, 2022
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export {Resources};