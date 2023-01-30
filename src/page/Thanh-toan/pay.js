/* eslint-disable */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/layout/layout";
import "../../assets/css/pay.css";
export default function Pay() {
  let history = useHistory();
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="pay__wrapper">
          <div className="method-payment-component">
            <div className="pathway">
              <div className="content">
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li>
                    <strong>Thanh toán online</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-online">
              <div className="content">
                <h3 className="payment-online__title">
                  Chọn phương thức thanh toán
                </h3>
                <div className="payment-online__inner">
                  <div className="payment-online__left">
                    <div className="payment-online__row">
                      <h4 className="payment-online__sub">
                        Chọn phương thức thanh toán*
                      </h4>
                      <div className="method-payment">
                        <ul className="method-payment__list">
                          <li className="method-payment__item">
                            <div className="method-payment__left">
                              <span className="method-payment__icon">
                                <img
                                  src="http://media.vietteltelecom.vn/upload//88/ad/d8/0535006780b9b3c234343bafa8fa718116781b1d.png"
                                  width="30"
                                  height="30"
                                />
                              </span>
                              <div className="method-payment__detail">
                                <div className="method-payment__info">
                                  <div className="method-payment__top js-toggle">
                                    <h5 className="method-payment__name">
                                      Viettel Paygate: ATM/VISA
                                    </h5>
                                  </div>
                                  <div className="method-payment__choose">
                                    <label className="radio-custom1">
                                      <input type="radio" name="radio" />
                                      <span className="checkmark"></span>
                                    </label>
                                  </div>
                                </div>
                                <p className="method-payment__des">
                                  <span>Chiết khấu 3%</span>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="payment-online__right">
                    <div className="order-payment">
                      <h4 className="order-payment__title">
                        Thông tin đơn hàng
                      </h4>
                      <ul className="order-payment__list">
                        <li className="order-payment__item">
                          <span className="order-payment__name">Tổng tiền</span>
                          <span className="order-payment__value">10.000đ</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">9.00d</span>
                          <span className="order-payment__value">-2.000đ</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">
                            max giam gia
                          </span>
                          <span className="order-payment__value">
                            -ma gia gia đ
                          </span>
                        </li>
                        <li className="order-payment__item last">
                          <span className="order-payment__name">
                            Tổng thanh toán
                          </span>
                          <span className="order-payment__value">10.000đ</span>
                        </li>
                      </ul>
                      <div className="order-payment__btn">
                        <a className="button button--primary" href="#">
                          Đồng ý
                        </a>
                        <div
                          className="button button--normal"
                          onClick={() => history.goBack()}
                        >
                          Quay lại
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="hot-line">
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-sp.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">CSKH: 18008098</span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-contact.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Miền Bắc: 0989 198 198
                    </span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-contact.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Miền Nam: 0989 198 198
                    </span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-sms.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">Email: cskh@.com.vn</span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-answer.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Group giải đáp online
                    </span>
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
