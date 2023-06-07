/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import {
  Space,
  Table,
  Form,
  DatePicker,
  Input,
  Button,
  Popconfirm,
  message,
  Modal,
} from "antd";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { useState } from "react";
import { sendDelete, sendGet, sendPut } from "../../../utils/api";
import moment from "moment";
import { getItem } from "../../../utils/storage";
import { io } from "socket.io-client";

export default function Request() {
  const [data, setData] = useState();
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const socket = io(process.env.REACT_APP_WEB_SOCKET_DOMAIN || "", {
      path: "/chat",
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: localStorage.accessToken,
          },
        },
      },
    });

    socket.on("connect", () => {
      console.log("connected!");
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);
  const handleChat = (userId, selectedRowKeys) => {
    console.log(selectedRowKeys);
    socket.emit("send-message", { chatId: userId, content: "Chào bạn, mình " });
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      render: (_, value, index) => <p>{index + 1}</p>,
    },
    {
      title: "Mã yêu cầu",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Thời gian",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => (
        <>{new Date(record?.createdAt).toLocaleString()}</>
      ),
    },
    {
      title: "Tỉnh thành",
      dataIndex: "province",
      key: "province",
      render: (_, record) => <>{record?.province?.name}</>,
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <ModalTour
            listRequest={listRequest}
            item={record}
            handleChat={handleChat}
          />
          <div
            className="action"
            style={{ backgroundColor: "#1890ff", color: "#fff" }}
          >
            <Popconfirm
              title="Xóa yêu cầu?"
              onConfirm={() => deleteOrder(record.id)}
            >
              Từ chối
            </Popconfirm>
          </div>
        </Space>
      ),
    },
  ];

  const listRequest = async (index) => {
    try {
      const res = await sendGet("/requests/tourguide", {
        limit: 100,
      });
      if (res.statusCode === 200) {
        setData(res.returnValue?.data);
      } else {
        message.error("Thất bại");
      }
    } catch (error) {
      message.error("Thất bại");
    }
  };
  const deleteOrder = async (value) => {
    try {
      const res = await sendDelete("/", { orderId: value });
      if (res.statusCode === 200) {
        message.success("Từ chối thành công");
        listRequest();
      } else {
        message.error("Thất bại");
      }
    } catch (error) {
      message.error("Xóa yêu cầu thất bại");
    }
  };
  useEffect(() => {
    listRequest();
  }, []);

  return (
    <>
      <LayoutHDV>
        <div className="main">
          <div className="search_body">
            <div className="landing-page-title">Danh sách yêu cầu</div>

            <div className="main-body">
              <div className="main-content">
                <h3 className="title">{data && data?.length} yêu cầu</h3>
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
const ModalTour = ({ listRequest, item }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const socket = io(process.env.REACT_APP_WEB_SOCKET_DOMAIN || "", {
      path: "/chat",
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: localStorage.accessToken,
          },
        },
      },
    });

    socket.on("connect", () => {
      console.log("connected!");
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      render: (_, record, index) => <>{index + 1}</>,
    },
    {
      title: "Tour",
      dataIndex: "name",
    },
    {
      title: "Địa điểm",
      dataIndex: "address",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const getTour = async (e) => {
    try {
      const res = await sendGet("/tours", { tourGuideId: user?.id });
      if (res.statusCode === 200) {
        // console.log(res.returnValue.data);
        message.success("Lấy dữ liệu thành công");
        setData(res.returnValue?.data.filter(f => item.province.id === f.province.id));
      } else {
        message.error("Thất bại");
      }
    } catch (error) {
      message.error("Không thành công");
    }
  };
  const sendTour = async (e) => {
    try {
      const res = await sendPut("/", {});
      if (res.statusCode === 200) {
        message.error("Thành công");
        listRequest();
      } else {
        message.error("Thất bại");
      }
    } catch (error) {
      message.error("Không thành công");
    }
  };
  const handleOk = () => {
    console.log(item, '111112312321312');
    if(selectedRowKeys.length === 0) {
      setIsModalOpen(false);
      return;
    }
    const sendData = data.filter(e => selectedRowKeys.includes(e.id));
    if(sendData.length > 0) {
      socket.emit("send-message", { chatId: item.user.id, content: `Xin chào ${item.user.username}, mình là ${user.name} hướng dẫn viên hoạt động ở ${item.province.name}. Mình gợi ý bạn một số tour sau nhé, chúc bạn có những chuyến đi vui vẻ nhé ! `, isSuggest: false });

    }
    for (const data of sendData) {
      socket.emit("send-message", { chatId: item.user.id, content: `${data.name}&*&${data.images[0]}`, isSuggest: true });
    }

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 8,
      total: data.length,
    },
  });
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  useEffect(() => {
    getTour();
  }, []);
  return (
    <>
      <Button type="submit" onClick={showModal}>
        Gửi
      </Button>
      <Modal
        title=""
        open={isModalOpen}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table
          onChange={handleTableChange}
          pagination={tableParams.pagination}
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.id}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
              console.log("selectedRowKeys changed: ", selectedRowKeys);
            },
          }}
          scroll={{ x: 500 }}
        />
      </Modal>
    </>
  );
};
