'use client'
import styles from "./Carousel.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";


import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




function Carousel() {

  const renderNextButton = ({ isDisabled }) => {
    return <FaArrowRight size={30} color='#e7ebee66' className={styles.next_btn}/>;
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <FaArrowLeft size={30} color='#e7ebee66' className={styles.prev_btn}/>;
  };



    //Responsiveness 
  const responsive = {
    400: { items: 1 },
    840: { items: 2 },
    1220: { items: 3 },
    1600: { items: 4 },
    2200: { items: 5}
  };



   //The carousel items 
   const items = [
       <div className={styles.item}>
          <div className={styles.card_cont}>
         <div className={styles.card}>
           <div className={styles.img}>
             <Image src="/Nft_pic1.png" width={264} height={232} alt="img1" />
           </div>
           <div className={styles.cont0}>
             <div className={styles.text0}>
               Venture Capitalist
             </div>
             <div className={styles.table}>
               <div className={styles.cont1}>
                 <div className={styles.text1}>
                   From
                 </div>
                 <div className={styles.text2}>
                   Highest bid
                 </div>
               </div>
               <div className={styles.cont2}>
                 <div className={styles.text3}>
                   Not for sale
                 </div>
                 <div className={styles.text4}>
                   2.835 ETH
                 </div>
               </div>
             </div>
           </div>
         </div>
          </div>
           
       </div>,

      <div className={styles.item}>
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src="/Nft_pic2.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
                <div className={styles.text0}>
                CryptoPunks
                </div>
                <div className={styles.table}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                        From
                        </div>
                        <div className={styles.text2}>
                        clon
                        </div>
                    </div>
                    <div className={styles.cont2}>
                        <div className={styles.text3}>
                        Not for sale
                        </div>
                        <div className={styles.text4}>
                        2.790 ETH
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>,

      <div className={styles.item}>
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src="/Nft_pic3.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
                <div className={styles.text0}>
                Art Blocks Curated
                </div>
                <div className={styles.table}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                        From
                        </div>
                        <div className={styles.text2}>
                        Larva Labs
                        </div>
                    </div>
                    <div className={styles.cont2}>
                        <div className={styles.text3}>
                        Not for sale
                        </div>
                        <div className={styles.text4}>
                        0.445 ETH
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>,

      <div className={styles.item}>
        <div className={styles.card}>
        <div className={styles.img}>
            <Image src="/Nft_pic4.png" width={264} height={232} alt="img1" />
        </div>
        <div className={styles.cont0}>
            <div className={styles.text0}>
            Pudgy Penguins
            </div>
            <div className={styles.table}>
                <div className={styles.cont1}>
                    <div className={styles.text1}>
                    From
                    </div>
                    <div className={styles.text2}>
                    Mad Dog Jones
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text3}>
                    Not for sale
                    </div>
                    <div className={styles.text4}>
                    4.035 ETH
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>,

      <div className={styles.item}>
        <div className={styles.card}>
            <div className={styles.img}>
                <Image src="/Nft_pic2.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
                <div className={styles.text0}>
                The Sandbox
                </div>
                <div className={styles.table}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                          From
                        </div>
                        <div className={styles.text2}>
                          Beeple
                        </div>
                    </div>
                    <div className={styles.cont2}>
                        <div className={styles.text3}>
                        Not for sale
                        </div>
                        <div className={styles.text4}>
                        1.884 ETH
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>,
     


  ];



    return (
      <>
        <div className={styles.cont}>
          <div className={styles.carousell}>
            <div className={styles.slider_main}>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay="true"
                autoPlayInterval="1500"
                infinite="true"
                disableDotsControls="true"
                disableButtonsControls="true"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}

              />
            </div>
          </div>
        </div>
        
        
        
      </>
    )
  }
  
  export default Carousel