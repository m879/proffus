import React from 'react';
import './style.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Col, Row, Card, Button, Accordion } from 'react-bootstrap';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {work} from './data';




const cardStyle = {
    borderRadius: '30px',
    background: 'white',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
}

function Home() {
    return (
        <div className='home'>
            <NavBar />
            <section>
                <img style={{ width: '100%', height: '90vh' }}
                    src='https://image.freepik.com/free-photo/fresh-whole-fish_1203-1783.jpg'></img>
            </section>
            <section style={{ padding: '100px 0px' }}>
                <div className='text-center'>
                    <h1>HOW IT WORKS</h1>
                    <h6 style={{ marginTop: '30px' }}>Sea Basket delivers fresh sourced seafodd in a few easily clicks</h6>
                </div>
                <Container>
                    <div style={{ margin: '30px 0px' }}>
                        <h3>CATEGORIES</h3>
                    </div>
                    <Row>
                        {
                            work.map((row) => (
                                <Col lg={4} xs={12} className='text-center my-4'>
                                    <div className='p-4' style={cardStyle}>
                                        <img src={row.img} style={{ width: '75%', height: '150px' }}></img>
                                        <div className='py-4'>
                                            <h4>Hello World</h4>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <section style={{ padding: '50px 0px' }}>
                <div style={{ marginBottom: '80px' }} className='text-center'>
                    <h1>A GLANCE AT OUR PRODUCT</h1>
                </div>
                <Container>
                    <iframe width="100%" height="450" style={{ borderRadius: '50px' }} src="https://www.youtube.com/embed/0gT8Ty0ClHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Container>
            </section>
            <section style={{ marginTop: '50px' }} >
                <div className='text-center'>
                    <h1 style={{ marginBottom: '80px' }} >FAQS</h1>
                </div>
                <Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item style={cardStyle} className='my-4' eventKey="0">
                            <Accordion.Header>
                                <h3 className='mx-4 py-2'>Accordion Item #1</h3>
                            </Accordion.Header>
                            <Accordion.Body className='p-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={cardStyle} className='my-4' eventKey="1">
                            <Accordion.Header>
                                <h3 className='mx-4 py-2'>Accordion Item #1</h3>
                            </Accordion.Header>
                            <Accordion.Body className='p-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item style={cardStyle} className='my-4' eventKey="3">
                            <Accordion.Header>
                                <h3 className='mx-4 py-2'>Accordion Item #1</h3>
                            </Accordion.Header>
                            <Accordion.Body className='p-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </section>
            <section style={{ padding: '100px 0px' }}>
                <div style={{ margin: '30px 0px 80px 0px' }} className='text-center'>
                    <h1>HAVE A READ</h1>
                </div>
                <Container>
                    {
                        work.map((row) => (
                            <div className='p-4 my-4' style={cardStyle}>
                                <div className='p-4'>
                                    <h1>TOPICS YOU CANN'T MISS</h1>
                                    <div className='mt-4'>
                                        <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h6>
                                    </div>
                                    <div className='p-4 m-4'>
                                        <Button className='see-btn' style={{ float: 'right' }}>READ MORE <ArrowForwardIosIcon /></Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Container>
            </section>
            <section style={{ padding: '50px 0px' }}>
                <div style={{ margin: '0px 0px 80px 0px' }} className='text-center'>
                    <h1>TOPICS YOU CAN'T MISS</h1>
                </div>
                <Container>
                    {
                        work.map((row) => (
                            <div className='p-4 my-4' style={cardStyle}>
                                <div className='p-4' style={{ display: 'flex' }}>
                                    <div style={{ width: '50%' }}>
                                        <h1>TOPICS YOU CANN'T MISS</h1>
                                        <div className='my-4'>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        </div>
                                        <div>
                                            <Button className='see-btn'>READ MORE <ArrowForwardIosIcon /></Button>
                                        </div>
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <img src={row.img} style={{ width: '100%', height: '200px' }}></img>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
