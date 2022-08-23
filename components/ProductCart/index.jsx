/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductCart.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export const ProductCart = ({ id, name, image, price }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.push({ pathname: '/product/[id]', query: { id: id } });
            }}
            className={cx('wrapper')}
        >
            <div className={cx('product')}>
                <div className={cx('product__img-wrapper')}>
                    <img
                        className={cx('product__img')}
                        src={image}
                        alt="product-img"
                    />
                </div>
                <div className={cx('product__info')}>
                    <p className={cx('product__info-name')}>{name}</p>
                    <p className={cx('product__info-price')}>{price} $</p>
                </div>
            </div>
        </div>
    );
};
