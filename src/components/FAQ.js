import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import '../css/faq.css';

function FAQ() {
    return (
        <div className="faqcontainer">
          <Container>
            <div className="accodionq">자주묻는 질문</div>
              <Accordion defaultActiveKey="">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Q 회원정보는 수정은 어디에서 하나요?</Accordion.Header>
                    <Accordion.Body>
                      A <br />
                    <div className="accodiontxt">
                      홈페이지 Euphoria 회원 로그인 후 [마이페이지] ‘프로필 수정'에서 간단한 회원 정보 수정이 가능합니다. <br />
                      단, 회원명 및 주소지 정보는 멤버십 센터를 통해서만 변경 가능합니다. <br />
                      멤버십 센터 유선 문의 또는 홈페이지 Euphoria 페이지 [문의하기]를 통해 수정을 요청해 주시기 바랍니다. <br />
                      </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Q 객실 예약을 취소는 언제까지 해야 하나요?</Accordion.Header>
                   <Accordion.Body>
                    A <br />	
                    <div className="accodiontxt">
                    투숙 하루 전 오후 6시까지 입니다. <br />
                    이후 발생되는 취소 및 변경의 경우 1박 요금 100%의 penalty가 부과될 수 있습니다. <br />
                    특정 행사 또는 festive day의 경우 취소 및 변경 규정이 다르게 적용될 수 있습니다. <br />
                    </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Q 객실 내 비품은 준비되어 있나요?</Accordion.Header>
                    <Accordion.Body>
                     A <br />
                    <div className="accodiontxt">
                    생수 두 병, 샴푸, 린스, 샤워젤, 바디로션, 빗, 반짇고리, 샤워캡, 면봉, 화장솜, 드라이기, 다리미, 다림판, 녹차, 홍차, 전기 포트, 금고, 슬리퍼, 가운, 필기도구 등 <br />
                    가습기, DVD 플레이어 & CD 플레이어, 바둑판 등은 고객 센터로 연락 주시면 객실로 가져다 드립니다. <br />
                    </div>                    
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Q 수영장 운영 시간은 어떻게 되나요?</Accordion.Header>
                    <Accordion.Body>
                     A <br />
                    <div className="accodiontxt">
                    실내 수영장 이용시간은 오전 6시부터 오후 9시 30분, 야외 유아풀 이용시간은 오전 9시부터 오후 9시까지입니다. <br />
                    투숙객에 한하여 1일 1회 무료 입장이 가능합니다. <br />
                    *운영시간 <br />
                    평일 : 일 2회 운영(6시 ~ 11시 / 12시 ~ 21시30분) <br />
                    주말 : 일 6회 운영(6시 ~ 11시 / 12시 ~ 13시40분 / 14시 ~ 15시40분 / 16시 ~ 17시40분 / 18시 ~ 19시40분 / 20시 ~ 21시30분) <br />
                    (매 월 두 번째, 네 번째 월요일은 휴무이며 야외 유아풀은 여름 성수기인 7월, 8월에만 운영합니다)
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </Container>
        </div>
    );
  }
  

export default FAQ;