/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { avt, banner } from '../constants/images';
import "../assets/css/personal.css";
export default function Personal() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="personal__wrapper">
                    <div class="personal-page__wrapper">
                        <div class="cover-image">
                            <img alt="" src={banner} />
                        </div>
                        <div class="content">
                            <div class="pathway">
                                <ul>
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                    <li><strong>Trang cá nhân</strong></li>
                                </ul>
                                <div class="personal-page__main">
                                    <div class="personal-page-left">
                                        <div class="personal-page__avt">
                                            <img alt="" src={avt} />
                                        </div>
                                        <h3 class="personal-page__name">Destination Expert for Bolivia</h3>
                                        <div class="personal-page__contact"><button class="button button--primary">Liên hệ</button></div>

                                        <div class="evaluate">
                                            <h4 class="evaluate-title">Hài lòng</h4>
                                            <div class="evaluate-star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star-half-stroke"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                            <p class="evaluate-des">(44 đánh giá)</p>
                                        </div>
                                    </div>
                                    <div class="personal-page-right">
                                        <h3 class="personal-page-title">Hello, my name is Duy</h3>
                                        <p class="personal-page-sub-title">
                                            Mô tả cá nhân nè!!!!
                                        </p>
                                        <div class="personal-page-infomation">
                                            <h3 class="personal-page__title">Thông tin cơ bản</h3>
                                            <ul class="personal-page__list">
                                                <li class="personal-page__item">
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <p class="personal-page__des">Main destination Bolivia</p>
                                                </li>
                                                <li class="personal-page__item">
                                                    <i class="fa-solid fa-map-location-dot"></i>
                                                    <p class="personal-page__des">Expert for Bolivia</p>
                                                </li>
                                                <li class="personal-page__item">
                                                    <i class="fa-solid fa-language"></i>
                                                    <p class="personal-page__des">Ngôn ngữ</p>
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