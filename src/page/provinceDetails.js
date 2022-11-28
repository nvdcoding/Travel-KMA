/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import "../assets/css/province-details.css";
export default function ProvinceDetails() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="province-details__wrapper">
                    <div class="discover-detail">
                        <div class="discover-detail__menu">
                            <div class="content">
                                <ul class="discover-detail__menu-list">
                                    <li class="discover-detail__menu-item active">
                                        <a href="#" class="discover-detail__menu-link">
                                            <h5 class="discover-detail__menu-name">KHÁM PHÁ<br />TRẢI NGHIỆM</h5>
                                            <img src="https://vietteltelecom.vn/images_content/img-travel-menu-4.png"
                                                alt="icon KHÁM PHÁ TRẢI NGHIỆM" />
                                        </a>
                                    </li>
                                    <li class="discover-detail__menu-item">
                                        <a href="#" class="discover-detail__menu-link">
                                            <h5 class="discover-detail__menu-name">ẩm thực</h5>
                                            <img src="https://vietteltelecom.vn/images_content/img-travel-menu-3.png" alt="icon ẩm thực" />
                                        </a>
                                    </li>
                                    <li class="discover-detail__menu-item">
                                        <a href="#" class="discover-detail__menu-link">
                                            <h5 class="discover-detail__menu-name">mua sắm</h5>
                                            <img src="https://vietteltelecom.vn/images_content/img-travel-menu-2.png" alt="icon mua sắm" />
                                        </a>
                                    </li>
                                    <li class="discover-detail__menu-item">
                                        <a href="#" class="discover-detail__menu-link">
                                            <h5 class="discover-detail__menu-name">hành trang</h5>
                                            <img src="https://vietteltelecom.vn/images_content/img-travel-menu-1.png" alt="icon hành trang" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="discover-detail__info">
                            <div class="content">
                                <h3 class="discover-detail__info-title">
                                    Bà Nà Hills
                                </h3>
                                <div class="discover-detail__info-intro discover-detail__info-des">Ai đến Đà Nẵng lần đầu đều sẽ có mong
                                    muốn “cháy bỏng” được tham quan Bà Nà Hills bởi vẻ đẹp đã được rất nhiều du khách khen ngợi của
                                    nơi đây. Có thể nói, Bà Nà Hills chính là một châu Âu thu nhỏ ngay trên đỉnh núi, một trong các
                                    địa điểm du lịch Đà Nẵng độc đáo và vô giá của Việt Nam. Du khách muốn đến đây sẽ mua phải đi
                                    cáp treo lên tới đỉnh núi Bà Nà. Ngoài không gian với lối kiến trúc Pháp lãng mạn, nguy nga ngay
                                    trên đỉnh núi hội tụ tất cả các dịch vụ sang trọng, hấp dẫn như nhà hàng, công viên giải trí
                                    Fantasy Park, hầm rượu debay, bảo tàng sáp, vườn hoa,…điểm thu hút du khách khác nữa ở khu du
                                    lịch Đà Nẵng chính là nơi đây sở hữu khí hậu 4 mùa trong một ngày khá thú vị.
                                    <br />
                                    <img src="https://vietteltelecom.vn/travel/images/kpdn1.jpg" alt="Bà Nà Hills" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
}