import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '.././containers/style.css';

function Footer() {
    return (
        <div className='bg-primary text-white' style={{ padding: '50px 0px' }}>
            <Container>
                <Row className='footer-box'>
                    <Col lg={4} xs={12} className='py-4'>
                        <img style={{ width: '200px', height: '100px' }}
                            src='https://image.freepik.com/free-photo/fresh-whole-fish_1203-1783.jpg'></img>
                    </Col>
                    <Col lg={4} xs={12} className='py-4'>
                        <div>
                            <p>Support</p>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                        </div>
                    </Col>
                    <Col lg={4} xs={12} className='py-4'>
                        <div>
                            <p>Terms and Condition</p>
                            <p>Return and Refund Policy</p>
                            <p>Shipping and Delivery Policy</p>
                        </div>
                    </Col>
                </Row>
                <div className='my-4 text-center'>
                    <p>Sea Basket | All Rights | 2021 Copyright</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;
