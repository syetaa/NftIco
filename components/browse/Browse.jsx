import styles from "./Browse.module.css"


const Browse = () => {
    return(
        <div>
            <div className={styles.textmain}>
                <div className={styles.text1}>
                    <span className={styles.nfts}>NFTs</span>
                </div>
                <div className={styles.text2}>
                    Browse popular NFTs
                </div>
            </div>
            
        </div>
    )
}

export {Browse};