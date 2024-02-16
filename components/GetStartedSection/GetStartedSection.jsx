import React from 'react'
import styles from './GetStartedSection.module.scss'
import Image from 'next/image'
import RightCard from '../AppCards/RightCard'
import LeftCard from '../AppCards/LeftCard'

const GetStartedSection = () => {
    return (
        <section className={styles.get_started_section}>
            <div className={styles.bg_images_container}>
                <div className={styles.ellipse_large}>
                    <img
                        src='/ellipse-large.png'
                        alt='background'
                    />
                </div>
                <div className={styles.ellipse_small}>
                    <img
                        src='/ellipse-small.png'
                        alt='background'
                    />
                </div>
            </div>
            <div className={`${styles.get_started_content}`}>
                <h2 className='section_heading_white'>
                    Get started with AJAMaker and manage your
                    <br />
                    money more wisely than before
                </h2>
                <form className={styles.get_started_form}>
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                    />
                    <button type='submit'>
                        Send
                    </button>
                </form>
                <div className={styles.app_wrapper}>
                    <div className={styles.app_img}>
                        <img
                            src='/app.png'
                            alt='background'
                        />
                        <RightCard />
                        <LeftCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStartedSection