import React from 'react'
import styles from './AppCards.module.scss'

const LeftCard = ({ hero = false }) => {
    return (
        <div className={`${styles.card} ${styles.left_card} ${hero ? styles.hero_left_card : styles.getStarted_left_card}`}>
            <h6>Transaction History</h6>
            <div className={styles.transaction_history}>
                <div className={styles.row}>
                    <img src="/food.png" alt="icon" />
                    <div>
                        <div>
                            <span>
                                Food Expense
                            </span>
                            <span>
                                22 Mar, 2023
                            </span>
                        </div>
                        <span>
                            -$30
                        </span>
                    </div>
                </div>
                <div className={styles.row}>
                    <img src="/spotify.png" alt="icon" />
                    <div>
                        <div>
                            <span>
                                Spotify Subscription
                            </span>
                            <span>
                                20 Mar, 2023
                            </span>
                        </div>
                        <span>
                            -$100
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftCard