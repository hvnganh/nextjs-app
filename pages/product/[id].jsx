/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { AdvertiseSlider } from '../../components/AdvertiseSlider';
import { Footer } from '../../components/Footer';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail({ products }) {
    console.log(products);

    return (
        <div className={cx('product-detail__wrapper')}>
            <Head>
                <title>{products.title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={cx('grid', 'wide')}>
                <div className={cx('content-wrapper')}>
                    <div className={cx('product-detail__information')}>
                        <div className={cx('information__image-wrapper')}>
                            <img
                                className={cx('information__image')}
                                src={products.image}
                                alt="product"
                            />
                        </div>
                    </div>

                    <div className={cx('information__product')}>
                        <div className={cx('information__name-wrapper')}>
                            <p className={cx('information__name')}>
                                {products.title}
                            </p>
                        </div>

                        <div className={cx('information__price-wrapper')}>
                            <p className={cx('information__price')}>
                                {products.price} $
                            </p>
                        </div>
                        <div className={cx('information__btn-wrapper')}>
                            <button className={cx('information__btn')}>
                                Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('grid', 'wide')}>
                <div className={cx('desc-wrapper')}>
                    <div className={cx('desc__infor-wrapper')}>
                        <h1 className={cx('desc__infor-title')}>
                            Description:
                        </h1>
                        <p className={cx('desc__infor-desc')}>
                            {products.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('grid', 'wide')}>
                <div className={cx('advertise-wrapper')}>
                    <AdvertiseSlider />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;

export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}