/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";
import "../assets/css/tour.css";
export default function Tours() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="tours__wrapper">
                    <main className="main-travel">
                        <div className="lp-travel">
                            <div className="lp-travel__banner">
                                <img src="https://vietteltelecom.vn/images_content/banner-travel.png" alt="banner travel" />
                            </div>
                            <div className="lp-travel__detail">
                                <div className="lp-travel__detail-bg"></div>
                                <div className="lp-travel__detail-inner">
                                    <div className="lp-travel__info">
                                        <p className="lp-travel__des">
                                            Cùng viettel khám phá vẻ đẹp của cảnh và người,
                                            để hiểu sâu về văn hóa các vùng miền,
                                            để dâng trào cảm xúc tự hào dân tộc, và thêm yêu tổ quốc.
                                        </p>
                                        <p className="lp-travel__des">
                                            Hè này, nếu bạn đang có ý định đi du lịch, đừng quên
                                            tham khảo các thông tin dưới đây để chuẩn bị cho
                                            mình một kỳ nghỉ tuyệt vời và đáng nhớ.
                                        </p>
                                    </div>
                                    <div className="lp-travel__map">
                                        <div className="lp-travel__map-info">
                                            <div className="lp-travel__map-bg"></div>
                                        </div>
                                    </div>
                                    <a className="lp-travel__location lc-hanoi" href="/du-lich/hanoi"></a>
                                    <a className="lp-travel__location lc-quangninh" href="/du-lich/quangninh"></a>
                                    <a className="lp-travel__location lc-hagiang" href="/du-lich/hagiang"></a>
                                    <a className="lp-travel__location lc-sapa" href="/du-lich/sapa"></a>
                                    <a className="lp-travel__location lc-nghean" href="/du-lich/nghean"></a>
                                    <a className="lp-travel__location lc-mocchau" href="/du-lich/mocchau"></a>
                                    <a className="lp-travel__location lc-ninhbinh" href="/du-lich/ninhbinh"></a>
                                    <a className="lp-travel__location lc-quangbinh" href="/du-lich/quangbinh"></a>
                                    <a className="lp-travel__location lc-hue" href="/du-lich/hue"></a>
                                    <a className="lp-travel__location lc-danang" href="/du-lich/danang"></a>
                                    <a className="lp-travel__location lc-binhdinh" href="/du-lich/binhdinh"></a>
                                    <a className="lp-travel__location lc-daklak" href="/du-lich/daklak"></a>
                                    <a className="lp-travel__location lc-nhatrang" href="/du-lich/nhatrang"></a>
                                    <a className="lp-travel__location lc-dalat" href="/du-lich/dalat"></a>
                                    <a className="lp-travel__location lc-hcm" href="/du-lich/tphochiminh"></a>
                                    <a className="lp-travel__location lc-bentre" href="/du-lich/bentre"></a>
                                    <a className="lp-travel__location lc-cantho" href="/du-lich/cantho"></a>
                                    <a className="lp-travel__location lc-phuquoc" href="/du-lich/phuquoc"></a>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="banner-bg">
                                <img src="https://dulich3mien.vn/wp-content/uploads/2022/07/Dulich3mien-Banner-Du-lich-viet-nam-1-1024x171.jpg"
                                    alt="" />
                                <hr className="line" />
                            </div>
                            <div className="travel-tips">
                                <div className="travel-title-all">
                                    <h3 className="travel-title">
                                        Cẩm nang du lịch
                                    </h3>
                                    <a href="#" className="travel-link">Xem tất cả</a>
                                </div>
                                <div className="travel-tip__content">
                                    <div className="travel-tip__left">
                                        <div className="travel-tip__thumb">
                                            <a className="" href="#">
                                                <img alt=""
                                                    src="https://dulich3mien.vn/wp-content/uploads/2022/11/Roving-Chillhouse-1-585x390.jpg" />
                                            </a>
                                        </div>
                                        <div className="travel-tip__detail">
                                            <a className="" href="#">
                                                <h4 className="travel-tip__title">
                                                    Roving Chillhouse | Quán cafe giữa cánh đồng xanh có gì đặc biệt?
                                                </h4>
                                                <div className="travel-tip__meta">
                                                    <div className="travel-tip__author"><img alt=""
                                                        src="https://fullstack.edu.vn//static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
                                                        <p className="travel-tip__name">Tác giả</p>
                                                    </div>
                                                    <p className="travel-tip__time">20/11/2022</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="travel-tip__right">
                                        <ul className="travel-tip__list">
                                            <li className="travel-tip__item">
                                                <div className="travel-tip__thumb">
                                                    <a className="" href="#">
                                                        <img alt=""
                                                            src="https://dulich3mien.vn/wp-content/uploads/2022/11/Roving-Chillhouse-1-585x390.jpg" />
                                                    </a>
                                                </div>
                                                <div className="travel-tip__detail">
                                                    <a className="" href="#">
                                                        <h4 className="travel-tip__title">
                                                            Roving Chillhouse | Quán cafe giữa cánh đồng xanh có gì đặc biệt?
                                                        </h4>
                                                        <div className="travel-tip__meta">
                                                            <div className="travel-tip__author"><img alt=""
                                                                src="https://fullstack.edu.vn//static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
                                                                <p className="travel-tip__name">Tác giả</p>
                                                            </div>
                                                            <p className="travel-tip__time">20/11/2022</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="travel-tip__item">
                                                <div className="travel-tip__thumb">
                                                    <a className="" href="#">
                                                        <img alt=""
                                                            src="https://dulich3mien.vn/wp-content/uploads/2022/11/Roving-Chillhouse-1-585x390.jpg" />
                                                    </a>
                                                </div>
                                                <div className="travel-tip__detail">
                                                    <a className="" href="#">
                                                        <h4 className="travel-tip__title">
                                                            Roving Chillhouse | Quán cafe giữa cánh đồng xanh có gì đặc biệt?
                                                        </h4>
                                                        <div className="travel-tip__meta">
                                                            <div className="travel-tip__author"><img alt=""
                                                                src="https://fullstack.edu.vn//static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
                                                                <p className="travel-tip__name">Tác giả</p>
                                                            </div>
                                                            <p className="travel-tip__time">20/11/2022</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="travel-tip__item">
                                                <div className="travel-tip__thumb">
                                                    <a className="" href="#">
                                                        <img alt=""
                                                            src="https://dulich3mien.vn/wp-content/uploads/2022/11/Roving-Chillhouse-1-585x390.jpg" />
                                                    </a>
                                                </div>
                                                <div className="travel-tip__detail">
                                                    <a className="" href="#">
                                                        <h4 className="travel-tip__title">
                                                            Roving Chillhouse | Quán cafe giữa cánh đồng xanh có gì đặc biệt?
                                                        </h4>
                                                        <div className="travel-tip__meta">
                                                            <div className="travel-tip__author"><img alt=""
                                                                src="https://fullstack.edu.vn//static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
                                                                <p className="travel-tip__name">Tác giả</p>
                                                            </div>
                                                            <p className="travel-tip__time">20/11/2022</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="travel-tip__item">
                                                <div className="travel-tip__thumb">
                                                    <a className="" href="#">
                                                        <img alt=""
                                                            src="https://dulich3mien.vn/wp-content/uploads/2022/11/Roving-Chillhouse-1-585x390.jpg" />
                                                    </a>
                                                </div>
                                                <div className="travel-tip__detail">
                                                    <a className="" href="#">
                                                        <h4 className="travel-tip__title">
                                                            Roving Chillhouse | Quán cafe giữa cánh đồng xanh có gì đặc biệt?
                                                        </h4>
                                                        <div className="travel-tip__meta">
                                                            <div className="travel-tip__author"><img alt=""
                                                                src="https://fullstack.edu.vn//static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" />
                                                                <p className="travel-tip__name">Tác giả</p>
                                                            </div>
                                                            <p className="travel-tip__time">20/11/2022</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="travel-question">
                                <h3 class="travel-title">CÂU HỎI THƯỜNG GẶP</h3>
                                <hr class="line" />
                                <ul class="custom-collapse">
                                    <li class="custom-collapse__item">
                                        <div class="custom-collapse__header">
                                            <h6 class="custom-collapse__header-name">1. Du lịch Việt Nam nên đi đâu?</h6>
                                            <i class="fa-solid fa-circle-plus custom-collapse__icon"></i>
                                        </div>
                                        <div class="custom-collapse__content">
                                            <span>Cau tra loi</span>
                                        </div>
                                    </li>
                                    <li class="custom-collapse__item">
                                        <div class="custom-collapse__header">
                                            <h6 class="custom-collapse__header-name">1. Du lịch Việt Nam nên đi đâu?</h6>
                                            <i class="fa-solid fa-circle-plus custom-collapse__icon"></i>
                                        </div>
                                        <div class="custom-collapse__content">
                                            <span>Cau tra loi</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </main>
                </div>
            </Layout>

        </>
    );
}