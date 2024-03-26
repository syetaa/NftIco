import styles from "./Notabledrops.module.css"
import Image from "next/image";




const Notabledrops = () => {
    return(
        <div>
           <div className={styles.textmain}>
                <div className={styles.text1}>
                    <span className={styles.nfts}>NFTs</span>  
                </div>
                <div className={styles.text2}>
                    Selected notable drops
                </div>
            </div>
            
        </div>
    )
}

export {Notabledrops};