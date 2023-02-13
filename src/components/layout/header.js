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
                <div className="mb">
                  <div className="your-trip">
                    <Link to="/chuyen-di"> Chuyến đi của bạn</Link>
                  </div>
                  <div className="language">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className="support">
                    <i className="fa-solid fa-circle-question"></i>
                  </div>
                </div>
              </div>
              <div className="menu-right">
                <div className="pc">
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
                </div>
                <div className="menu-mb mb">
                  <i className="fa-solid fa-bars" onClick={showDrawer}></i>
                  <Drawer
                    title=""
                    placement="right"
                    onClose={onClose}
                    visible={open}
                  >
                    <ul className="menu-list-mb">
                      <li className="menu-item-mb">
                        <NavLink to="/">
                          <i class="fa-solid fa-house"></i> Home
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/diem-den">
                          <i class="fa-solid fa-user"></i>Trang cá nhân
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/diem-den">
                          <i class="fa-solid fa-map-location-dot"></i>Điểm đến
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/tour">
                          <i class="fa-solid fa-mountain-city"></i>Tour HOT
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/hdv">
                          <i class="fa-solid fa-truck-plane"></i>Hướng dẫn viên
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/tin-tuc">
                          <i class="fa-solid fa-newspaper"></i>Tin tức
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/gioi-thieu">
                          <i class="fa-solid fa-layer-group"></i>Giới thiệu
                        </NavLink>
                      </li>
                      <li className="menu-item-mb">
                        <NavLink to="/signin">
                          <i class="fa-solid fa-right-from-bracket"></i>Đăng
                          xuẩt
                        </NavLink>
                      </li>
                    </ul>
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
