/* eslint-disable */

import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { logo } from "../../constants/images";
function HeaderLayout() {
  useEffect(() => {}, []);
  return (
    <>
      <header id="header" className="header header-sticky">
        <div className="header-wrapper">
          <nav className="main-menu">
            <div className="menu-left">
              <NavLink to="/">
                <img alt="img" src={logo} />
              </NavLink>
              <ul className="menu-list">
                <li className="menu-item">
                  <NavLink to="/diem-den">Điểm đến</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/tour">Tour HOT</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/hdv">Hướng dẫn viên</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/tin-tuc">Tin tức</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-right">
              <div className="your-trip">
                <Link to="/chuyen-di"> Chuyến đi của bạn</Link>
              </div>
              <div className="language">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="support">
                <i className="fa-solid fa-circle-question"></i>
              </div>
              <div className="user-info">
                <a className="button button--primary" href="/trang-ca-nhan">
                  Đăng nhập
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default HeaderLayout;
