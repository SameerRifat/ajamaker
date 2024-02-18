import React from "react";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import RightCard from "../AppCards/RightCard";
import LeftCard from "../AppCards/LeftCard";
import cx from "classnames";
const HeroSection = () => {
  return (
    <section className={`${styles.hero_container}`}>
      <div className={`container ${styles.hero_sub_container}`}>
        <div className={styles.hero_left}>
          <div className={styles.intro_card}>
            <Image src="/medal.png" alt="medal icon" width={22} height={22} />
            <span>The leading finance applications</span>
          </div>
          <h1 className={cx(styles.hero_heading, "typoH2")}>
            A better way to
            <br />
            manage your
            <br />
            <span className={styles.secondary_color}>
              money
              <Image
                width={150}
                height={10}
                src="/hero-underline.png"
                alt="underline"
              />
            </span>
          </h1>
          <p className={cx("typoBody1", styles.hero_description)}>
            Ajamaker provides best features to organize your
            <br />
            expenses in one application and save more money
          </p>
          <Link href="#" className="primary_btn">
            Get Started
          </Link>
        </div>
        <div className={styles.hero_right}>
          <div className={styles.app_wrapper}>
            <LeftCard hero />
            <Image
              quality={100}
              width={225}
              height={400}
              src="/hero-app.png"
              alt="hero app"
              style={{
                zIndex: 10,
                position: 'relative'
              }}
            />
            <RightCard hero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
