/* eslint-disable */

import React, { useEffect } from "react";
import { adjust, global, vocher, avt, people, address } from "../../constants/images";
import OwlCarousel from 'react-owl-carousel';
const images = [
    { img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/f5eb7be92c10a7cd.jpeg", link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/24183ef65af1849b.jpeg", link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/68fe37a1fec76684.jpeg", link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
];
const person = [
    { img: { people }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", title: "Lam Mai", address: "HDV Bắc Ninh" },
    { img: { people }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", title: "Lam Mai 1", address: "HDV Bắc Ninh 1" },
    { img: { people }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", title: "Lam Mai 2", address: "HDV Bắc Ninh 2" },
    { img: { people }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", title: "Lam Mai 3", address: "HDV Bắc Ninh 3" },
    { img: { people }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg", title: "Lam Mai 4", address: "HDV Bắc Ninh 4" },
];
const feedback = [
    { name: "Lam Mai", time: "Thứ 2, 20/11/2022", des: "Đây là mô tả nội dung 123456789", img: { avt } },
    { name: "Lam Mai 1", time: "Thứ 2, 20/11/2022", des: "Đây là mô tả nội dung 123456789", img: { avt } },
    { name: "Lam Mai 2", time: "Thứ 2, 20/11/2022", des: "Đây là mô tả nội dung 123456789", img: { avt } },
    { name: "Lam Mai 3", time: "Thứ 2, 20/11/2022", des: "Đây là mô tả nội dung 123456789", img: { avt } },
    { name: "Lam Mai 4", time: "Thứ 2, 20/11/2022", des: "Đây là mô tả nội dung 123456789", img: { avt } },
];
const touraddress = [
    { name: "Lam Mai", img: { address }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { name: "Lam Mai 1", img: { address }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { name: "Lam Mai 2", img: { address }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { name: "Lam Mai 3", img: { address }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { name: "Lam Mai 4", img: { address }, link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
];
const tourview = [
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
    { img: address, avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg" },
];
const optionsPerson = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    items: 3,
    margin: 20,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 2,
        },
        991: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    },
}
const optionsFeedback = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    items: 4,
    margin: 30,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
}
const optionsTouraddress = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    items: 5,
    margin: 20,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1200: {
            items: 5,
        },
    },
}
const optionsTourview = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    items: 4,
    margin: 20,
    stagePadding: 50,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 2,
        },
        991: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
}
function Home() {
    useEffect(() => { }, []);
    return (
        <>
            <div className="home__wrapper">
                <div className="banner__wrapper">
                    <OwlCarousel className="owl-theme" loop
                        margin={10}
                        nav
                        autoplay={false}
                        dots={false} items={1}>
                        {images.map((item, index) => (
                            <div className="item" key={index}>
                                <a href={item.link}></a>
                                <img src={item.img} alt="" />
                            </div>
                        ))}
                    </OwlCarousel>
                    <div className="row-banner">
                        <div className="introduce-item">
                            <img src={global} alt="" className="introduce-img" />
                            <div className="introduce-des">
                                <h3>Hành trình rực rỡ</h3>
                                <p>Đại lý du lịch địa phương của chúng tôi đang ở đây để giúp bạn lên kế hoạch cho các tour du lịch độc đáo, nổi bật nhất.</p>
                            </div>
                        </div>
                        <div className="introduce-item">
                            <img src={adjust} alt="" className="introduce-img" />
                            <div className="introduce-des">
                                <h3>Hành trình rực rỡ</h3>
                                <p>Đại lý du lịch địa phương của chúng tôi đang ở đây để giúp bạn lên kế hoạch cho các tour du lịch độc đáo, nổi bật nhất.</p>
                            </div>
                        </div>
                        <div className="introduce-item">
                            <img src={vocher} alt="" className="introduce-img" />
                            <div className="introduce-des">
                                <h3>Hành trình rực rỡ</h3>
                                <p>Đại lý du lịch địa phương của chúng tôi đang ở đây để giúp bạn lên kế hoạch cho các tour du lịch độc đáo, nổi bật nhất.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="tour-guide">
                        <div className="tour-guide-left">
                            <h2 className="tour-guide-title">100% tour du lịch được thiết kế riêng từ các HDV địa phương được công nhận
                            </h2>
                            <p className="tour-guide-sub-title">Hướng dẫn viên của chúng tôi chính là những người dân tại địa phương. Họ
                                là những người nắm rõ bản sắc
                                văn hóa nơi mà họ đang sinh sống. Chúng tôi đảm bảo rằng họ cung cấp các dịch vụ tốt nhất, có kiến
                                thức
                                địa phương sâu rộng và có niềm đam mê giúp bạn tạo ra chuyến đi mơ ước của mình.</p>
                        </div>
                        <OwlCarousel className="tour-guide-right owl-theme"  {...optionsPerson}>
                            {person.map((item, index) => (
                                <div className="tour-guide-item" key={index}>
                                    <a href={item.link}>
                                        <img src={item.img.people} alt="" />
                                        <div className="tour-guide-des">
                                            <h3 className="tour-guide-name">
                                                {item.title}
                                            </h3>
                                            <p className="tour-guide-place">{item.address}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                    <div className="tour-feedback">
                        <h2 className="travel-title">Trải nghiệm đặc biệt</h2>
                        <p className="travel-des">Đây là những gì du khách nói về trải nghiệm của họ với TravelLocal và các chuyên gia
                            về điểm đến của chúng tôi.
                        </p>
                        <div className="tour-feedback__main">
                            <OwlCarousel className="tour-feedback__list owl-theme" {...optionsFeedback}>
                                {feedback.map((item, index) => (
                                    <div className="tour-feedback__item" key={index}>
                                        <div className="tour-feedback__star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </div>
                                        <div className="tour-feedback__content">{item.des}</div>
                                        <a href="#" className="travel-link">Xem thêm</a>
                                        <div className="tour-feedback__people">
                                            <img alt="" className="tour-feedback__avt" src={item.img.avt} />
                                            <div className="tour-feedback__info">
                                                <p className="tour-feedback__name">{item.name}</p>
                                                <p className="tour-feedback__time">{item.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="tour-address">
                        <h2 className="travel-title">Cảm hứng du lịch
                        </h2>
                        <p className="travel-des">Khám phá, tùy chỉnh và đặt chuyến đi mơ ước của bạn!
                        </p>
                        <div className="tour-address__main">
                            <OwlCarousel className="tour-address__list  owl-theme" {...optionsTouraddress}>
                                {touraddress.map((item, index) => (
                                    <div className="tour-address__item" key={index}>
                                        <a href={item.link}>
                                            <img alt="" className="tour-address__img" src={item.img.address} />
                                            <div className="tour-address__info">
                                                <p className="tour-address__name">{item.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="tour-banner">
                    <img className="tour-banner-img" alt=""
                        src="https://thegioidohoacom.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/01/09101004/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi1-768x304.jpg" />
                    <div className="tour-banner__text">
                        <h3 className="tour-banner-title">
                            Tùy chỉnh và đặt chuyến đi mơ ước của bạn đến Châu Phi.
                        </h3>
                        <p className="tour-banner-des">
                            Liên hệ với HDV địa phương để tạo safari của bạn
                        </p>
                        <div className="button button--primary"><a href="#">Khám phá ngay</a></div>
                    </div>

                </div>
                <div className="content">
                    <div className="tour-view">
                        <h2 className="travel-title">Tour du lịch sang trọng | Tùy chỉnh kỳ nghỉ sang trọng của bạn

                        </h2>
                        <p className="travel-des">Chọn một chuyến đi bạn thích hoặc liên hệ trực tiếp với chuyên gia địa phương
                        </p>
                        <div className="tour-view__main">
                            <OwlCarousel className="tour-view__list owl-theme " {...optionsTourview}>
                                {tourview.map((item, index) => (
                                    <div className="tour-view__item" key={index}>
                                        <div className="tour-view__card-img">
                                            <img alt="" className="tour-view__img" src={item.img} />
                                            <div className="tour-view__tag">
                                                <p className="tour-view__tag-name">Nature</p>
                                                <p className="tour-view__tag-name">Private Tour</p>
                                                <p className="tour-view__tag-name tour-primary">Carbon Friendly</p>
                                                <p className="tour-view__tag-name tour-primary">Social Impact</p>
                                            </div>
                                            <div className="tour-view-avt">
                                                <img alt="" className="tour-view__avt" src={item.avt} />
                                            </div>
                                        </div>
                                        <div className="tour-view__card-content">
                                            <div className="tour-view__head">
                                                <p className="tour-view__name">Nepal</p>
                                                <p className="tour-view__time">10 days</p>
                                            </div>
                                            <div className="tour-view-body">
                                                <h3 className="tour-view__title">10-Day Luxury Annapurna Trek</h3>
                                                <p className="tour-view__des">Stay at Ker & Downey Lodges,</p>
                                                <div className="tour-view__place">
                                                    <i className="fa-solid fa-plane-arrival"></i>
                                                    <span className="tour-view__place-name">Bắc Ninh</span>
                                                </div>
                                                <a className="travel-link">Xem chi tiết</a>
                                            </div>
                                            <div className="tour-view-footer">
                                                <p className="tour-view__price">khoảng<span>200.000đ</span>một người</p>
                                                <div className="tour-view__evaluate">
                                                    <div className="tour-view__star">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star-half-stroke"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span>Đã đi 1.2k</span>
                                                    </div>
                                                    <div className="button button--primary button-contact">
                                                        Tùy chỉnh và liên hệ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="tour-guides tour-view">
                        <div className="travel-title-all">
                            <h2 className="travel-title">Hướng dẫn viên
                            </h2>
                            <a href="#" className="travel-link">Xem tất cả</a>
                        </div>

                        <div className="tour-guides__main">
                            <OwlCarousel className="tour-guides__list owl-theme " {...optionsTourview}>
                                {tourview.map((item, index) => (
                                    <div className="tour-guides__item" key={index}>
                                        <div className="tour-guides__card-img tour-view__card-img">
                                            <img alt="" className="tour-guides__img tour-view__img" src={item.img} />
                                            <div className="tour-guides__tag tour-view__tag">
                                                <p className="tour-guides__tag-name tour-view__tag-name">Nature</p>
                                                <p className="tour-guides__tag-name tour-view__tag-name">Private Tour</p>
                                            </div>

                                        </div>
                                        <div className="tour-guides__card-content">
                                            <div className="tour-guides__head">
                                                <p className="tour-guides__name">Nguyễn Văn Duy</p>
                                                <p className="tour-guides__time">Nam</p>
                                            </div>
                                            <div className="tour-guides-body">
                                                <ul className="tour-guides-list">
                                                    <li className="tour-guides--item">
                                                        <i className="fa-solid fa-calendar-days"></i>
                                                        <p className="tour-guides__text">Tuổi: 41</p>
                                                    </li>
                                                    <li className="tour-guides--item">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                        <p className="tour-guides__text">Địa chỉ:
                                                            Yên Phong</p>
                                                    </li>
                                                    <li className="tour-guides--item">
                                                        <i className="fa-solid fa-heart"></i>
                                                        <p className="tour-guides__text">Đánh giá:</p>
                                                    </li>
                                                    <li className="tour-guides--item">
                                                        <i className="fa-solid fa-hand-holding-heart"></i>
                                                        <p className="tour-guides__text">Tham gia:
                                                            5 năm trước</p>
                                                    </li>
                                                    <li className="tour-guides--item">
                                                        <i className="fa-solid fa-plane-arrival"></i>
                                                        <p className="tour-guides__text">Chuyến đi:
                                                            234 chuyến đi</p>
                                                    </li>
                                                </ul>
                                                <a className="travel-link">Chi tiết</a>
                                            </div>

                                            <div className="button button--primary button-contact">
                                                Liên hệ
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
