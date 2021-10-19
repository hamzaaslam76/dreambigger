import React from "react";
import Link from "next/link";
import { Button, Col, Row, Space } from "antd";
function Navbar() {
  return (
<div id="navigation">
<div className="container">
<Row justify={"space-between"} className="navigation-cols-container">
<Col xs={3} className="navigation-left-col">
  {/* <img className="navigation-left-col-img"/> */}
  Image
</Col>
<Col xs={6} className="navigation-right-col" align={"end"}>
 <Space size={"middle"}>
 <span className="navigation-right-col-login-button">Login</span>
  <Button className="navigation-right-col-getstarted-button">Get Started</Button>
 </Space>
</Col>
</Row>
</div>
</div>
  );
}
export default Navbar;
