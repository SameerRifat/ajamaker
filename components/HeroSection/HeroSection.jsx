import React from 'react'
import styles from './HeroSection.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import RightCard from '../AppCards/RightCard'
import LeftCard from '../AppCards/LeftCard'

const HeroSection = () => {
    return (
        <section className={`${styles.hero_container}`}>
            <div className={styles.hero_banner}>
                <img src="/hero-banner.png" alt="banner" />
            </div>
            <div className={`container ${styles.hero_sub_container}`}>
                <div className={styles.hero_left}>
                    <div className={styles.intro_card}>
                        <img
                            src='/medal.png'
                            alt='medal icon'
                            width={15}
                            height={15}
                        />
                        <span>
                            The leading finance applications
                        </span>
                    </div>
                    <h1 className={styles.hero_heading}>
                        A better way to
                        <br />
                        manage your
                        <br />
                        <span className={styles.secondary_color}>
                            money
                            <img src="/hero-underline.png" alt="underline" />
                        </span>
                    </h1>
                    <p className={`description ${styles.hero_description}`}>
                        Ajamaker provides best features to organize your
                        <br />
                        expenses in one application and save more money
                    </p>
                    <Link href='#' className='primary_btn'>
                        Get Started
                    </Link>
                </div>
                <div className={styles.hero_right}>
                    <div className={styles.app_wrapper}>
                        <img src="/hero-app.png" alt="hero app" />
                        <RightCard hero/>
                        <LeftCard hero />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection