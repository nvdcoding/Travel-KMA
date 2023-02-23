import React, { useState } from "react";
import { Modal } from "antd";
function Condition(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <p className="mytrip-voucher-condition" onClick={showModal}>
        Điều kiện
      </p>
      <Modal
        title={props.data?.des}
        centered
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <h4 className="voucher-popup-title">
          {props.data?.name ? props.data?.name : " Tên Voucher"}
        </h4>
        <p className="voucher-popup-time">Thời gian: Áp dụng đến 28/02/2023</p>
        <p className="voucher-popup-dk">Điều kiện sử dụng:</p>
        <p className="voucher-popup-des">
          {" "}
          Nhập mã METAF20 để được giảm phí vận chuyển tối đa 20.000đ. Áp dụng
          đến khi hết mã. Số lượng có hạn.{props.data?.condition}
        </p>
      </Modal>
    </>
  );
}
export default Condition;
