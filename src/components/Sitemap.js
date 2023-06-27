import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import '../css/sitemap.css';

const Sitemap = () => {
    return(
       
        <div className="sitecontainer">
            <h1 className="abtitle">사이트맵</h1>
            <Container>
                <table className="sitetb">
                    <th><Link to="/about">소개</Link></th>
                    <th><Link to="/room">패키지</Link></th>
                    <th>고객문의</th>

                    <tr>
                        <td><hr /></td>
                        <td><hr /></td>
                        <td><hr /></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className="sitetd"><Link to="/map">오시는 길</Link></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className="sitetd"><Link to="/faq">FAQ</Link></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td className="sitetd"><Link to="/board">문의하기</Link></td>
                    </tr>
                </table>
            </Container>
        </div>
    );
};

export default Sitemap;