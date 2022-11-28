import { Link } from "react-router-dom";
import '../Main.css';

function Main() {
  return (
    <div>
      <header>
        <div className="title">
          <h1><span className="Netflix">Netflix</span>  vs  <span className="Disney">Disney plus</span></h1>
        </div>
      </header>
      <section>
        <div className="first">
          <h2>세상에는 수많은 비디오 플랫폼이 있다.<br></br>그 중 <span className="Netflix">Netflix</span>와 <span className="Disney">Disney plus</span>에서 볼 수 있는<br></br>비디오들을 한 눈에 보고 비교해보자!</h2>
        </div>
        <div className="Netdiv">
          <img src="./images/Netflix.png" alt="Netflix" className="Netimg"></img>
        </div>
        <div className="Netexp">
          <h2>미국의 글로벌 1위 멀티미디어 엔터테이먼트 OTT 기업<br></br>인터넷(net)+영화(flicks)를 합쳐 만들어진 <span className="Netflix">Netflix</span></h2>
        </div>
        <table border="1">
          <tr  class="red">
            <td colspan="5">Netflix 요금제</td>
          </tr>
          <tr>
            <td>플랜</td>
            <td>광고형 베이식</td>
            <td>베이식</td>
            <td>스탠다드</td>
            <td>프리미엄</td>
          </tr>
          <tr>
            <td>월 요금</td>
            <td>5,500원</td>
            <td>9,500원</td>
            <td>13,500원</td>
            <td>17,000원</td>
          </tr>
          <tr>
            <td>해상도</td>
            <td colspan="2">720p</td>
            <td>1080p</td>
            <td>4K + HDR</td>
          </tr>
          <tr>
            <td>동시접속 가능 인원</td>
            <td colspan="2">1</td>
            <td>2</td>
            <td>4</td>
          </tr>
        </table>
        <div className="nextpage">
          <div className="netbtn"><Link to="/Net"><button class="netbtn">Netflix</button></Link></div>
        </div>


          <div className="disimgdiv">
            <img src="./images/disney.png" alt="disney plus" className="disimg"></img>
          </div>
          <div className="disexp">
            <h2>세계 최대 콘텐츠 기업인 디즈니의 온라인 동영상 서비스(OTT)로,<br></br><span className="Disney">Disney plus</span>에서는 월트디즈니컴퍼니가 보유한 <br></br>영화와 오리지널 TV 프로그램 등을 볼 수 있다.</h2>
          </div>
          <table border="1">
            <tr class="navy">
              <td colspan="3">Disney plus 요금제</td>
            </tr>
            <tr class="border">
              <td>월간</td>
              <td>연간</td>
              <td>동시접속 가능 인원</td>
            </tr>
            <tr>
              <td>9,900원</td>
              <td>9,9000원</td>
              <td>4명</td>
            </tr>
          </table>
          <div className="nextpage">
          <div className="disbtn"><Link to="/Disn"><button class="disbtn">disney plus</button></Link></div>
        </div>
      </section>
    </div>
    
  );
}

export default Main;
