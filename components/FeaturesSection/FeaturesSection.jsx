import React from 'react'
import styles from './FeaturesSection.module.scss'
import { FeaturesData } from '@/constants'
import Image from 'next/image'

const FeaturesSection = () => {

    return (
        <section className={`container ${styles.features_container}`}>
            <h2 className='section_heading_black'>
                What you can expect
                <br />
                from  our features
            </h2>
            <div className={styles.features}>
                <div className={styles.feature_cards}>
                    {FeaturesData.map((feature, ind) => (
                        <div className={styles.feature_card} key={ind}>
                            <Image
                                src={feature.logo}
                                alt='logo'
                                width={65}
                                height={65}
                                quality={95}
                            />
                            <h4>{feature.heading}</h4>
                            <p className='description'>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection