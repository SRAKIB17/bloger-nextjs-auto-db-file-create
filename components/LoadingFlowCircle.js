import React from 'react';

import styles from './LoadingFlowCircle.module.css'
const LoadingUpDown = () => {
    return (
        <div className='h-full p-4'>
            <div className={styles.loading}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    );
};

export default LoadingUpDown;