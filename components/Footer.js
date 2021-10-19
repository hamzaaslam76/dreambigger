import { Col, Row, Space } from "antd";
import {PhoneOutlined,MailOutlined} from '@ant-design/icons';
import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <Row justify="space-between" className="footer-cols-container">
          <Col xs={7} className="footer-left-col">
            <Row justify={"space-between"}>
              <Col xs={10} className="footer-left-col__left-child">
                <Space direction="vertical" size="large">
                  <img src="/images/footer-logo.jpg" className="footer-logo"/>
                  <img src="/images/NCA-image.jpg" className="NCA-img"/>
                </Space>
              </Col>
              <Col xs={10} className="footer-left-col__right-child">
                <Space direction="vertical" size="small">
                  <span className="footer-left-col__child-header">
                  About ABC
                  </span>
                  <span className="footer-left-col__child-text">
                  Privacy Policy
                  </span>
                  <span className="footer-left-col__child-text">
                  Terms of Use
                    </span>
                </Space>
              </Col>
            </Row>
          </Col>
          <Col xs={5} className="footer-right-col">
          <Space direction="vertical" size="small">
                  <span className="footer-left-col__child-header">
                  NEED HELP
                  </span>
                  <span className="footer-left-col__child-text">
                  <PhoneOutlined />555.555.5555
                  </span>
                  <span className="footer-left-col__child-text">
                  <MailOutlined />email@cotributemail.com 
                    </span>
                </Space>
          </Col>
        </Row>
      </div>
      <div id="footer-bottom">
        <div className="container">
          
      <Row justify={"space-between"} className="footer-bottom-col-container">
  <Col xs={12}>
    <Space size={"middle"}>
      <span className="footer-bottom-text">© 2021 Cotribute. All rights reserved.</span>
      <span className="footer-bottom-text">Privacy Policy</span>
      <span className="footer-bottom-text">Terms of Use</span>
    </Space>
  </Col>
  <Col xs={6}>
  <Space size={"middle"}>
  <span className="footer-bottom-text">Empowered By</span>
    <img src="/images/cotribute-logo.png" className="footer-bottom-logo"/>
      </Space>
  </Col>
</Row>
        </div>
      </div>
    </div>
  );
}
export default Footer;
