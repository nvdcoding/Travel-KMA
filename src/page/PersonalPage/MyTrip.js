/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { Tabs } from 'antd';

import "../../assets/css/trip.css";
import { avt, voucher } from "../../constants/images"
import { Link } from "react-router-dom";
export default function MyTrip() {
    const { TabPane } = Tabs;

    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="My-trip__wrapper">
                    <div className="content">
                        <Tabs defaultActiveKey="1" className="mytrip-menu" tabPosition="left">
                            <TabPane tab={
                                <div className="mytrip-menu-item">
                                    <i className="fa-solid fa-suitcase-rolling"></i>
                                    <p className="mytrip-menu-name">
                                        Chuyến đi
                                    </p>
                                </div>
                            }
                                key="1"
                            >
                                <Tabs defaultActiveKey="1" className="mytrip-sub-menu">
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Tất cả
                                            </p>
                                        }
                                        key="1"
                                    >
                                        <div className="mytrip-order">
                                            <div className="mytrip-order-item">
                                                <div className="mytrip-order__header">
                                                    <div className="mytrip-order__header-left">
                                                        <p className="mytrip-order__name">Mai Lam HDV</p>
                                                        <div className="mytrip-order__chat">
                                                            <i className="fa-regular fa-comments"></i>
                                                            <p className="mytrip-order__contact">Chat</p>
                                                        </div>

                                                    </div> <div className="mytrip-order__header-right">
                                                        Đã đi
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__main">
                                                    <div className="mytrip-order__main-left">
                                                        <img className="mytrip-order-img" alt="" src={avt} />
                                                        <h4 className="mytrip-order-name">Bắc Ninh ngày và đêm</h4>
                                                    </div>
                                                    <div className="mytrip-order__main-right">
                                                        <p className="mytrip-order__main-price">12.0000đ</p>
                                                        <p className="mytrip-order__main-price-km">11.0000đ</p>
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__rate">
                                                    <p className="mytrip-order__rate-note">Không nhận được đánh giá</p>
                                                    <div className="button button--primary">Đánh giá</div>
                                                </div>
                                            </div>
                                            <div className="mytrip-order-item">
                                                <div className="mytrip-order__header">
                                                    <div className="mytrip-order__header-left">
                                                        <p className="mytrip-order__name">Mai Lam HDV</p>
                                                        <div className="mytrip-order__chat">
                                                            <i className="fa-regular fa-comments"></i>
                                                            <p className="mytrip-order__contact">Chat</p>
                                                        </div>

                                                    </div> <div className="mytrip-order__header-right">
                                                        Đã đi
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__main">
                                                    <div className="mytrip-order__main-left">
                                                        <img className="mytrip-order-img" alt="" src={avt} />
                                                        <h4 className="mytrip-order-name">Bắc Ninh ngày và đêm</h4>
                                                    </div>
                                                    <div className="mytrip-order__main-right">
                                                        <p className="mytrip-order__main-price">12.0000đ</p>
                                                        <p className="mytrip-order__main-price-km">11.0000đ</p>
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__rate">
                                                    <p className="mytrip-order__rate-note">Không nhận được đánh giá</p>
                                                    <div className="button button--primary">Đánh giá</div>
                                                </div>
                                            </div>
                                            <div className="mytrip-order-item">
                                                <div className="mytrip-order__header">
                                                    <div className="mytrip-order__header-left">
                                                        <p className="mytrip-order__name">Mai Lam HDV</p>
                                                        <div className="mytrip-order__chat">
                                                            <i className="fa-regular fa-comments"></i>
                                                            <p className="mytrip-order__contact">Chat</p>
                                                        </div>

                                                    </div> <div className="mytrip-order__header-right">
                                                        Đã đi
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__main">
                                                    <div className="mytrip-order__main-left">
                                                        <img className="mytrip-order-img" alt="" src={avt} />
                                                        <h4 className="mytrip-order-name">Bắc Ninh ngày và đêm</h4>
                                                    </div>
                                                    <div className="mytrip-order__main-right">
                                                        <p className="mytrip-order__main-price">12.0000đ</p>
                                                        <p className="mytrip-order__main-price-km">11.0000đ</p>
                                                    </div>
                                                </div>
                                                <div className="mytrip-order__rate">
                                                    <p className="mytrip-order__rate-note">Không nhận được đánh giá</p>
                                                    <div className="button button--primary">Đánh giá</div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Chờ xác nhận
                                            </p>
                                        }
                                        key="2"
                                    >
                                        Tất cả
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Đã đi
                                            </p>
                                        }
                                        key="3"
                                    >
                                        Tất cả
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Đã hủy
                                            </p>
                                        }
                                        key="4"
                                    >
                                        Tất cả
                                    </TabPane>
                                </Tabs>
                            </TabPane>
                            <TabPane
                                tab={
                                    <div className="mytrip-menu-item">
                                        <i className="fa-solid fa-tags"></i>
                                        <p className="mytrip-menu-name">
                                            Mã giảm giá
                                        </p>
                                    </div>
                                }
                                key="2"
                            >
                                <h3 className="mytrip-voucher__search">Kho vocher</h3>
                                <div className="mytrip-voucher-box-search">
                                    <h4 className="mytrip-voucher__title">Mã giảm giá</h4>
                                    <input placeholder="nhập mã voucher..." />
                                    <div className="button button--primary">Tìm</div>
                                </div>
                                <Tabs defaultActiveKey="1" className="mytrip-sub-menu">
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Hiệu lực
                                            </p>
                                        }
                                        key="1"
                                    >
                                        <div className="mytrip-voucher">
                                            <div className="mytrip-voucher-item">
                                                <div className="mytrip-voucher-left">
                                                    <img className="mytrip-voucher-img" alt="" src={voucher} />
                                                    <h4 className="mytrip-voucher-name">Tên Voucher</h4>
                                                </div>
                                                <div className="mytrip-voucher-right">
                                                    <div className="mytrip-voucher-top">
                                                        <h3 className="mytrip-voucher-title">Giảm 10% đơn 20k giảm 210k</h3>
                                                        <p className="mytrip-voucher-use">Dùng ngay</p>
                                                    </div>
                                                    <div className="mytrip-voucher-bottom">
                                                        <h3 className="mytrip-voucher-time">Sắp hết hạn: Còn 4 giờ</h3>
                                                        <p className="mytrip-voucher-condition">Điều kiện</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mytrip-voucher-item">
                                                <div className="mytrip-voucher-left">
                                                    <img className="mytrip-voucher-img" alt="" src={voucher} />
                                                    <h4 className="mytrip-voucher-name">Tên Voucher</h4>
                                                </div>
                                                <div className="mytrip-voucher-right">
                                                    <div className="mytrip-voucher-top">
                                                        <h3 className="mytrip-voucher-title">Giảm 10% đơn 20k giảm 210k</h3>
                                                        <p className="mytrip-voucher-use">Dùng ngay</p>
                                                    </div>
                                                    <div className="mytrip-voucher-bottom">
                                                        <h3 className="mytrip-voucher-time">Sắp hết hạn: Còn 4 giờ</h3>
                                                        <p className="mytrip-voucher-condition">Điều kiện</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mytrip-voucher-item">
                                                <div className="mytrip-voucher-left">
                                                    <img className="mytrip-voucher-img" alt="" src={voucher} />
                                                    <h4 className="mytrip-voucher-name">Tên Voucher</h4>
                                                </div>
                                                <div className="mytrip-voucher-right">
                                                    <div className="mytrip-voucher-top">
                                                        <h3 className="mytrip-voucher-title">Giảm 10% đơn 20k giảm 210k</h3>
                                                        <p className="mytrip-voucher-use">Dùng ngay</p>
                                                    </div>
                                                    <div className="mytrip-voucher-bottom">
                                                        <h3 className="mytrip-voucher-time">Sắp hết hạn: Còn 4 giờ</h3>
                                                        <p className="mytrip-voucher-condition">Điều kiện</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane
                                        tab={
                                            <p className="mytrip-sub-menu-name">
                                                Hết hiệu lực
                                            </p>
                                        }
                                        key="2"
                                    >
                                        Tất cả
                                    </TabPane>
                                </Tabs>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

            </Layout>

        </>
    );
}