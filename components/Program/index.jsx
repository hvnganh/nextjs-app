/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './program.module.scss';

const cx = classNames.bind(styles);

export const Program = () => {
    return (
        <div className={cx('program-wrapper')}>
            <img
                className={cx('program')}
                src="https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34877.jpg?w=2000"
                alt="discount"
            />
        </div>
    );
};
