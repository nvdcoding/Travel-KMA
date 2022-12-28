/* eslint-disable */

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { logo } from '../../constants/images';
function HeaderLayout() {
    useEffect(() => { }, []);
    return (
        <>
            <header id="header" className="header header-sticky">
                <div className="content">
                    <div className="header-wrapper">
                        <nav className="main-menu">
                            <div className="menu-left">
                                <Link to="/"><img alt="img" src={logo} /></Link>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <Link to="/tour">Tour HOT</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/hdv">Hướng dẫn viên</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/tin-tuc">Tin tức</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/diem-den">Điểm đến</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/gioi-thieu">Giới thiệu</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <div className="your-trip">
                                    <Link to="/chuyen-di"> Chuyến đi của bạn</Link>
                                </div>
                                <div className="language"><i className="fa-solid fa-globe"></i></div>
                                <div className="support"><i className="fa-solid fa-circle-question"></i></div>
                                <div className="user-info"><a className="button button--primary" href="/trang-ca-nhan">Đăng nhập</a></div>
                            </div>
                        </nav>
                    </div>
                </div>

            </header>
        </>
    );
}
export default HeaderLayout;
