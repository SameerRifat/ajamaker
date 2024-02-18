import React from "react";
import styles from "./TestimonialsSection.module.scss";
import { TestimonialsData } from "@/constants";
import Image from "next/image";
import cx from "classnames";
import Iconify from "../iconify/iconify";

const TestimonialsSection = () => {
  return (
    <section className={`container ${styles.testimonials_container}`}>
      <h2 className="section_heading_black">Our happy customers</h2>
      <div className={styles.testimonials}>
        <div className={styles.testimonial_cards}>
          {TestimonialsData.map((testimonial, ind) => (
            <div className={styles.testimonial_card} key={ind}>
              <span className={styles.comment_icon}>
                <Iconify
                  icon="iconamoon:comment-dots-light"
                  color="#5891FF"
                  width={20}
                />
              </span>
              <p className={cx("typoBody2", styles.comment)}>
                “{testimonial.comment}”
              </p>
              <div className={styles.stars}>
                {[0, 1, 2, 3, 4].map((item, ind) => (
                  <Iconify
                    icon="ph:star-fill"
                    color="#F9AA11"
                    width={20}
                    key={ind}
                  />
                ))}
              </div>
              <div className={styles.divider} />
              <div className={styles.customer}>
                <Image
                  src="/avatar2.png"
                  alt="logo"
                  width={60}
                  height={60}
                  quality={100}
                />
                <div>
                  <h5 className="typoSubtitle2">{testimonial.cust_name}</h5>
                  <p className="typoCaption">{testimonial.cust_bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
