import Link from "next/link";
import React from "react";
import Head from 'next/head'
import styles from "../styles/ecompopup.module.css";

const EcomPopup = () => {

    const featureList = [
        "lãi suất",
        "chênh lệch giá",
        "thủ tục phức tạp",
        "mất phí hồ sơ",
        "cần thẻ tín dụng"
    ];

    return (
        <div>
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.Page}>
                <div className={styles.PopupWrapper}>
                    <div className={styles.Popup}>
                        <div className={styles.LogoWrapper}>
                            <Link href='/'>
                                <a className='logo'>
                                    <img src='/images/black-logo.png' alt='image' />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.Content}>
                            <span className={styles.Subtitle}>SHOPPING TRẢ SAU - LUÔN LUÔN MIỄN LÃI</span>
                            <span className={styles.Title}>LỢI ÍCH KHÁC BIỆT</span>
                            <div className={styles.FeatureWrapper}>
                                {
                                    featureList.map(feature => {
                                        return (
                                            <div className={styles.Feature}>
                                                <p style={{fontWeight: "bold"}}>Không </p><p>{feature}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <span className={styles.Title}>CÁC BƯỚC MUA SẮM SAU 5 GIÂY</span>
                            <div className={styles.StepWrapper}>
                                <img src="/images/buying-step.png" alt="buying step"/>
                            </div>
                            <div className={styles.Rule}>
                                <p>Bạn cần phải trên 18 tuổi, là công dân Việt Nam, sở hữu số điện thoại chính chủ từ các nhà mạng Viettel, Mobifone, Vinaphone, và một số tiêu chí khác để được duyệt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EcomPopup;