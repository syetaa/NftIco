import Image from "next/image";
import styles from "./Discover.module.css"
import { FaPlay } from "react-icons/fa6";


const Discover = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text0}>
                    <div className={styles.text1}>
                        Discover, collect, and sell <br/>extraordinary <span className={styles.nfts}>NFTs</span> 
                    </div>
                    <div className={styles.text2}>
                        Our marketplace is the world’s first and largest NFT<br/> market for independent creators worldwide           
                    </div>
                    <div className={styles.text3}>
                        <a className={styles.btn1} href="#">Explore</a>
                        <a className={styles.btn2} href="#">Create</a>
                    </div>
                    <div className={styles.text4}>
                        <FaPlay color="#fff"/> Learn more about Nftico
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src="/PicHome.png" width={466} height={618} alt="Home png"/>
                </div>
                
            </div>
            
        </div>
    )
}

export {Discover};