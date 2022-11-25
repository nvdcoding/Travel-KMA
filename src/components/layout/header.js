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
                                    <a href="#">#</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/lien-he">Liên hệ HDV</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/diem-den">Giới thiệu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-right">
                            <div className="your-trip">
                                Chuyến đi của bạn
                            </div>
                            <div className="language"><i className="fa-solid fa-globe"></i></div>
                            <div className="support"><i className="fa-solid fa-circle-question"></i></div>
                            <div className="user-info"><p className="button">Đăng nhập</p></div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default HeaderLayout;
