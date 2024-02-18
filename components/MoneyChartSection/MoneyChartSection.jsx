import React from "react";
import styles from "./MoneyChartSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

const MoneyChartSection = () => {
  return (
    <section className={styles.money_chart_section}>
      <div className={`container ${styles.money_chart_section_container}`}>
        <div>
          <Image
            src="/moneyChartSectionImg.png"
            alt="line"
            width={252}
            height={9.5}
            className={styles.img}
          />
        </div>
        <h2 className={cx("typoH3", "section_heading_white")}>
          Provides users a new chart to manage <br />
          their money
        </h2>
        <p>
          Ajamaker provides best features to
          <br />
          organize your expenses in one
          <br />
          application and save more money
        </p>
        <Link href="#" className="primary_btn">
          Get Ajamaker
        </Link>
        {/* <Link href='#' className={styles.btn}>
          Get Ajamaker
        </Link> */}
      </div>
    </section>
  );
};

export default MoneyChartSection;
