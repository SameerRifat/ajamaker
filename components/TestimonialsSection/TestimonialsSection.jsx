import React from 'react'
import styles from './TestimonialsSection.module.scss'
import { TestimonialsData } from '@/constants'
import Image from 'next/image'

const TestimonialsSection = () => {
    return (
        <section className={`container ${styles.testimonials_container}`}>
            <h2 className='section_heading_black'>
                Our happy customers
            </h2>
            <div className={styles.testimonials}>
                <div className={styles.testimonial_cards}>
                    {TestimonialsData.map((testimonial, ind) => (
                        <div className={styles.testimonial_card} key={ind}>
                            <Image
                                src='/testimonial-logo.png'
                                alt='logo'
                                width={30}
                                height={30}
                                quality={95}
                            />
                            <p className='description'>
                                “
                                {testimonial.comment}
                                ”
                            </p>
                            <div className={styles.stars}>
                                {[0, 1, 2, 3, 4].map((item, ind) => (
                                    <Image
                                        key={ind}
                                        src='/star.png'
                                        alt='logo'
                                        width={13}
                                        height={13}
                                        quality={95}
                                    />
                                ))}
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.customer}>
                                <Image
                                    src='/avatar.png'
                                    alt='logo'
                                    width={44}
                                    height={44}
                                    quality={95}
                                />
                                <div>
                                    <h5>{testimonial.cust_name}</h5>
                                    <p className='description'>{testimonial.cust_bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection