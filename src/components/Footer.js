import React from "react";
import '../css/footer.css';

const Footer = () => {
    return(
        <div className="foodi">
        <br />
        <br />
        
          <div className="euphall">

                <div className="euphtit">
                    Euphoria {/*클릭 시 홈으로 이동*/}
                </div>

                회사 주소 : 서울시 강남구 잠실로 123, 연락처 : 010-1234-7979 <br />
                대표이사 가나다 / 사업자등록번호 123-45-6789 <br />
                통신판매신고번호 구로12345호 <br />

                

           </div> {/*euphall end*/}
            <div>

            <div className="snsicon">
                <img className="snic" src="/images/insta.png" alt="deluxe" />
                <img className="snic" src="/images/facebook.png" alt="deluxe" />
                <img className="snic" src="/images/twitter.png" alt="deluxe" />
                <img className="snic" src="/images/pinter.png" alt="deluxe" />
            </div>

            <div className="euphfoot">
            개인정보처리방침 | 사이트 이용약관 | 약관 및 정책 | 쿠키 설정
            </div>

           </div>

           
        <br />
        </div> /*foodi end*/

    );
};

export default Footer;