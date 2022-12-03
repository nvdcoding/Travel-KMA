/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import "../../assets/css/hdv-tour-all.css";
import HdvItem from "../../components/hdvItem";
const tourview = [
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg", id: "456789367289o0-1", avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
];
export default function HdvAll() {
    useEffect(() => {
    }, []);
    return (
        <>
            <Layout>
                <div className="hdv-all__wrapper">
                    <div className="banner">
                        <img alt="" src="https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg" />
                    </div>
                    <div className="content">
                        <div className="hdv-search">
                            <p className="search-title">Sắp xếp theo</p>
                            <select name="" id="" className="">
                                <option defaultChecked value="">Tỉnh/thành phố</option>
                            </select>
                            <select name="" id="" className="">
                                <option defaultChecked value="">Đánh giá</option>
                            </select>
                            <select name="" id="" className="">
                                <option defaultChecked value="">Phổ biến</option>
                            </select>
                            <select name="" id="" className="">
                                <option defaultChecked value="">Tuổi tác</option>
                            </select>
                            <select name="" id="" className="">
                                <option defaultChecked value="">Giới tính</option>
                            </select>
                        </div>
                        <div className="hdv-all__list">
                            {tourview.map((item, index) => (
                                <HdvItem item={item} key={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </Layout>

        </>
    );
}