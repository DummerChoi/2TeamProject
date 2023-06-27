import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'; // Button 컴포넌트 추가
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // 설치한 패키지


class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: '',
      password: ''
    };

    // this.getData();
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    // event.preventDefault(); 사용 이유 : https://programming119.tistory.com/100
    event.preventDefault();

    console.log('id:', this.state.id);
    console.log('password:', this.state.password);

    const param = {
      id : this.state.id, 
      password : this.state.password
    }

    // debugger;
    
    // axios: 프론트(react), 백앤드(java) 통신
    axios.get("/login",{params : param})
      .then((res) => {
        // res.data : controller에서 반환한(return) 값
        if (res.data) {
          window.location.replace("/")    
        } else {
          return alert('아이디 또는 패스워드가 일치하지않습니다.')
        }
      }).catch(error => {
        console.log('통신 중 에러가 발생하였습니다.');
        console.log(error.response);
      });
  };

  render() {
    const { id, password } = this.state;

    return (
        
      <div style={{width:'20%', margin: '180px auto'}}>
        <Container>
  
        <form
          style={{ display: 'flex', flexDirection: 'column', width:'280px'}}
          onSubmit={this.handleSubmit}
        >
          <h3 style={{ textAlign: 'center' }}>로그인</h3> <br />

          <label>Id</label>
          <input
            style={{ height: "33px", marginBottom: "-11px" }}
            type="id"
            value={id}
            placeholder=" 아이디"
            onChange={this.handleIdChange}
          /> <br />
          <label>Password</label>
          <input
            style={{ height: "33px" }}
            type="password"
            value={password}
            placeholder=" 비밀번호"
            onChange={this.handlePasswordChange}
          />

          <br /> <br />
          <Button style={{height: 45}}
          type="submit" variant="dark">Login
          </Button>
        </form>
       
        </Container>
      </div>
    );
  }
}

export default Login;