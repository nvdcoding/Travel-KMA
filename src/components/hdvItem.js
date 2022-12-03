/* eslint-disable */

import { useEffect } from "react";
import { Link } from "react-router-dom";

function HdvItem(props) {
    useEffect(() => { }, []);
    return (
        <>
            <div className="tour-guides__item" >
                <div className="tour-guides__card-img tour-view__card-img">
                    <img alt="" className="tour-guides__img tour-view__img" src={props.item.img} />
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
                        <Link to={`/trang-ca-nhan/${props.item.id}`} className="travel-link">Chi tiết</Link>
                    </div>

                    <div className="button button--primary button-contact">
                        Liên hệ
                    </div>
                </div>
            </div>
        </>
    );
}
export default HdvItem;
