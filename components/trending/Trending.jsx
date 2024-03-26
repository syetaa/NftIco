import styles from "./Trending.module.css"


const Trending = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text1}>
                    <span className={styles.nfts}>NFTs</span>  
                </div>
                <div className={styles.text2}>
                    Trending NFTs
                </div>
            </div>
            
        </div>
    )
}

export {Trending};