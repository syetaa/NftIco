import styles from "./Tabes.module.css"
import Image from "next/image";

import { FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaEthereum } from "react-icons/fa";


const Tabes = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.card}>
                        <div className={styles.card_body}>
                            <div className={styles.img}>
                                <Image src="/Card_img1.png" width={264} height={232} alt="card img 1"/>
                            </div>
                            <div className={styles.text}>
                                Election Season
                            </div>
                            <div className={styles.card_info}>
                                <div className={styles.price}>
                                    <FaEthereum/>From 0.05 ETH
                                </div>
                                <div className={styles.likes}>
                                    <FaRegHeart className={styles.likes_icon}/> 1889
                                </div>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.btn}>
                            Place bid
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.card_body}>
                            <div className={styles.img}>
                                <Image src="/Card_img2.png" width={264} height={232} alt="card img 1"/>
                            </div>
                            <div className={styles.text}>
                                Election Season
                            </div>
                            <div className={styles.card_info}>
                                <div className={styles.price}>
                                    <FaEthereum/>From 1.835 ETH
                                </div>
                                <div className={styles.likes}>
                                    <FaRegHeart className={styles.likes_icon}/> 328
                                </div>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.btn}>
                            Place bid
                        </div>
                    </div>
                </div>



                <div className={styles.cont1}>
                    <div className={styles.card}>
                        <div className={styles.card_body}>
                            <div className={styles.img}>
                                <Image src="/Card_img3.png" width={264} height={232} alt="card img 1"/>
                            </div>
                            <div className={styles.text}>
                                Election Season
                            </div>
                            <div className={styles.card_info}>
                                <div className={styles.price}>
                                    <FaEthereum/>From 0.085 ETH
                                </div>
                                <div className={styles.likes}>
                                    <FaRegHeart className={styles.likes_icon}/> 553
                                </div>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.btn}>
                            Place bid
                        </div>
                    </div>


                    <div className={styles.card}>
                        <div className={styles.card_body}>
                            <div className={styles.img}>
                                <Image src="/Card_img4.png" width={264} height={232} alt="card img 1"/>
                            </div>
                            <div className={styles.text}>
                                Election Season
                            </div>
                            <div className={styles.card_info}>
                                <div className={styles.price}>
                                    <FaEthereum/>From 1.05 ETH
                                </div>
                                <div className={styles.likes}>
                                    <FaRegHeart className={styles.likes_icon}/> 997
                                </div>
                            </div>
                        </div>
                        <hr className={styles.hr}></hr>
                        <div className={styles.btn}>
                            Place bid
                        </div>
                    </div>
                </div>


                
            </div>
            
        </div>
    )
}

export {Tabes};