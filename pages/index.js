import { Button, Col, Divider, Input, Row,Form } from "antd";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.module.css";

export default function Home() {

  const onFinish = (values) => {

  };

  return (
    <div id="homepage">
      <div className="hero-section">
        <div className="container">
          <Row>
            <Col xs={11}>
            <p className="hero-section-heading">
          Sign Up for Emergency Savings 
and Get a $50 Starbucks Gift Card!
          </p>
          <p className="hero-section-sub-heading">Get a $50 Starbucks Card when you set up a recurring $50 deposit!</p>
          <p className="hero-section-text">
          It may be difficult to think about saving for a brighter future when everyday financial challenges get in the way, but we’re here to help. 
          </p>
          <Divider className="hero-section-divider"/>
          <p className="hero-section-text text-white">
          Sign up in less than 5 mins
          </p>
          <Form
          name="basic"
          layout="inline"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        className="hero-section-email-form-item"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input className="hero-section-email-input" placeholder="Enter your email address" /> 
      </Form.Item>
      <Form.Item
      >
        <Button className="hero-section-signup-btn" type="primary" htmlType="submit">
          SIGN UP
        </Button>
      </Form.Item>
    </Form>
            </Col>
            <Col xs={{span : 10,offset : 2}}>
              <img src="/images/hero-section-img.png" className="hero-section-img"/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
