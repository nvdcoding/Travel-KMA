/* eslint-disable */
import React, { useEffect, useState } from "react";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Button, Switch, Tabs } from "antd";
export default function Setting() {
  useEffect(() => {}, []);
  const [active, setActive] = useState(false);
  const onChange = (checked) => {
    setActive(checked);
  };
  return (
    <>
      <LayoutHDV>
        <div className="setting-main">
          <div class="header-setting">
            <div class="landing-page-title">Thiết Lập Shop</div>
            <div class="desc">Thay đổi các cài đặt cho Shop của bạn.</div>
          </div>
          <Tabs>
            <Tabs.TabPane tab="Thiết lập cơ bản" key="item-1">
              <div className="content_tab">
                <div className={active ? "tab-left active" : "tab-left"}>
                  <i class="fa-regular fa-moon"></i>
                  <div className="tab_info">
                    <p className="tab-title">Chế độ Tạm nghỉ</p>
                    <p className="tab_des">
                      Kích hoạt Chế độ Tạm nghỉ để ngăn khách hàng đặt đơn hàng
                      mới. Những đơn hàng đang tiến hành vẫn phải được xử lý.
                    </p>
                  </div>
                </div>
                <div className="tab_right">
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Cài đặt thông báo" key="item-2">
              <div className="content_tab">
                <div className="tab-left">
                  <i class="fa-regular fa-envelope"></i>
                  <div className="tab_info">
                    <p className="tab-title">Thông báo Email</p>
                    <p className="tab_des">
                      Kiểm soát việc Shopee gửi email đến bạn
                    </p>
                  </div>
                </div>
                <div className="tab_right">
                  {/* ấn vào ẩn hiện nội dung bên dưới */}
                  <Button>Bỏ Email</Button>
                </div>
              </div>
              <div className="content_sub">
                <div className="sub_item">
                  <div className="tab-left">
                    <i class="fa-regular fa-moon"></i>
                    <div className="tab_info">
                      <p className="tab-title">Cập nhật đơn hàng</p>
                    </div>
                  </div>
                  <div className="tab_right">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
                <div className="sub_item">
                  <div className="tab-left">
                    <i class="fa-regular fa-moon"></i>
                    <div className="tab_info">
                      <p className="tab-title">Bản tin</p>
                    </div>
                  </div>
                  <div className="tab_right">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>

                <div className="sub_item">
                  <div className="tab-left">
                    <i class="fa-regular fa-moon"></i>
                    <div className="tab_info">
                      <p className="tab-title">Cập nhật sản phẩm</p>
                    </div>
                  </div>
                  <div className="tab_right">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
                <div className="sub_item">
                  <div className="tab-left">
                    <i class="fa-regular fa-moon"></i>
                    <div className="tab_info">
                      <p className="tab-title">Nội dung cá nhân</p>
                    </div>
                  </div>
                  <div className="tab_right">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
                <div className="sub_item">
                  <div className="tab-left">
                    <i class="fa-regular fa-moon"></i>
                    <div className="tab_info">
                      <p className="tab-title">Chat Messages Reminder</p>
                    </div>
                  </div>
                  <div className="tab_right">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </LayoutHDV>
    </>
  );
}
