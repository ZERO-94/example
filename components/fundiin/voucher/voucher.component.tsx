import React from "react";
import styles from './voucher.module.scss';

const Voucher = () => {
    return (
        <div className={styles.VoucherWrapper}>
                <img id="voucher" src="/images/voucher/voucher.svg" alt="voucher"/>
        </div>
    );
}

export default Voucher;