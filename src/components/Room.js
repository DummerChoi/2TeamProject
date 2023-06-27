import React from 'react';
import Container from 'react-bootstrap/Container';
import '../css/room.css';

function Room() {
  return (
    <div className='room_container'>
      <Container>
        <div className='row'>
            <div className="room_title">패키지 상세설명</div>
            {/* <hr class="abline" /> */}

            <div className="room_subakk">
              <img className="room_imgall" src="/images/deluxe.jpg" alt="deluxe" />
                  <ul>
                    <li className='room_li'>그랜드 디럭스룸</li>
                    <li>Size : 39~50㎡</li>
                    <li>욕실 용품 : Diptyque</li>
                    <li>개별 발렛 박스</li>
                    <li>셔츠 무료 다림질 서비스(1일 2개)</li>
                    <li>슈 폴리싱 서비스</li>
                  </ul>
            </div>

            <div className="room_subakk">
            <img className="room_imgall" src="/images/spa.jpg" alt="spa" />
                  <ul>
                    <li className='room_li'>리트릿 유포리아 스파</li>
                    <li>위치: 86F</li>
                    <li>이용 시간: 10:00 ~ 22:00 </li>
                    <li>문의: 02-1234-5678~9</li>
                    <li>※ 마지막 예약 가능 시간은 19시 30분입니다.</li>
                  </ul>
            </div>

            <div className="room_subakk">
            <img className="room_imgall" src="/images/lounge.jpg" alt="lounge" />
                  <ul>
                    <li className='room_li'>살롱 드 유포리아 (게스트 라운지)</li>
                    <li>위치 : 79F</li>
                    <li>전 투숙객 이용 가능 (07:00~22:00)</li>
                    <li>문의: 02-1234-5678~9</li>
                    <li>※ 마지막 예약 가능 시간은 19시 30분입니다.</li>
                  </ul>
              </div>

            <div className="room_subakk">
            <img className="room_imgall" src="/images/facilities.jpg" alt="부대시설" />
                  <ul>
                    <li className='room_li'>부대시설</li>
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

export default Room;