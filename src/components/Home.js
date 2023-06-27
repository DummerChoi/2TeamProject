import React from "react";
import { UncontrolledCarousel } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, } from 'reactstrap'
import '../css/home.css';

const About = () => {
    return(
        <div>
            <style>
                {`.carousel-item {height: 800px;}`}
                {`.carousel-item img {height: 100%; }`}
            </style>
            <UncontrolledCarousel
              items={[
                {
                  key: 1,
                  src: "/images/hotel05.jpg"
                  
                },
                {
                  key: 2,
                  src: "/images/facilities.jpg"
                },
                {
                  key: 3,
                  src: "/images/hotel04.jpg"
                }
              ]}
            />
            <div className="cate">
                <div className="row">
                  <div className="catecont col-lg-4 col-md-6">
                    <div className="gory gory2">
                      <Card>
                        <Card.Img className="hoim" variant="top" src="images/rooms.jpg" />
                        <Card.Body>
                        <Card.Title>그랜드 디럭스룸</Card.Title>
                        <Card.Text>
                        모든 가구를 데칼코마니 스타일로 배치하여
                        객실에 들어서는 순간 신선한 심미적 충격을 선사합니다.
                        </Card.Text>
                        <a href="Room"><Button variant="outline-dark">바로가기</Button></a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>

                    <div className="catecont col-lg-4 col-md-6">
                      <div className="gory gory2">
                        <Card>
                          <Card.Img className="hoim" variant="top" src="images/spa.jpg" />
                          <Card.Body>
                          <Card.Title>리트릿 유포리아 스파</Card.Title>
                          <Card.Text>
                          엄선한 스킨케어 제품을 사용하여 개인을 위한
                          맞춤형 스파 트리트먼트를 경험하실 수 있습니다.
                          </Card.Text>
                          <a href="Room"><Button variant="outline-dark">바로가기</Button></a>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>

                    <div className="catecont col-lg-4 col-md-6">
                      <div className="gory gory2">
                        <Card>
                          <Card.Img className="hoim" variant="top" src="images/lounge.jpg" />
                          <Card.Body>
                          <Card.Title>살롱 드 유포리아 (게스트 라운지)</Card.Title>
                          <Card.Text>
                          살롱 드 유포리아는 유럽풍 라이브러리 컨셉의
                          투숙객 전용 라운지로 차와 커피를 즐길 수 있습니다.
                          </Card.Text>
                          <a href="Room"><Button variant="outline-dark">바로가기</Button></a>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                </div>
            </div>

        </div> // return end

    );
};

export default About;