import RootLayout from "@/components/Layouts/RootLayout";
import {
  ArrowRightOutlined,
  BorderOuterOutlined,
  DesktopOutlined,
  PlusCircleFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";

const CasingPage = ({ products }) => {
  return (
    <>
      <Link href="/">
        <Button className="m-4" type="primary">
          Back To Home
        </Button>
      </Link>

      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Casing
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => (
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

export default CasingPage;

CasingPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const category = "Casing";
  const res = await fetch(
    `http://localhost:5000/products?category=${category}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      products: data,
    },
  };
};
