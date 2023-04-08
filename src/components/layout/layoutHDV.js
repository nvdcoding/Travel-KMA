import { SettingOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, Menu, Badge } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { avt, logo } from "../../constants/images";
import "../../assets/css/layoutHDV.css";
const { Header, Content, Sider } = Layout;

const LayoutHDV = ({ children }) => (
  <Layout>
    <Header className="header">
      <Link to="/ho-so-hdv">
        <div className="logo">
          <img alt="" src={logo} />
          <p className="title">Kênh HDV</p>
        </div>
      </Link>
      <div className="menu-right">
        <div className="account-info">
          <img alt="" src={avt} className="account-avatar" />
          <span className="account-name">abc142</span>
        </div>
        <Badge count={1}>
          <BellOutlined />
        </Badge>
      </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultOpenKeys={["1", "3", "5", "4"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          className="navbar-left"
        >
          <Menu.SubMenu title="Tour" icon={<SettingOutlined />} key="1">
            {window.location.pathname === "/ho-so-hdv/ds-tour" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/ds-tour">Danh sách tour</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/ds-tour">Danh sách tour</NavLink>
              </Menu.Item>
            )}
            {window.location.pathname === "/ho-so-hdv/don-hang" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/don-hang">Danh sách đơn</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/don-hang">Danh sách đơn</NavLink>
              </Menu.Item>
            )}
            {window.location.pathname === "/ho-so-hdv/them-tour" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/them-tour">Tạo tour</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/them-tour">Tạo tour</NavLink>
              </Menu.Item>
            )}
            {window.location.pathname === "/ho-so-hdv/danh-gia-tour" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/danh-gia-tour">Đánh giá tour</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/danh-gia-tour">Đánh giá tour</NavLink>
              </Menu.Item>
            )}
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Kênh Marketing"
            icon={<SettingOutlined />}
            key="3"
          >
            {window.location.pathname === "/ho-so-hdv/voucher" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/voucher">Voucher</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/voucher">Voucher</NavLink>
              </Menu.Item>
            )}
            {window.location.pathname === "/ho-so-hdv/create-voucher" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/create-voucher"> Thêm Voucher</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/create-voucher"> ThêmVoucher</NavLink>
              </Menu.Item>
            )}
          </Menu.SubMenu>
          <Menu.SubMenu title="Tài chính" icon={<SettingOutlined />} key="4">
            {window.location.pathname === "/ho-so-hdv/doanh-thu" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/doanh-thu"> Doanh thu</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/doanh-thu"> Doanh thu</NavLink>
              </Menu.Item>
            )}
            {window.location.pathname === "/ho-so-hdv/tai-khoan" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/tai-khoan"> Cài đặt tài khoản</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/tai-khoan"> Cài đặt tài khoản</NavLink>
              </Menu.Item>
            )}
          </Menu.SubMenu>
          <Menu.SubMenu title="Phát triển" icon={<SettingOutlined />} key="5">
            {window.location.pathname === "/ho-so-hdv/setting" ? (
              <Menu.Item className="ant-menu-item-selected ">
                <NavLink to="/ho-so-hdv/setting"> Thiết lập</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <NavLink to="/ho-so-hdv/setting"> Thiết lập</NavLink>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
export default LayoutHDV;
