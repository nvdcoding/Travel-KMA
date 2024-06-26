/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import "../../../assets/css/homehdv.css";
import LayoutHDV from "../../../components/layout/layoutHDV";
import OtpInput from "react-otp-input";
import "./style.css";
import {
  Form,
  Input,
  Modal,
  Radio,
  Tabs,
  Table,
  Button,
  message,
  DatePicker,
} from "antd";
import moment from "moment";
import { sendGet, sendPost } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";

export default function AddTour() {
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "months").startOf("month").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [request, setRequest] = useState([]);
  const [deny, setDeny] = useState([]);
  const [accept, setAccept] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const dateFormat = "YYYY-MM-DD";
  const { infoUser } = useContext(AppContext);
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "index",
      render: (_, record, index) => <a>{index + 1}</a>,
    },
    {
      title: "Ngày yêu cầu",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => (
        <> {formatterDate.format(Date.parse(record?.createdAt))}</>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <>
          {record.status == 1
            ? "Đã rút"
            : record.status == 0
            ? "Đã từ chối"
            : "Đang xử lý"}
        </>
      ),
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => <>{formatterPrice.format(record?.amount)} đ</>,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOTP, setIsModalOTP] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async (value) => {
    value.amount = parseInt(value.amount);
    try {
      const res = await sendPost("/transactions/tourguide-withdraw", value);
      if (res.statusCode == 200) {
        setIsModalOpen(false);
        setIsModalOTP(true);
        form.resetFields();
        await gethistoryDrawTour();
      } else {
        //đơn hàng thất bại
      }
    } catch (error) {
      message.success("Lỗi");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formatterPrice = new Intl.NumberFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  const gethistoryDrawTour = async () => {
    const res = await sendGet("/transactions/my-request-witrhdraw", {
      startDate: moment()
        .subtract(1, "months")
        .startOf("month")
        .format("YYYY-MM-DD"),
      limit: 100,
      endDate: moment().format("YYYY-MM-DD"),
    });
    if (res.statusCode == 200) {
      setRequest(
        res.returnValue?.data?.filter(
          (item) => item.status == 3 || item.status == 2
        )
      );
      setAccept(res.returnValue?.data?.filter((item) => item.status == 1));
      setDeny(res.returnValue?.data?.filter((item) => item.status == 0));
    } else {
      //đơn hàng thất bại
    }
  };
  const historyPayOnline = async () => {
    const res = await sendGet("/tour-guide/transaction", {
      startDate: startDate,
      endDate: endDate,
    });
    if (res.statusCode == 200) {
      setRevenue(res?.options);
      gethistoryDrawTour();
    } else {
      //đơn hàng thất bại
    }
  };
  const changeDate = (date, dateString) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };
  useEffect(() => {
    historyPayOnline();
  }, []);
  const optionsWithDisabled = [
    {
      label: "100.000đ",
      value: "100000",
    },
    {
      label: "500.000đ",
      value: "500000",
    },
    {
      label: "1.000.000đ",
      value: "1000000",
    },
    {
      label: "2.000.000đ",
      value: "2000000",
    },
    {
      label: "3.000.000đ",
      value: "3000000",
    },
    {
      label: "Rút hết",
      value: infoUser.availableBalance,
    },
  ];
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  return (
    <>
      <LayoutHDV>
        <div class="container">
          <div class="seller-meta">
            <div className="section-group-header">
              <div class="section-title">Tổng Quan</div>
              <div className="pay-search">
                <RangePicker
                  defaultValue={[
                    moment().subtract(1, "months").startOf("month"),
                    moment(),
                  ]}
                  format={dateFormat}
                  onChange={changeDate}
                />
                <div
                  className="btn-pay-search button button--primary"
                  onClick={() => historyPayOnline()}
                >
                  Tìm kiếm
                </div>
              </div>
            </div>
            <div class="meta-section">
              <div class="meta-overview">
                <div class="meta-to-release">
                  <div class="meta-item-title">
                    Doanh thu <span class="sprites-guarantee" />
                  </div>
                  <div class="label">Tổng cộng</div>
                  <div class="meta-numeric-content" style={{ width: "212px" }}>
                    <span class="currency-symbol">₫</span>
                    {formatterPrice.format(revenue.totalProfit)}
                  </div>
                </div>
                <div class="meta-released">
                  <div class="meta-item-title">
                    Tháng này <span class="sprites-guarantee" />
                  </div>
                  <div class="meta-time-box">
                    <div class="meta-time-item mr16">
                      <div class="label">Tổng</div>
                      <div
                        class="meta-numeric-content"
                        style={{ width: "212px" }}
                      >
                        <span class="currency-symbol">₫</span>
                        {formatterPrice.format(revenue.totalProfitTimeRange)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="default-bank">
                <div class="bank-account"></div>
                <div
                  type="button"
                  class="wallet-entry shopee-button shopee-button--link shopee-button--normal"
                  onClick={showModal}
                >
                  <span>Rút tiền {`>>`} </span>
                </div>
                <Modal
                  open={isModalOpen}
                  visible={isModalOpen}
                  footer={null}
                  centered
                  onCancel={handleCancel}
                >
                  <h2 className="pay-title">Rút tiền</h2>
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    form={form}
                    onFinish={handleOk}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Số tiền thanh toán"
                      name="amount"
                      rules={[
                        {
                          required: true,
                          message: "Nhập số tiền bạn muốn rút toán.",
                        },
                      ]}
                    >
                      <Input placeholder="Nhập số tiền bạn muốn rút toán" />
                    </Form.Item>
                    <Form.Item label="" name="amount">
                      <Radio.Group
                        options={optionsWithDisabled}
                        optionType="button"
                        buttonStyle="solid"
                      />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <div className="">
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="button button--primary"
                        >
                          Rút tiền
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </div>
          </div>
          <div class="right-main-table">
            <div class="main-content">
              <Tabs defaultActiveKey="0">
                <Tabs.TabPane tab="Yêu cầu thanh toán" key="0">
                  <div class="transactions-table-wrap">
                    <Table columns={columns} dataSource={request} />
                  </div>
                </Tabs.TabPane>
                {/* <Tabs.TabPane tab="Thành công" key="1">
                  <div class="transactions-table-wrap">
                    <Table columns={columns} dataSource={accept} />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Thất bại" key="2">
                  <div class="transactions-table-wrap">
                    <Table columns={columns} dataSource={deny} />
                  </div>
                </Tabs.TabPane> */}
              </Tabs>
            </div>
          </div>
        </div>
        <ModalOtp
          isModalOTP={isModalOTP}
          setIsModalOTP={setIsModalOTP}
          gethistoryDrawTour={gethistoryDrawTour}
        />
      </LayoutHDV>
    </>
  );
}
const ModalOtp = ({ isModalOTP, setIsModalOTP, gethistoryDrawTour }) => {
  const handleCancel = () => {
    setIsModalOTP(false);
  };
  const [otp, setOtp] = useState("");
  const DrawOnline = async () => {
    try {
      const res = await sendPost(`/transactions/confirm-withdraw/${otp}`);
      if (res.statusCode == 200) {
        setIsModalOTP(false);
        setOtp("");
        await gethistoryDrawTour();
      } else {
        //đơn hàng thất bại
      }
    } catch (error) {
      message.error("Không thành công, có lỗi xảy ra!");
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <Modal
        visible={isModalOTP}
        title=""
        open={isModalOTP}
        onCancel={handleCancel}
        footer={null}
      >
        <h3 className="modal-title">
          Nhập OTP đã được gửi về mail của quý khách
        </h3>
        <div className="modal-otp">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <div className="modal-btn">
          <div className="button button--primary" onClick={() => DrawOnline()}>
            Rút tiền
          </div>
          <div className="button button--normal" onClick={() => setOtp("")}>
            Nhập lại
          </div>
        </div>
      </Modal>
    </>
  );
};
