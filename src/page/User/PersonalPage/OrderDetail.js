/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Popconfirm, Steps } from "antd";
import "../../../assets/css/trip.css";
import { sendGet, sendPut } from "../../../utils/api";
import { message } from "antd";
import { Link } from "react-router-dom";
import { avt } from "../../../constants/images";
export default function OrderDetail({
  dataDetail,
  handleStep,
  tourWaitting,
  tourProcessing,
}) {
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
  const prePaid = async (e) => {
    try {
      let res = await sendPut(`/orders/prepaid`, {
        orderId: e,
      });
      if (res.statusCode == 200) {
        message.success("Thanh toán thành công");
        await tourWaitting();
        handleStep();
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Số dư ko đủ");
    }
  };
  const paid = async (e) => {
    try {
      let res = await sendPut(`/orders/paid`, {
        orderId: e.id,
        amount: parseInt(e.price - e.paid),
      });
      if (res.statusCode == 200) {
        message.success("Thanh toán thành công");
        await tourWaitting();
        await tourProcessing();
        handleStep();
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Số dư ko đủ");
    }
  };
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
          {/* sttus = 0: chờ xác nhận
          1: chờ đặt cọc
          2: chờ thanh toán:
          3: chưa thực hiện
          4: đang thực hiện
          5: đã thực hiện
          6: đã hủy
          */}
          <Steps
            current={
              data.status == 0
                ? 1
                : data.status == 1
                  ? 1
                  : data.status == 2
                    ? 2
                    : data.status == 3
                      ? 3
                      : data.status == 4
                        ? 4
                        : data.status == 5
                          ? 5
                          : data.status == 6
                            ? 6
                            : 6
            }
            status={data.status == 5 ? "error" : "process"}
          >
            <Step title="Chờ xác nhận" />
            <Step title="Chờ đặt cọc" />
            <Step title="Chờ thanh toán" />
            <Step title="Chưa thực hiện" description={data?.startDate} />
            <Step title="Đang thực hiện" />
            <Step title="Đã đi" />
            <Step title="Đã hủy" />
          </Steps>
        </div>
        <p className="process-note">
          Trạng thái đơn hàng:
          {data.status == 0
            ? "Chờ xác nhận"
            : data.status == 1
              ? "Chờ đặt cọc"
              : data.status == 2
                ? "Chờ thanh toán"
                : data.status == 3
                  ? "Chưa thực hiện"
                  : data.status == 4
                    ? "Đang thực hiện"
                    : data.status == 5
                      ? "Đã thực hiện"
                      : "Đã hủy"}
        </p>
        <div>
          {data.status == 5 ? (
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
          ) : data.status == 4 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Kêt thúc chuyến đi
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
              </div>
            </div>
          ) : data.status == 3 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Chuyến đi bắt đầu vào ngày
                  <div
                    class="stardust-popover b6+tp4"
                    id="stardust-popover3"
                    tabindex="0"
                  >
                    <div role="button" class="stardust-popover__target">
                      <div>
                        <u>{data?.startDate}</u>
                      </div>
                    </div>
                  </div>
                  .
                </div>
              </div>
            </div>
          ) : data.status == 2 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Thanh toán ngay
                  <div
                    class="stardust-popover b6+tp4"
                    id="stardust-popover3"
                    tabindex="0"
                  >
                    <p className="stardust1">
                      Số tiền đã thanh toán: {data.paid}
                    </p>
                    <p className="stardust1">
                      Số tiền còn lại: {data.price - data.paid}
                    </p>
                    <div role="button" class="stardust-popover__target">
                      <div>
                        <u>{data?.startDate}</u>
                      </div>
                    </div>
                  </div>
                  .
                </div>
                <div class="_5roFKV">
                  {" "}
                  <div
                    className="button button--primary"
                    onClick={() => paid(data)}
                  >
                    Thanh toán ngay
                  </div>
                </div>
              </div>
            </div>
          ) : data.status == 1 ? (
            <div class="evyOM">
              <div class="ICo-FQ">
                <div class="-evyOM">
                  Đặt cọc (10% giá trị đơn hàng)
                  <div
                    class="stardust-popover b6+tp4"
                    id="stardust-popover3"
                    tabindex="0"
                  >
                    <div role="button" class="stardust-popover__target">
                      <div>
                        Số tiền cần đặt cọc
                        <u>{formatterPrice.format(data?.price * 0.1)} đ</u>
                      </div>
                    </div>
                  </div>
                  .
                </div>
                <div class="_5roFKV">
                  <div
                    className="button button--primary"
                    onClick={() => prePaid(data.id)}
                  >
                    Đặt cọc ngay
                  </div>
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
                <Link to={`/chat/${data?.tourGuide?.id}`}>
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
                  {formatterPrice.format(data?.tour?.basePrice)}đ
                </p>
              </div>
            </div>
          </div>
          {/* <div class="RZJjTX">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
