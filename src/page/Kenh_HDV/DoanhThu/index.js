/* eslint-disable */
import React, { useEffect } from "react";
import "../../../assets/css/homehdv.css";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Input, Table } from "antd";

export default function AddTour() {
  const columns = [
    {
      title: "Tour",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày thanh toán dự kiến",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Số tiền",
      dataIndex: "price",
      key: "price",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
    {
      key: "2",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
    {
      key: "3",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
  ];

  useEffect(() => {}, []);
  const { Search } = Input;
  const onFinish = (values) => {};
  const onSearch = (value) => console.log(value);
  return (
    <>
      <LayoutHDV>
        <div class="container">
          <div class="left">
            <div class="seller-meta">
              <div class="section-title">Tổng Quan</div>
              <div class="meta-section">
                <div class="meta-overview">
                  <div class="meta-to-release">
                    <div class="meta-item-title">
                      Chưa thanh toán <span class="sprites-guarantee" />
                    </div>
                    <div class="label">Tổng cộng</div>
                    <div
                      class="meta-numeric-content"
                      style={{ width: "212px" }}
                    >
                      <span class="currency-symbol">₫</span>0
                    </div>
                  </div>
                  <div class="meta-released">
                    <div class="meta-item-title">
                      Đã thanh toán <span class="sprites-guarantee" />
                    </div>
                    <div class="meta-time-box">
                      <div class="meta-time-item mr16">
                        <div class="label">Tuần này</div>
                        <div
                          class="meta-numeric-content"
                          style={{ width: "212px" }}
                        >
                          <span class="currency-symbol">₫</span>0
                        </div>
                      </div>
                      <div class="meta-time-item mr16">
                        <div class="label">Tháng này</div>
                        <div
                          class="meta-numeric-content small"
                          style={{ width: "123px" }}
                        >
                          <span class="currency-symbol">₫</span>0
                        </div>
                      </div>
                      <div class="meta-time-item">
                        <div class="label">Tổng cộng</div>
                        <div
                          class="meta-numeric-content small"
                          style={{ width: "123px" }}
                        >
                          <span class="currency-symbol">₫</span>0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="default-bank">
                  <div class="bank-account"></div>
                  <button
                    type="button"
                    class="wallet-entry shopee-button shopee-button--link shopee-button--normal"
                  >
                    <span>Số dư TK Shopee</span>
                    <i class="shopee-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z" />
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
            <div class="right-main-table">
              <div class="main-content">
                <div class="section-title">
                  <span>Chi Tiết</span>
                  <div class="income-order-search order-search">
                    <div class="shopee-input search-input">
                      <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                          width: 200,
                        }}
                      />
                    </div>
                    <div class="dropdown-panel" style={{ display: "none" }}>
                      <i class="loading-icon shopee-icon shopee-icon-spin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.51163278,0.397486945 C10.0116767,0.49640704 10.4986446,0.644240639 10.9666762,0.838315664 C11.9071267,1.22828493 12.7610325,1.80087735 13.4800776,2.51992245 C14.9236179,3.96346282 15.75,5.91724948 15.75,8 C15.75,10.0827505 14.9236179,12.0365372 13.4800776,13.4800776 C12.7610325,14.1991226 11.9071267,14.7717151 10.9666762,15.1616843 C10.4986446,15.3557594 10.0116767,15.503593 9.51163278,15.6025131 C9.10529372,15.6828962 8.71072743,15.4186567 8.63034431,15.0123176 C8.54996118,14.6059786 8.81420066,14.2114123 9.22053972,14.1310292 C9.62322346,14.0513691 10.0152596,13.9323549 10.3921205,13.7760849 C11.1501019,13.4617787 11.8390044,12.9998304 12.4194174,12.4194174 C13.5844418,11.2543929 14.25,9.68083668 14.25,8 C14.25,6.31916332 13.5844418,4.74560706 12.4194174,3.58058262 C11.8390044,3.00016965 11.1501019,2.53822134 10.3921205,2.22391508 C10.0152596,2.0676451 9.62322346,1.94863086 9.22053972,1.86897083 C8.81420066,1.7885877 8.54996118,1.39402141 8.63034431,0.987682358 C8.70402884,0.615204891 9.0417145,0.362130533 9.41046829,0.3844536 L9.51163278,0.397486945 Z" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
                <div class="nav-panel shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top">
                  <div class="shopee-tabs__nav">
                    <div class="shopee-tabs__nav-warp">
                      <div
                        class="shopee-tabs__nav-tabs"
                        style={{ transform: "translateX(0px)" }}
                      >
                        <div
                          class="shopee-tabs__nav-tab active"
                          style={{ whiteSpace: "normal" }}
                        >
                          <div class="active">Chưa thanh toán</div>
                        </div>
                        <div
                          class="shopee-tabs__nav-tab"
                          style={{ whiteSpace: "normal" }}
                        >
                          <div className>Đã thanh toán</div>
                        </div>
                      </div>
                      <div
                        class="shopee-tabs__ink-bar"
                        style={{ width: "144px", transform: "translateX(0px)" }}
                      />
                    </div>
                  </div>
                </div>

                <div class="transactions-table-wrap">
                  <Table columns={columns} dataSource={data} />
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="income-statements">
              <div class="meta-section sidebar-section-header">
                <div class="statement-title">Báo cáo thu nhập</div>
                <button
                  type="button"
                  class="more-btn shopee-button shopee-button--link shopee-button--normal"
                >
                  <span>Xem thêm</span>
                  <i class="shopee-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M23.5 15.5l-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z" />
                    </svg>
                  </i>
                </button>
              </div>
              <div class="meta-section-content">
                <section>
                  <ul class="download-list">
                    <li>
                      <a>1 Th02 - 28 Th02 2023</a>
                      <span class="icon download">
                        <i class="shopee-icon">
                          <svg
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.334 10.198c-.005.005-.012.003-.017.007a.465.465 0 0 1-.302.125h-.003a.464.464 0 0 1-.347-.132L3.868 6.935a.471.471 0 0 1 .666-.667l2 2.333V1.467a.466.466 0 1 1 .933 0V8.6l1.998-2.333a.472.472 0 0 1 .666.667l-2.797 3.263zm6.2 2.935H.466A.466.466 0 0 1 0 12.666V8.933a.467.467 0 1 1 .933 0V12.2h12.134V8.933a.466.466 0 1 1 .933 0v3.733c0 .259-.21.467-.467.467z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </span>
                    </li>
                    <li>
                      <a>6 Th03 - 12 Th03 2023</a>
                      <span class="icon download">
                        <i class="shopee-icon">
                          <svg
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.334 10.198c-.005.005-.012.003-.017.007a.465.465 0 0 1-.302.125h-.003a.464.464 0 0 1-.347-.132L3.868 6.935a.471.471 0 0 1 .666-.667l2 2.333V1.467a.466.466 0 1 1 .933 0V8.6l1.998-2.333a.472.472 0 0 1 .666.667l-2.797 3.263zm6.2 2.935H.466A.466.466 0 0 1 0 12.666V8.933a.467.467 0 1 1 .933 0V12.2h12.134V8.933a.466.466 0 1 1 .933 0v3.733c0 .259-.21.467-.467.467z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </span>
                    </li>
                    <li>
                      <a>27 Th02 - 5 Th03 2023</a>
                      <span class="icon download">
                        <i class="shopee-icon">
                          <svg
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.334 10.198c-.005.005-.012.003-.017.007a.465.465 0 0 1-.302.125h-.003a.464.464 0 0 1-.347-.132L3.868 6.935a.471.471 0 0 1 .666-.667l2 2.333V1.467a.466.466 0 1 1 .933 0V8.6l1.998-2.333a.472.472 0 0 1 .666.667l-2.797 3.263zm6.2 2.935H.466A.466.466 0 0 1 0 12.666V8.933a.467.467 0 1 1 .933 0V12.2h12.134V8.933a.466.466 0 1 1 .933 0v3.733c0 .259-.21.467-.467.467z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </span>
                    </li>
                    <li>
                      <a>20 Th02 - 26 Th02 2023</a>
                      <span class="icon download">
                        <i class="shopee-icon">
                          <svg
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.334 10.198c-.005.005-.012.003-.017.007a.465.465 0 0 1-.302.125h-.003a.464.464 0 0 1-.347-.132L3.868 6.935a.471.471 0 0 1 .666-.667l2 2.333V1.467a.466.466 0 1 1 .933 0V8.6l1.998-2.333a.472.472 0 0 1 .666.667l-2.797 3.263zm6.2 2.935H.466A.466.466 0 0 1 0 12.666V8.933a.467.467 0 1 1 .933 0V12.2h12.134V8.933a.466.466 0 1 1 .933 0v3.733c0 .259-.21.467-.467.467z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </i>
                      </span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
