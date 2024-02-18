"use client";
import React from "react";
import styles from "./AppCards.module.scss";
import Image from "next/image";
import { Icon } from "@iconify/react";

const RightCard = ({ hero = false }) => {
  return (
    <div
      className={`${styles.card} ${styles.right_card} ${
        hero ? styles.hero_right_card : styles.getStarted_right_card
      }`}
    >
      <small>Total Balance</small>
      <div>
        <span>$20,000 USD</span>
        <Icon icon={"lucide:trending-up"} width={24} color="#006D47" />
      </div>
    </div>
  );
};

export default RightCard;
