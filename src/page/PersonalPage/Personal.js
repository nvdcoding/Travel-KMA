/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { avt, banner } from '../../constants/images';
import "../../assets/css/personal.css";
export default function Personal() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="personal__wrapper">
                    <div className="personal-page__wrapper">
                        <div className="cover-image">
                            <img alt="" src={banner} />
                        </div>
                        <div className="content">
                            <div className="pathway">
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><span><i className="fa-solid fa-chevron-right"></i></span></li>
                                    <li><strong>Trang cá nhân</strong></li>
                                </ul>
                                <div className="personal-page__main">
                                    <div className="personal-page-left">
                                        <div className="personal-page__avt">
                                            <img alt="" src={avt} />
                                        </div>
                                        <h3 className="personal-page__name">Destination Expert for Bolivia</h3>
                                        <div className="personal-page__contact"><button className="button button--primary">Liên hệ</button></div>

                                        <div className="evaluate">
                                            <h4 className="evaluate-title">Hài lòng</h4>
                                            <div className="evaluate-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <p className="evaluate-des">(44 đánh giá)</p>
                                        </div>
                                    </div>
                                    <div className="personal-page-right">
                                        <h3 className="personal-page-title">Hello, my name is Duy</h3>
                                        <p className="personal-page-sub-title">
                                            Mô tả cá nhân nè!!!!
                                        </p>
                                        <div className="personal-page-infomation">
                                            <h3 className="personal-page__title">Thông tin cơ bản</h3>
                                            <ul className="personal-page__list">
                                                <li className="personal-page__item">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <p className="personal-page__des">Main destination Bolivia</p>
                                                </li>
                                                <li className="personal-page__item">
                                                    <i className="fa-solid fa-map-location-dot"></i>
                                                    <p className="personal-page__des">Expert for Bolivia</p>
                                                </li>
                                                <li className="personal-page__item">
                                                    <i className="fa-solid fa-language"></i>
                                                    <p className="personal-page__des">Ngôn ngữ</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
}