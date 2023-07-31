import {
  ArrowRightOutlined,
  BorderOuterOutlined,
  DesktopOutlined,
  PlusCircleFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Link from "next/link";

const AllProducts = ({ allProducts }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Desktop PC Component
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProducts?.map((product) => (
          <Col key={product.id} className="gutter-row" span={6}>
            <Card hoverable cover={<img alt="" src={product?._img} />}>
              {/* <Meta Product Name={product?.product_name} /> */}
              <h3>{product?.product_name}</h3>
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <h5
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <DesktopOutlined /> {product?.category}
                </span>
                <span>
                  <PlusCircleFilled /> Price: Tk {product?.price}
                </span>
              </h5>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <BorderOuterOutlined /> {product?.status}
                </span>
                <span>
                  <StarOutlined /> Rating: {product?.rating}
                </span>
              </p>
              <Link href={`/products/${product?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "500",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Product Detail <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllProducts;
