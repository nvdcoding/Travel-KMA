/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { logo } from "../../constants/images";
function HeaderLayout() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {}, []);
  return (
    <>
      <header id="header" className="header header-sticky">
        <div className="header-wrapper">
          <div className="content">
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
                  <a
                    className="button button--primary pc"
                    href="/trang-ca-nhan"
                  >
                    Đăng nhập
                  </a>
                  <a className=" mb" href="/trang-ca-nhan">
                    <i class="fa-regular fa-user"></i>
                  </a>
                </div>
                <div className="menu-mb mb">
                  <i className="fa-solid fa-bars" onClick={showDrawer}></i>
                  <Drawer
                    title="Basic Drawer"
                    placement="right"
                    onClose={onClose}
                    visible={open}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
export default HeaderLayout;
