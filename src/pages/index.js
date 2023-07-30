import RootLayout from "@/components/Layouts/RootLayout";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div>
      <p>Home Page</p>
      <Button type="primary">PC Component</Button>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
