import Image from "next/image";
import styles from "./Crystal.module.css"


const Crystal = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.cont1}>
                    <Image src="/home5-s-2-1.png" width={466} height={486} alt="img home"/>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.cont3}>
                        <div className={styles.text1}>
                            Create, Sell well & Collect Your Best<br/> Very Fast NFTs.
                        </div>
                        <div className={styles.text2}>
                            Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of lorem ipsum is to create a<br/> natural looking block of text sentence, paragraph, page, etc. that doesnt distract from the<br/> layout. A practice not without controversy, laying out pages with meaningless
                        </div>
                    </div>
                    <div className={styles.text3}>
                        <a href="#homepage">Connect Wallet</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export {Crystal};