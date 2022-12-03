/* eslint-disable */

import Item from "antd/lib/list/Item";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { address, avt, } from "../constants/images";

function TourItem(props) {
    useEffect(() => { }, []);
    return (
        <>
            <div className="tour-view__item" >
                <div className="tour-view__card-img">
                    <img alt="" className="tour-view__img" src={props.item.img} />
                    <div className="tour-view__tag">
                        <p className="tour-view__tag-name">Nature</p>
                        <p className="tour-view__tag-name">Private Tour</p>
                        <p className="tour-view__tag-name tour-primary">Carbon Friendly</p>
                        <p className="tour-view__tag-name tour-primary">Social Impact</p>
                    </div>
                    <div className="tour-view-avt">
                        <img alt="" className="tour-view__avt" src={props.item.avt} />
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
                        <Link to={`/tour/${props.item.id}`} className="travel-link" >Xem chi tiết</Link>
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
        </>
    );
}
export default TourItem;
