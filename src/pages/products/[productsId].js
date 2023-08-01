import RootLayout from "@/components/Layouts/RootLayout";
import {
  BorderOuterOutlined,
  DesktopOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";

const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <div>
        <Row style={{ marginTop: "80px", alignItems: "center" }}>
          <Col md={6} lg={12}>
            <img alt="" src={product?._img} />
          </Col>
          <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
            <h1 style={{ fontSize: "30px" }}>{product?.product_name}</h1>
            <div
              className="line"
              style={{
                height: "5px",
                margin: "20px 0",
                background: "#000",
                width: "100%",
              }}
            ></div>

            <h4
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "10px 0px",
                fontSize: "20px",
              }}
            >
              <span>
                <DesktopOutlined /> {product?.category}
              </span>
              <span>
                <BorderOuterOutlined /> {product?.status}
              </span>
              <span>
                <PlusCircleFilled /> Price: Tk {product?.price}
              </span>
            </h4>

            <p style={{ fontSize: "18px", fontWeight: "lighter" }}>
              <b>Description:</b> {product?.description}
            </p>
            <p>
              <b>Key Features:</b> {product?.features}
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                margin: "10px 0px",
                fontSize: "20px",
              }}
            >
              <span>
                <DesktopOutlined /> Individual Rating:{" "}
                {product?.individual_rating}
              </span>
              <span>
                <BorderOuterOutlined /> Average Rating: {product?.rating}
              </span>
            </p>
            <p>
              <b>Reviews</b> {product?.reviews}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productsId: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params.productsId}`
  );
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      product: data,
    },
  };
};
