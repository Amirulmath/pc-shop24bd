import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space } from "antd";
const { Header, Content, Footer } = Layout;
import Link from "next/link";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === "8") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: "CPU / Processor",
      key: "1",
    },
    {
      label: "Motherboard",
      key: "2",
    },
    {
      label: "RAM",
      key: "3",
    },
    {
      label: "Power Supply",
      key: "4",
    },
    {
      label: "Storage Device",
      key: "5",
    },
    {
      label: "Monitor",
      key: "6",
    },
    {
      label: "Graphics Card",
      key: "7",
    },
    {
      label: "Casing",
      key: "8",
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="text-xl font-bold text-green-400">PC Shop24bd</div>
        <Menu theme="dark" mode="vertical" className="">
          <Link href="/" className="text-white hover:text-blue-400">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              Home
            </items>
          </Link>
          <Dropdown
            className="text-white hover:text-blue-400"
            menu={{
              items,
              onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Components
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Link href="/pc-builder">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <Button type="primary">PC Builder</Button>
            </items>
          </Link>
          <Link href="/login" className="text-white hover:text-blue-400">
            <items>Login</items>
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
        className="bg-gray-400"
      >
        <div className=""></div>
        <h2
          style={{
            fontSize: "18px",
          }}
        >
          PC Shop24bd
        </h2>
        <p className="text-2xl">
          <FacebookFilled />
          <TwitterSquareFilled />
          <GoogleSquareFilled />
          <LinkedinFilled />
        </p>
        PC Shop @ 2023 Created by Programming Hero Team
      </Footer>
    </Layout>
  );
};
export default RootLayout;
