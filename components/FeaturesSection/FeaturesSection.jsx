import React from "react";
import styles from "./FeaturesSection.module.scss";
import { FeaturesData } from "@/constants";
import Image from "next/image";
import Iconify from "../iconify/iconify";

const FeaturesSection = () => {
  return (
    <section className={`container ${styles.features_container}`}>
      <h2 className="section_heading_black">
        What you can expect {" "}
        <br />
        from our features
      </h2>
      <div className={styles.features}>
        <div className={styles.feature_cards}>
          {FeaturesData.map((feature, ind) => (
            <div className={styles.feature_card} key={ind}>
              <div className={styles.logo}>
                <Iconify
                  color="#FF6258"
                  icon={feature.logo}
                  width={40}
                  height={40}
                />
              </div>
              <h4
                className="typoH6"
                style={{
                  color: "var(--black)",
                }}
              >
                {feature.heading}
              </h4>
              <p
                className="typoBody2"
                style={{
                  color: "var(--text)",
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
