import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer', 'grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-2-4', 'm-4', 'c-12')}>
                        <div className={cx('footer__link-wrapper')}>
                            <p className={cx('footer__link-title')}>
                                Title for Link
                            </p>
                            <ul className={cx('footer__link-list')}>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2-4', 'm-4', 'c-12')}>
                        <div className={cx('footer__link-wrapper')}>
                            <p className={cx('footer__link-title')}>
                                Title for Link
                            </p>
                            <ul className={cx('footer__link-list')}>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2-4', 'm-4', 'c-12')}>
                        <div className={cx('footer__link-wrapper')}>
                            <p className={cx('footer__link-title')}>
                                Title for Link
                            </p>
                            <ul className={cx('footer__link-list')}>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2-4', 'm-4', 'c-12')}>
                        <div className={cx('footer__link-wrapper')}>
                            <p className={cx('footer__link-title')}>
                                Title for Link
                            </p>
                            <ul className={cx('footer__link-list')}>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col', 'l-2-4', 'm-4', 'c-12')}>
                        <div className={cx('footer__link-wrapper')}>
                            <p className={cx('footer__link-title')}>
                                Title for Link
                            </p>
                            <ul className={cx('footer__link-list')}>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                                <a className={cx('footer__link')}>
                                    <li className={cx('footer__link-item')}>
                                        Any Link
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('contact')}>
                        <div className={cx('contact__icon-wrapper')}>
                            <a
                                href="https://github.com/hvnganh"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={cx('contact__icon')}
                                    icon={faGithub}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anh-nguy%E1%BB%85n-6982341b5/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className={cx('contact__icon')}
                                    icon={faLinkedin}
                                />
                            </a>
                        </div>
                        <div className={cx('contact__design-wrapper')}>
                            <p className={cx('contact__design')}>
                                Design by{' '}
                                <span className={cx('contact__designer')}>
                                    Hvnganh
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
