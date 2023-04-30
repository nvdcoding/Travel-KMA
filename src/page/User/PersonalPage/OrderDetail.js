/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Popconfirm, Steps } from "antd";
import "../../../assets/css/trip.css";
import { sendGet } from "../../../utils/api";
import { message } from "antd";
import { Link } from "react-router-dom";
import { avt } from "../../../constants/images";
export default function OrderDetail({ dataDetail, handleStep }) {
  const [data, setData] = useState({});
  const orderDetail = async () => {
    const result = await sendGet(`/orders/user/${dataDetail}`);
    if (result.statusCode == 200) {
      setData(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const { Step } = Steps;

  useEffect(() => {
    orderDetail();
  }, []);
  return (
    <>
      <div className="order-detail">
        <div class="cBtCqV">
          <div class="yO9lYJ">
            <span onClick={() => handleStep()}>
              <i class="fa-solid fa-chevron-left"></i> TRỞ LẠI
            </span>
          </div>
          <div>
            <span>MÃ TOUR. {data?.id}</span>
            <span class="EkDKzu">|</span>
          </div>
        </div>
        <div className="process">
          <Steps
            current={
              data.status == 0
                ? 1
                : data.status == 1
                ? 2
                : data.status == 2
                ? 3
                : data.status == 3
                ? 4
                : data.status == 4
                ? 5
                : 6
            }
            status={data.status == 5 ? "error" : "process"}
          >
            <Step title="Chờ xác nhận" />
            <Step title="Chờ thanh toán" />
            <Step title="Chưa thực hiện" description={data?.startDate} />
            <Step title="Đang thực hiện" />
            <Step title="Đã đi" />
            <Step title="Đã hủy" />
          </Steps>
        </div>
        <div>
          {data.status == 4 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Bạn đã hoàn thành chuyến đi này vào ngày
                  <div
                    class="stardust-popover b6+tp4"
                    id="stardust-popover3"
                    tabindex="0"
                  >
                    <div role="button" class="stardust-popover__target">
                      <div>
                        <u>{data?.endDate}</u>
                      </div>
                    </div>
                  </div>
                  .
                </div>
                <div class="_5roFKV">
                  <button class="stardust-button stardust-button--primary WgYvse">
                    Đi lại
                  </button>
                </div>
              </div>
            </div>
          ) : data.status < 4 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Thanh toán chuyến đi ngay
                  <div
                    class="stardust-popover b6+tp4"
                    id="stardust-popover3"
                    tabindex="0"
                  >
                    <div role="button" class="stardust-popover__target">
                      <div>
                        <u>{data?.endDate}</u>
                      </div>
                    </div>
                  </div>
                  .
                </div>
                <div class="_5roFKV">
                  <Link
                    to={`/pay/${data?.id}`}
                    class="stardust-button stardust-button--primary WgYvse"
                  >
                    Thanh toán ngay
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="process-content">
          <div className="mytrip-order-item">
            <div className="mytrip-order__header">
              <div className="mytrip-order__header-left">
                <p className="mytrip-order__name">{data?.name}</p>
                <Link to="/chat">
                  <div className="mytrip-order__chat">
                    <i className="fa-regular fa-comments"></i>
                    <p className="mytrip-order__contact">Chat</p>
                  </div>
                </Link>
                <Link to={`/trang-ca-nhan/${data?.tourGuide?.id}`}>
                  <p className="mytrip-order__hdv">
                    <i class="fa-solid fa-user-check"></i> Xem HDV
                  </p>
                </Link>
              </div>
            </div>
            <div className="mytrip-order__main">
              <Link to={`tour/${data?.tour?.id}`}>
                <div className="mytrip-order__main-left">
                  <img className="mytrip-order-img" alt="" src={avt} />
                  <h4 className="mytrip-order-name">{data?.tour?.name}</h4>
                </div>
              </Link>
              <div className="mytrip-order__main-right">
                <p className="mytrip-order__main-price">
                  {data?.tour?.basePrice}đ
                </p>
                <p className="mytrip-order__main-price-km">
                  {data?.tour?.pricekm}đ
                </p>
              </div>
            </div>
          </div>
          <div class="RZJjTX">
            <div class="TokOv1">
              <div class="_8kMYJ3">
                <span>Phí tour</span>
              </div>
              <div class="CxyZBG">
                <div>₫35.999</div>
              </div>
            </div>
            <div class="TokOv1">
              <div class="_8kMYJ3">
                <span>Phí một người</span>
              </div>
              <div class="CxyZBG">
                <div>₫16.500</div>
              </div>
            </div>
            <div class="TokOv1">
              <div class="_8kMYJ3">
                <span>Phí phát sinh</span>
              </div>
              <div class="CxyZBG">
                <div>₫16.500</div>
              </div>
            </div>
            <div class="TokOv1">
              <div class="_8kMYJ3">
                <span>Số lượng</span>
                <div
                  class="stardust-popover W97Kqg"
                  id="stardust-popover5"
                  tabindex="0"
                >
                  <div role="button" class="stardust-popover__target">
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="CxyZBG">
                <div>-₫15.000</div>
              </div>
            </div>
            <div class="TokOv1 a59vwO">
              <div class="_8kMYJ3 B6pCRN">
                <span>Thành tiền</span>
              </div>
              <div class="CxyZBG">
                <div class="_8ZGgbl">₫37.499</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
