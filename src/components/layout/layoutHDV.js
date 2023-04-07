import { SettingOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, Menu, Badge } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { logo, menudot } from "../../constants/images";
import "../../assets/css/layoutHDV.css";
const { Header, Content, Sider } = Layout;

const LayoutHDV = ({ children }) => (
  <Layout>
    <Header className="header">
      <div className="logo">
        <img alt="" src={logo} />
        <p className="title">Kênh HDV</p>
      </div>
      <div className="menu-right">
        <div className="account-info">
          <img
            alt=""
            src="https://cf.shopee.vn/file/aad179adcc00c6fab9531e71b94977fa"
            className="account-avatar"
          />
          <span className="account-name">abc142</span>
        </div>
        <div className="more">
          <img alt="" src={menudot} />
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
          // defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          className="navbar-left"
        >
          <Menu.SubMenu title="Tour" icon={<SettingOutlined />} key="1">
            <Menu.Item>
              <NavLink to="/ho-so-hdv/ds-tour">Danh sách tour</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/ho-so-hdv/don-hang">Danh sách đơn</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/ho-so-hdv/them-tour">Tạo tour</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/ho-so-hdv/danh-gia-tour">Đánh giá tour</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Kênh Marketing"
            icon={<SettingOutlined />}
            key="3"
          >
            <Menu.Item>
              <NavLink to="/ho-so-hdv/voucher">Voucher</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/ho-so-hdv/create-voucher">Thêm voucher</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="Tài chính" icon={<SettingOutlined />} key="4">
            <Menu.Item>
              <NavLink to="/ho-so-hdv/doanh-thu">Doanh thu</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/ho-so-hdv/tai-khoan">Cài đặt tài khoản</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="Phát triển" icon={<SettingOutlined />} key="5">
            <Menu.Item>
              <NavLink to="/ho-so-hdv/setting">Thiết lập</NavLink>
            </Menu.Item>
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
