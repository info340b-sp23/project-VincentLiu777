import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button, Result } from 'antd';

function Aboutus() {
  return (
    <Fragment>
      <Header />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button href="/home" ghost>Back Home</Button>}
    />
      <Footer />
    </Fragment>
  );
}
export default Aboutus;
