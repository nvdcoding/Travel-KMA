/* eslint-disable eqeqeq */
import React, { useContext, useEffect, useState } from "react";
import {
  Tabs,
  Input,
  message,
  Card,
  Space,
  Skeleton,
  Modal,
  Popconfirm,
} from "antd";

import "../../../assets/css/trip.css";
import { sendDelete, sendGet } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";
export default function Request() {
  const [tourRequest, setTourRequest] = useState();
  const { provice } = useContext(AppContext);
  const request = async (e) => {
    try {
      let res = await sendGet(`/requests/user`, { limit: 100 });
      if (res.statusCode == 200) {
        setTourRequest(res.returnValue?.data);
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Chưa đến hạn kết thúc chuyến đi");
    }
  };
  const onSearch = async (value) => {
    try {
      let res = await sendGet(`/requests/user`, {
        limit: 100,
        provinceId: parseInt(value),
      });
      if (res.statusCode == 200) {
        setTourRequest(res.returnValue?.data);
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Có lỗi hệ thống");
    }
  };
  const confirm = async (e) => {
    try {
      let res = await sendDelete(`/requests/user/${e}`);
      if (res.statusCode == 200) {
        message.success("Xóa thành công");
        await request();
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Không thể xóa");
    }
  };
  useEffect(() => {
    request();
  }, []);
  // if (!Object.keys(dataWaiting).length) return <Skeleton />;

  return (
    <>
      <div className="tour-request">
        <div className="tour-request-group">
          <h3>Các chuyến đi bạn yêu cầu</h3>

          <div className="tour-request-search">
            <div className="tour-request-search-title">
              <i class="fa-solid fa-filter"></i>Tìm kiếm theo:{" "}
            </div>
            <div className="tour-request-search-main">
              <select onChange={(e) => onSearch(e.target.value)}>
                <option>Tỉnh/Thành phố</option>
                {provice.map((item, index) => (
                  <option value={item?.id} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="vertical">
          {tourRequest && tourRequest.length > 0 ? (
            tourRequest.map((item, index) => (
              <Card
                title={item.province?.name}
                key={index}
                extra={
                  <Popconfirm
                    title="Xác nhận hủy yêu cầu?"
                    onConfirm={() => confirm(item.id)}
                    okText="Đồng ý"
                    cancelText="Không"
                  >
                    <p className="btn-cancel">Hủy</p>
                  </Popconfirm>
                }
              >
                <p>
                  <i class="fa-solid fa-gear"></i> Mã yêu cầu:
                  <strong> {item?.id} </strong>
                </p>
                <p>
                  <i class="fa-solid fa-pen-to-square"></i> Nội dung:
                  <strong> {item?.content} </strong>
                </p>
                <p>
                  <i class="fa-solid fa-calendar-days"></i>Thời gian mong muốn:
                  <strong>{item?.startDate} </strong>
                </p>
              </Card>
            ))
          ) : (
            <p>KO </p>
          )}
        </div>
      </div>
    </>
  );
}
