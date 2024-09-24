import React, {FC} from 'react';
import ReactDOM from 'react-dom/client';
//Components
import './Main.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import Img_1 from '../assets/images/illustration-five-stars.webp';
import Img_2 from '../assets/images/illustration-multiple-platforms.webp';
import Img_3 from '../assets/images/illustration-consistent-schedule.webp';
import Img_4 from '../assets/images/illustration-schedule-posts.webp';
import Img_5 from '../assets/images/illustration-grow-followers.webp';
import Img_6 from '../assets/images/illustration-audience-growth.webp';
import Img_7 from '../assets/images/illustration-create-post.webp';
import Img_8 from '../assets/images/illustration-ai-content.webp';

const Main: FC = () => {
    AOS.init();

    return (
        <Container fluid className='max-vh-100 cs-bg py-5 px-lg-5 px-0'>
            <Row className='m-0 overflow-hidden'>
                <Col as={Row} lg={{ span: 9, order: 2}} xs={{ span: 12, order: 1}} className='m-0 p-0'>
                    <Col as={Row} lg={{span: 12, order: 1}} className='m-0 p-0'>
                        <Col as={Row} lg={8} xs={12} className='m-0 p-0'>
                            <Col xs={12} className='m-0 p-3'>
                                <Container data-aos="fade-down" className='w-100 h-100 py-5 cs-bg-purple rounded rounded-4 d-flex flex-column align-items-center justify-content-center'>
                                    <h1 className='px-5 mx-lg-5 mx-0 cs-fw-500 cs-letter-spacing lh-1 display-3 text-white text-center'>Social Media <span className='cs-text-yellow'>10x</span> <span className='fst-italic me-1'>Faster</span> with AI</h1>
                                    <Image fluid src={Img_1} alt='5 stars' className='w-50 mt-3' />
                                    <p className='fs-4 text-white text-center'>Over 4,000 5-star reviews</p>
                                </Container>
                            </Col>
                            <Col lg={6} xs={12} className='m-0 p-3'>
                                <Container data-aos="fade-up-right" data-aos-delay="200" className='cs-ratio w-100 gap-3 px-3 py-3 overflow-hidden bg-white rounded rounded-4 d-flex flex-column align-items-start justify-content-center'>
                                    <Image src={Img_2} alt='mult platform' className='cs-w-2 mb-3' />
                                    <h2 className='h1 cs-letter-spacing-2 lh-1 me-5'>Manage multiple accounts and platforms.</h2>
                                </Container>
                            </Col>
                            <Col lg={6} xs={12} className='m-0 p-3'>
                                <Container data-aos="fade-up-left" data-aos-delay="200" className='cs-ratio pb-0 w-100 overflow-hidden cs-bg-yellow rounded rounded-4 d-flex flex-column align-items-center justify-content-top gap-3 px-3 pt-3'>
                                    <h2 className='h1 cs-letter-spacing-2 lh-1 me-5'>Maintain a consistent posting schedule.</h2>
                                    <Image src={Img_3} alt='consistent schedule' className='w-100' />
                                </Container>
                            </Col>
                        </Col>
                        <Col lg={4} xs={12} className='m-0 p-3'>
                            <Container data-aos="fade-left" data-aos-delay="100" className='w-100 h-100 overflow-hidden pe-0 py-5 gap-3 cs-bg-purple-2 rounded rounded-4 d-flex flex-column align-items-start justify-content-center ps-4'>
                                <h2 className='mb-3 pe-4 display-5 cs-fw-500 lh-1 cs-letter-spacing'>Schedule to social media.</h2>
                                <Image  src={Img_4} alt='shedule' className='cs-w-2' />
                                <p className='mt-3 lh-1 pe-4 fs-4'>Optimize post timings to publish content at the perfect time for your audience.</p>
                            </Container>
                        </Col>
                    </Col>
                    <Col as={Row} xs={{span: 12, order: 2}} className='m-0 p-0'>
                        <Col lg={4} xs={12} className='m-0 p-3'>
                            <Container data-aos="fade-up" data-aos-delay="100" className='p-3 w-100 h-100 bg-white rounded rounded-4 d-flex flex-column align-items-center justify-content-center'>
                                <h2 className='display-2 cs-fw-500 w-100 mb-0'>&gt;56%</h2>
                                <p className='w-100 cs-fw-500 text-center fs-4 lh-1'>faster audience growth</p>
                                <Image fluid src={Img_6} alt='audience growth' className='mt-3 px-4' />
                            </Container>
                        </Col>
                        <Col lg={8} xs={12} className='m-0 p-3'>
                            <Container data-aos="fade-left" data-aos-delay="200" className='p-4 w-100 h-100 cs-bg-purple rounded rounded-4 d-flex flex-lg-row flex-column align-items-center justify-content-around'>
                                <Image fluid src={Img_5} alt='grow followers' className='cs-w' />
                                <h2 className='text-white cs-fw-500 cs-letter-spacing-2 display-5 w-50 lh-1 text-center text-lg-start'>Grow followers with non-stop content.</h2>
                            </Container>
                        </Col>
                    </Col>
                </Col>
                <Col as={Row} lg={{span: 3, order: 1}} xs={{span: 12, order: 2}} className='m-0 p-0'>
                    <Col xs={12} className='p-3'>
                        <Container data-aos="fade-right" data-aos-delay="100" className='w-100 h-100 cs-bg-yellow-2 rounded rounded-4 px-5 py-4 cs-gi-7 d-flex flex-column align-items-center justify-content-center'>
                            <h2 className='cs-fw-500 display-5 lh-1 cs-letter-spacing'>Create and schedule content <span className='cs-text-perple fst-italic'>quicker.</span></h2>
                            <Image fluid src={Img_7} alt='audience growth' className='w-100 mt-3' />
                        </Container>
                    </Col>
                    <Col xs={12} className='p-3'>
                        <Container data-aos="fade-right" data-aos-delay="300" className='w-100 h-100 cs-bg-yellow p-4 rounded rounded-4 cs-gi-8 d-flex flex-column align-items-center justify-content-between'>
                            <h2 className='cs-fw-500 lh-1 display-5 cs-letter-spacing pe-4'>Write your content using AI.</h2>
                            <Image fluid src={Img_8} alt='ai content' />
                        </Container>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;