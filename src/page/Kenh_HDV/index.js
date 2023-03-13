/* eslint-disable */
import React, { useEffect } from "react";
import "../../assets/css/homehdv.css";
import { Tabs } from "antd";

import LayoutHDV from "../../components/layout/layoutHDV";
export default function MyPage() {
  useEffect(() => {}, []);
  return (
    <>
      <LayoutHDV>
        <div class="card card-offset">
          <div class="title">
            Danh sách cần làm
            <p class="card-tips">Những việc bạn sẽ phải làm</p>
          </div>
          <div class="async-data-wrapper">
            <div class="status">
              <div
                class="to-do-box"
                style={{ minHeight: "154px", overflow: "hidden" }}
              >
                <a href="/portal/sale/" class="to-do-box-aitem">
                  <p class="item-title">0</p>
                  <p class="item-desc">Chờ Xác Nhận</p>
                </a>

                <a href="/portal/shipment" class="to-do-box-aitem">
                  <p class="item-title">0</p>
                  <p class="item-desc">Đã Xử Lý</p>
                </a>
                <a href="/portal/sale" class="to-do-box-aitem">
                  <p class="item-title">0</p>
                  <p class="item-desc">chuyến đi Hủy</p>
                </a>
                <a href="/portal/sale" class="to-do-box-aitem">
                  <p class="item-title">0</p>
                  <p class="item-desc">Hoàn thành</p>
                </a>
                <a
                  href="/portal/product/list/banned/action"
                  class="to-do-box-aitem"
                >
                  <p class="item-title">0</p>
                  <p class="item-desc">Tour ẩn</p>
                </a>

                <a
                  href="/portal/web-my-campaigns/campaign"
                  class="to-do-box-aitem"
                >
                  <p class="item-title">0</p>
                  <p class="item-desc">
                    <span>Chương Trình Khuyến Mãi Chờ Xử Lý</span>
                    <span class="todo-new-icon">
                      <span class="text">New</span>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="title-box">
            <div class="title">
              Hiệu Quả Hoạt Động
              <p class="card-tips">
                Bảng Hiệu Quả Hoạt Động giúp HDV hiểu rõ hơn về hoạt động của
                mình dựa trên những chỉ tiêu sau:
              </p>
            </div>
            <button
              type="button"
              class="shopee-button shopee-button--link shopee-button--normal"
            >
              <span> Xem thêm </span>
              <i class="shopee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="m9.19 8-3.97 3.97a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 1.06L9.19 8Z"></path>
                </svg>
              </i>
            </button>
          </div>
          <div class="async-data-wrapper">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Quản Lý Đơn Hàng" key="1">
                <div class="shopee-tabs-tabpane">
                  <div class="performance-content">
                    <table class="performance-table">
                      <tr class="border_tr">
                        <th width="40%"> Tiêu Chí </th>
                        <th width="25%"> Shop của tôi </th>
                        <th width="35%"> Chỉ tiêu </th>
                      </tr>
                      <tr class="">
                        <td>
                          <span>Tỉ lệ đơn không thành công</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                        <td>
                          <span>&lt;10.00%</span>
                        </td>
                      </tr>
                      <tr class="">
                        <td>
                          <span>Tỷ lệ giao hàng trễ</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                        <td>
                          <span>10.00%</span>
                        </td>
                      </tr>
                      <tr class="">
                        <td>
                          <span>Thời gian chuẩn bị hàng</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                        <td>
                          <span>&lt;1.50 days</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Chăm sóc khách hàng" key="2">
                <div class="shopee-tabs-tabpane">
                  <div class="performance-content">
                    <table class="performance-table">
                      <tr class="border_tr">
                        <th width="40%"> Tiêu Chí </th>
                        <th width="25%"> Shop của tôi </th>
                        <th width="35%"> Chỉ tiêu </th>
                      </tr>
                      <tr class="hover">
                        <td>
                          <span>Tỉ lệ phản hồi</span>
                        </td>
                        <td>
                          <span style={{ color: "rgb(255, 71, 66)" }}>
                            57.00%
                          </span>
                        </td>
                        <td>
                          <span>≥80.00%</span>
                        </td>
                      </tr>
                      <tr class="">
                        <td>
                          <span>Thời gian phản hồi</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                        <td>
                          <span>&lt;0.50 days</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Mức độ hài lòng của du khách" key="3">
                <div class="shopee-tabs-tabpane">
                  <div class="performance-content">
                    <table class="performance-table">
                      <tr class="border_tr">
                        <th width="40%"> Tiêu Chí </th>
                        <th width="25%"> Shop của tôi </th>
                        <th width="35%"> Chỉ tiêu </th>
                      </tr>
                      <tr class="">
                        <td>
                          <span>Đánh giá Shop</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                        <td>
                          <span>≥4.00/5</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        <div class="card">
          <div class="title-box">
            <div class="title">
              Điểm Sao Quả Tạ
              <span class="title-tip">
                (Từ 2 Tháng 1 2023 đến 2 Tháng 4 2023)
              </span>
              <p class="card-tips">
                Hệ thống Sao Quả Tạ giúp HDV duy trì dịch vụ chất lượng, mang
                đến sự hài lòng cho du khách.
              </p>
            </div>
            <button
              type="button"
              class="shopee-button shopee-button--link shopee-button--normal"
            >
              <span>Xem thêm</span>
              <i class="shopee-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
                </svg>
              </i>
            </button>
          </div>
          <div class="async-data-wrapper">
            <div class="status">
              <div class="doughnut">
                <div class="container chart">
                  <div class="content1">
                    <p class="num" style={{ color: " rgb(85, 204, 119)" }}>
                      0
                    </p>
                    <p class="desc" style={{ color: " rgb(85, 204, 119)" }}>
                      điểm
                    </p>
                  </div>
                </div>
                <div class="content2">
                  Bạn đang hoạt động rất hiệu quả, hãy giữ vững kết quả này để
                  khách hàng thêm vững lòng tin bạn nhé!
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
