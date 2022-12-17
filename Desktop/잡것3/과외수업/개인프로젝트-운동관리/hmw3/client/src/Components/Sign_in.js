import { Component } from "react";
import { Link } from "react-router-dom";
import "../Sign_in.css";

class Sign_in extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src="./img/logo2.png" alt="{logo2}" />
        <br></br>
        <form>
          <div className="entry">
            <input type="text" placeholder="  아이디"></input>
            <br></br>
            <input type="text" placeholder="  비밀번호"></input>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/">
            <button className="login">로그인</button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/">
            <button className="back">돌아가기</button> &nbsp;
          </Link>
          <Link to="/Sign_up">
            <button className="new">회원가입</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default Sign_in;
