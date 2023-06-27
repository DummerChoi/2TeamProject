import React from 'react';
import Container from 'react-bootstrap/Container';
import '../css/about.css';

function About() {
  return (

    <div className='about_container'>
      <Container>
        <div className='row'>
              <div className="about_detail">
                  <span className='about_txt'>더 유포리아 소개</span><br/>
                  80층~100층에서 즐기는 파노라믹한 스카이라인<br/>
                  미쉐린 스타 셰프 야닉 알레노의 다이닝과<br/>
                  세계 최고층에 위치한 웨딩&컨벤션<br/>
                  Live beyond expectations, EUPHORIA
              </div>

              <div className="about_title">ROOMS & SUITE</div>
              <div className="about_subakk">
                  <img className="about_imgall" src="/images/rooms.jpg" alt="ROOMS&SUITE" />
                  <ul>
                    <li className='about_li'>전 객실 서울의 환상적인 파노라믹뷰</li>
                    <li>전 객실 서울의 환상적인 파노라믹뷰</li>
                    <li>세련미와 편안함이 어우러진 격조 높은 인테리어</li>
                    <li>최상의 숙면을 위한 이탈리아 럭셔리 침구</li> 
                  </ul>
              </div>

              <div className="about_title">DINING</div>
              <div className="about_subakk">
                  <img className="about_imgall" src="/images/dining.jpg" alt="DINING" />
                  <ul>
                    <li className='about_li'>미식가들을 위한 고메 호텔</li>
                    <li>한식의 새로운 빛깔, 미쉐린 1스타 코리안 퀴진 '비채나'</li>
                    <li>국내 최대의 샴페인 셀렉션, 프리미엄 바 '바81'</li>
                    <li>하늘에서 즐기는 차 한잔의 여유 '더 라운지' </li> 
                  </ul>
              </div>

              <div className="about_title">FACILITIES</div>
              <div className="about_subakk">
                  <img className="about_imgall" src="/images/facilities.jpg" alt="FACILITIES" />                
                  <ul>
                    <li className='about_li'>프레스티지 리프레싱존</li>
                    <li>건강한 아름다움 ‘리트릿 유포리아 스파</li>
                    <li>구름 위에서 즐기는 최고급 사우나, 피트니스센터 및 실내수영장</li>
                  </ul>
              </div>

              <div className="about_title">WEDDING & CONFERENCEE</div>
              <div className="about_subakk">
                  <img className="about_imgall" src="/images/wedding.jpg" alt="WEDDING&CONFERENCE" />
                  <ul>
                    <li className='about_li'>고품격 웨딩 & 컨벤션</li>
                    <li>웅장한 층고와 한강 조망이 돋보이는 세계 최고층 위치</li>
                    <li>미쉐린 셰프가 엄선한 연회 메뉴 및 최신 트렌드의 웨딩 컨셉</li>
                    <li>자연채광에 최적화된 LED 스크린 및 특수조명 등의 최첨단 장비</li> 
                  </ul>
              </div>

          {/* 나머지 내용도 동일하게 작성 */}
          </div>
      </Container>
    </div>
  );
}

export default About;