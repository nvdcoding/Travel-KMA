/* eslint-disable */

import { useEffect } from "react";

import { logo } from '../../constants/images';
function HeaderLayout() {
    useEffect(() => { }, []);
    return (
        <>
            <header id="header" className="header header-sticky">
                <div className="header-wrapper">
                    <nav className="main-menu">
                        <div className="menu-left">
                            <img alt="img" src={logo} />
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="/diem-den">Điểm đến</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/tour">Tour HOT</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/hdv">Hướng dẫn viên</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/tin-tuc">Tin tức</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/gioi-thieu">Giới thiệu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-right">
                            <div className="your-trip">
                                Chuyến đi của bạn
                            </div>
                            <div className="language"><i className="fa-solid fa-globe"></i></div>
                            <div className="support"><i className="fa-solid fa-circle-question"></i></div>
                            <div className="user-info"><a className="button button--primary" href="/trang-ca-nhan">Đăng nhập</a></div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default HeaderLayout;
