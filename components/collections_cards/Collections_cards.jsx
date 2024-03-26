import styles from "./Collections_cards.module.css"
import Image from "next/image";

import { FaEthereum } from "react-icons/fa";



const Collections_cards = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cards1}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card1.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card2.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.cards1}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card3.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card4.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.cards1}>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card5.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.img}>
                            <Image src="/coll_card6.png" width={59} height={52} alt="card img" />
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.cont1}>
                                <div className={styles.text1}>
                                    Bored Ape Yacht Club
                                </div>
                                <div className={styles.text2}>
                                    <FaEthereum color="03DB80" /> 2.9k ETH
                                </div>
                            </div>
                            <div className={styles.cont2}>
                                <div className={styles.text3}>
                                    10,450.00
                                </div>
                                <div className={styles.text4}>
                                    +10.00%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
            
        </div>
    )
}

export {Collections_cards};