/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import "../assets/css/pay.css";
export default function Pay() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div class="pay__wrapper">
                    <div class="method-payment-component">
                        <div class="pathway">
                            <div class="content">
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                    <li><strong>Thanh toán online</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div class="payment-online">
                            <div class="content">
                                <h3 class="payment-online__title">Chọn phương thức thanh toán</h3>
                                <div class="payment-online__inner">
                                    <div class="payment-online__left">
                                        <div class="payment-online__row">
                                            <h4 class="payment-online__sub">
                                                Chọn phương thức thanh toán*
                                            </h4>
                                            <div class="method-payment">
                                                <ul class="method-payment__list">
                                                    <li class="method-payment__item">
                                                        <div class="method-payment__left">
                                                            <span class="method-payment__icon">
                                                                <img src="http://media.vietteltelecom.vn/upload//88/ad/d8/0535006780b9b3c234343bafa8fa718116781b1d.png"
                                                                    width="30" height="30" />
                                                            </span>
                                                            <div class="method-payment__detail">
                                                                <div class="method-payment__info">
                                                                    <div class="method-payment__top js-toggle">
                                                                        <h5 class="method-payment__name">
                                                                            Viettel Paygate: ATM/VISA
                                                                        </h5>
                                                                    </div>
                                                                    <div class="method-payment__choose">
                                                                        <label class="radio-custom1">
                                                                            <input type="radio" name="radio" />
                                                                            <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <p class="method-payment__des">
                                                                    <span>Chiết khấu 3%</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="payment-online__right">
                                        <div class="order-payment">
                                            <h4 class="order-payment__title">
                                                Thông tin đơn hàng
                                            </h4>
                                            <ul class="order-payment__list">
                                                <li class="order-payment__item">
                                                    <span class="order-payment__name">
                                                        Tổng tiền
                                                    </span>
                                                    <span class="order-payment__value">
                                                        10.000đ
                                                    </span>
                                                </li>
                                                <li class="order-payment__item">
                                                    <span class="order-payment__name">
                                                        9.00d
                                                    </span>
                                                    <span class="order-payment__value">
                                                        -2.000đ
                                                    </span>
                                                </li>
                                                <li class="order-payment__item">
                                                    <span class="order-payment__name">
                                                        max giam gia
                                                    </span>
                                                    <span class="order-payment__value">
                                                        -ma gia gia đ
                                                    </span>
                                                </li>
                                                <li class="order-payment__item last">
                                                    <span class="order-payment__name">
                                                        Tổng thanh toán
                                                    </span>
                                                    <span class="order-payment__value">
                                                        10.000đ
                                                    </span>
                                                </li>
                                            </ul>
                                            <div class="order-payment__btn">
                                                <a class="button button--primary" href="javascript:void(0)">
                                                    Đồng ý
                                                </a>
                                                <a href="javascript:void(0)"
                                                    class="button button--normal">Quay
                                                    lại</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="hot-line">
                                    <li class="hot-line__item">
                                        <span class="hot-line__icon">
                                            <img src="https://viettel.vn/images_content/payment-online-new/ic-sp.png" alt="img" />
                                        </span>
                                        <span class="hot-line__name">CSKH: 18008098</span>
                                    </li>
                                    <li class="hot-line__item">
                                        <span class="hot-line__icon">
                                            <img src="https://viettel.vn/images_content/payment-online-new/ic-contact.png" alt="img" />
                                        </span>
                                        <span class="hot-line__name">Miền Bắc: 0989 198 198</span>
                                    </li>
                                    <li class="hot-line__item">
                                        <span class="hot-line__icon">
                                            <img src="https://viettel.vn/images_content/payment-online-new/ic-contact.png" alt="img" />
                                        </span>
                                        <span class="hot-line__name">Miền Nam: 0989 198 198</span>
                                    </li>
                                    <li class="hot-line__item">
                                        <span class="hot-line__icon">
                                            <img src="https://viettel.vn/images_content/payment-online-new/ic-sms.png" alt="img" />
                                        </span>
                                        <span class="hot-line__name">Email: cskh@.com.vn</span>
                                    </li>
                                    <li class="hot-line__item">
                                        <span class="hot-line__icon">
                                            <img src="https://viettel.vn/images_content/payment-online-new/ic-answer.png" alt="img" />
                                        </span>
                                        <span class="hot-line__name">Group giải đáp online</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
}