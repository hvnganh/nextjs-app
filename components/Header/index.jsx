import React, { useRef } from 'react';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
    faSearch,
    faHome,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export const Header = () => {
    const router = useRouter();

    const inputRef = useRef();

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header', 'grid', 'wide')}>
                <div className={cx('header__icon-wrapper')}>
                    <FontAwesomeIcon
                        onClick={() => router.push('/')}
                        icon={faHome}
                        className={cx('header__icon')}
                    />
                </div>
                <div className={cx('header__search-wrapper')}>
                    <div className={cx('header__search-container')}>
                        <input
                            ref={inputRef}
                            placeholder="Search Products..."
                            className={cx('header__search-input')}
                        />
                        <div
                            onClick={handleFocusInput}
                            className={cx('header__search-wrapper-icon')}
                        >
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={cx('header__search-icon')}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('header__checkout-wrapper')}>
                    <div className={cx('header__checkout-container')}>
                        <FontAwesomeIcon
                            onClick={() => router.push('/checkout')}
                            icon={faShoppingCart}
                            className={cx('header__checkout-icon')}
                        />
                        <span className={cx('header__checkout-count')}>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
