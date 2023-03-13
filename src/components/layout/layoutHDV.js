import { SettingOutlined, BellOutlined } from "@ant-design/icons";
import { Layout, Menu, Badge } from "antd";
import React from "react";
import { logo } from "../../constants/images";
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
          <span className="account-name">mailam141</span>
        </div>
        <div className="more">
          <i className="fa-solid fa-grip-vertical"></i>
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
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
        >
          <Menu.SubMenu title="Tour" icon={<SettingOutlined />} key="1">
            <Menu.Item>Danh sách tour</Menu.Item>
            <Menu.Item>Tạo tour</Menu.Item>
            <Menu.Item>Cài đặt</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Quản lý chuyến đi"
            icon={<SettingOutlined />}
            key="2"
          >
            <Menu.Item>Tất cả</Menu.Item>
            <Menu.Item>Đơn hủy</Menu.Item>
            <Menu.Item>Hoàn thành</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Kênh Marketing"
            icon={<SettingOutlined />}
            key="3"
          >
            <Menu.Item>Voucher</Menu.Item>
            <Menu.Item>Thêm voucher</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="Tài chính" icon={<SettingOutlined />} key="4">
            <Menu.Item>Doanh thu</Menu.Item>
            <Menu.Item>Cài đặt tài khoản</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="Phát triển" icon={<SettingOutlined />} key="5">
            <Menu.Item>Đánh giá HDV</Menu.Item>
            <Menu.Item>Thiết lập</Menu.Item>
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
