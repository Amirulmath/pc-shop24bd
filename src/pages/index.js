import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";
import { Button } from "antd";

const HomePage = ({ allProducts }) => {
  return (
    <div>
      <p>Home Page</p>
      <Button type="primary">PC Component</Button>
      <AllProducts allProducts={allProducts} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
