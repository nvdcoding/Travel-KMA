/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { banner, address } from "../constants/images";
import "../assets/css/hdv-tour-all.css";
import TourItem from "../components/tourItem";
const tourview = [
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
];
export default function ToursAll() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="tours-all__wrapper">
                    <div className="banner">
                        <img alt="" src={banner} />
                    </div>
                    <div class="content">
                        <div class="pathway">
                            <ul>
                                <li><a href="/">Trang chủ</a></li>
                                <li><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                <li>Tour</li>
                                <li><span><i class="fa-solid fa-chevron-right"></i></span></li>
                                <li><strong>Xem tất cả</strong></li>
                            </ul>
                        </div>
                        <div className="tours-all__main">
                            <div className="tours-all__left">
                                <div className="tours-all__serch">
                                    <h3 className="travel-title">
                                        Bộ lọc tìm kiếm
                                    </h3>
                                </div>
                            </div>
                            <div className="tours-all__right tours-all__list">
                                {tourview.map((item) => (
                                    <TourItem item={item} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>

        </>
    );
}