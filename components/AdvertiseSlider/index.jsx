/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import styles from './advertise.module.scss';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const cx = classNames.bind(styles);

export const AdvertiseSlider = () => {
    return (
        <div className={cx('advertise-wrapper')}>
            <Carousel className={cx('advertise')}>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.semtek.com.vn/wp-content/uploads/2021/05/1-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.marketing91.com/wp-content/uploads/2018/12/Advertising-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://files.merca20.com/uploads/2018/04/Digital-Advertising-Publicidad-Digital-Bigstock.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.semtek.com.vn/wp-content/uploads/2021/05/1-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.marketing91.com/wp-content/uploads/2018/12/Advertising-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://files.merca20.com/uploads/2018/04/Digital-Advertising-Publicidad-Digital-Bigstock.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.semtek.com.vn/wp-content/uploads/2021/05/1-1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://www.marketing91.com/wp-content/uploads/2018/12/Advertising-3.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={cx('d-block', 'advertise')}
                        src="https://files.merca20.com/uploads/2018/04/Digital-Advertising-Publicidad-Digital-Bigstock.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
