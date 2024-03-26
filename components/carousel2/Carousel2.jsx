'use client'
import styles from "./Carousel2.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

import { FaEthereum } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";





function Carousel2() {

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
          <div className={styles.card}>
            <div className={styles.img}>
               <Image src="/carousel_drops_img1.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
              <div className={styles.cont1}>
                <div className={styles.text1}>
                  Science Jobs
                </div>
                <div className={styles.likes}>
                <FaRegHeart className={styles.likes_icon}/> 24
                </div>
              </div>
              <div className={styles.cont2}>
                <div className={styles.text2}>
                  <FaEthereum color="03DB80"/>From 1.362 ETH
                </div>
                <div className={styles.peoples}>
                  <Image src="/Group1000002085.png" width={60} height={24} alt="peoples img"/>
                </div>
              </div>
              <div className={styles.cont3}>
                <div className={styles.btn}>
                  LIVE NOW
                </div>
              </div>
            </div>
          </div>
        </div>,

        <div className={styles.item}>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image src="/carousel_drops_img2.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
              <div className={styles.cont1}>
                <div className={styles.text1}>
                  Tyler Hobbs
                </div>
                <div className={styles.likes}>
                  <FaRegHeart className={styles.likes_icon} /> 219
                </div>
              </div>
              <div className={styles.cont2}>
                <div className={styles.text2}>
                  <FaEthereum color="03DB80" />From 2.598 ETH
                </div>
                <div className={styles.peoples}>
                  <Image src="/Group1000002085.png" width={60} height={24} alt="peoples img" />
                </div>
              </div>
              <div className={styles.cont3}>
                <div className={styles.btn}>
                  LIVE NOW
                </div>
              </div>
            </div>
          </div>
        </div>,
        
        <div className={styles.item}>
          <div className={styles.card}>
            <div className={styles.img}>
               <Image src="/carousel_drops_img3.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
              <div className={styles.cont1}>
                <div className={styles.text1}>
                  QQL Mint Pass
                </div>
                <div className={styles.likes}>
                <FaRegHeart className={styles.likes_icon}/>2432
                </div>
              </div>
              <div className={styles.cont2}>
                <div className={styles.text2}>
                  <FaEthereum color="03DB80"/>From 8.098 ETH
                </div>
                <div className={styles.peoples}>
                  <Image src="/Group1000002085.png" width={60} height={24} alt="peoples img"/>
                </div>
              </div>
              <div className={styles.cont3}>
                <div className={styles.btn}>
                  LIVE NOW
                </div>
              </div>
            </div>
          </div>
        </div>,

        <div className={styles.item}>
          <div className={styles.card}>
            <div className={styles.img}>
              <Image src="/carousel_drops_img4.png" width={264} height={232} alt="img1" />
            </div>
            <div className={styles.cont0}>
              <div className={styles.cont1}>
                <div className={styles.text1}>
                  Mathcastles
                </div>
                <div className={styles.likes}>
                  <FaRegHeart className={styles.likes_icon} /> 398
                </div>
              </div>
              <div className={styles.cont2}>
                <div className={styles.text2}>
                  <FaEthereum color="03DB80" />From 3.598 ETH
                </div>
                <div className={styles.peoples}>
                  <Image src="/Group1000002085.png" width={60} height={24} alt="peoples img" />
                </div>
              </div>
              <div className={styles.cont3}>
                <div className={styles.btn}>
                  LIVE NOW
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
  
  export default Carousel2