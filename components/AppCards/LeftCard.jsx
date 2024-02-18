import React from "react";
import styles from "./AppCards.module.scss";
import Image from "next/image";
import Iconify from "../iconify/iconify";

const LeftCard = ({ hero = false }) => {
  return (
    <div
      className={`${styles.card} ${styles.left_card} ${
        hero ? styles.hero_left_card : styles.getStarted_left_card
      }`}
    >
      <small>Transaction History</small>
      <div className={styles.transaction_history}>
        <div className={styles.row}>
          <Iconify icon="noto:shallow-pan-of-food" width={24} />
          <div>
            <div>
              <span className="typoCaption">Food Expense</span>
              <span className="typoBody2">22 Mar, 2023</span>
            </div>
            <span className={styles.price}>-$30</span>
          </div>
        </div>
        <div className={styles.row}>
          <Iconify icon="logos:spotify-icon" width={24} />
          <div>
            <div>
              <span className="typoCaption">Spotify Subscription</span>
              <span className="typoBody2">20 Mar, 2023</span>
            </div>
            <span className={styles.price}>-$100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
