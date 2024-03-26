import Image from "next/image";
import styles from "./Footer_info.module.css"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer_info = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.head}>
                        Marketplace
                    </div>
                    <div className={styles.body}>
                        <div className={styles.text1}>
                            Explore
                        </div>
                        <div className={styles.text1}>
                            Help Center
                        </div>
                        <div className={styles.text1}>
                            Become a Partner
                        </div>
                        <div className={styles.text1}>
                            About Us
                        </div>
                        <div className={styles.text1}>
                            Platform Status
                        </div>
                    </div>
                </div>

                <div className={styles.cont1}>
                    <div className={styles.head}>
                        Community
                    </div>
                    <div className={styles.body}>
                        <div className={styles.text1}>
                        Profile
                        </div>
                        <div className={styles.text1}>
                        Favorites
                        </div>
                        <div className={styles.text1}>
                        Watchlist
                        </div>
                        <div className={styles.text1}>
                        My Collections
                        </div>
                        <div className={styles.text1}>
                        Rankings
                        </div>
                    </div>
                </div>

                <div className={styles.cont1}>
                    <div className={styles.head}>
                        Categories
                    </div>
                    <div className={styles.body}>
                        <div className={styles.text1}>
                        Arts
                        </div>
                        <div className={styles.text1}>
                        Collectibles        
                        </div>
                        <div className={styles.text1}>
                        Games
                        </div>
                        <div className={styles.text1}>
                        Sports
                        </div>
                        <div className={styles.text1}>
                        Trading Cards
                        </div>
                    </div>
                </div>

                <div className={styles.cont1}>
                    <div className={styles.cont1_1}>
                        Marketplace
                    </div>
                    <div className={styles.cont1_2}>
                        If you’re an NFT enthusiast or are looking to<br/> download our NFT App.
                    </div>
                    <div className={styles.cont1_3}>
                        <div className={styles.type_email}>
                            <input type="text" placeholder="Type Your Email" />
                        </div>
                        <div className={styles.sub}>
                            Subscribe
                        </div>
                    </div>
                    <div className={styles.cont1_4}>
                        <span><FaFacebookF/></span>
                        <span><FaTwitter/></span>
                        <span><FaInstagram/></span>
                        <span><FaLinkedinIn/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Footer_info};