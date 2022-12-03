/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { Tabs } from 'antd';

import "../../assets/css/trip.css";
import { avt } from "../../constants/images"
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
                        <div className="mytrip-left">
                            <div className="mytrip-name">
                                <img alt="" src={avt} />
                                <div className="mytrip-title">
                                    <p className="name">Mai Lam</p>
                                    <p className="edit"><Link to="/trang-ca-nhan"></Link><i className="fa-regular fa-pen-to-square"></i>Sửa hồ sơ</p>
                                </div>
                            </div>
                            <br className="line" />
                            <Tabs defaultActiveKey="1" className="mytrip-menu" tabPosition="left">
                                <TabPane
                                    tab={
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
                                                <div className="mytrip-menu-item">
                                                    <i className="fa-solid fa-suitcase-rolling"></i>
                                                    <p className="mytrip-menu-name">
                                                        Chuyến đi
                                                    </p>
                                                </div>
                                            }
                                            key="1"
                                        >
                                            Tab 1
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
                                            Tab 2
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
                                    Tab 2
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="mytrip-right"></div>
                    </div>

                </div>
            </Layout>

        </>
    );
}