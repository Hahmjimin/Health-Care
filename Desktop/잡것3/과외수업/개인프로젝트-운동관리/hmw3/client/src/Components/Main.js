import { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import '../Main.css';
import FadeIn from 'react-fade-in';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Mainscreen">
                    <br></br><br></br><br></br><br></br><br></br>
                    <FadeIn>
                        <h1>부산SW마이스터고등학교의 피트니스센터</h1>
                        <h1>올바른 이용을 위한 Health Care</h1>
                        <br></br>
                        <button>자세히 보기</button>
                    </FadeIn>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                </div>

                <br></br><br></br><br></br><br></br><br></br><br></br>
                <h1>Health Care</h1>
                <h3>Health Care는 피트니스실을 이용할 때</h3>
                <h3>자신의 몸에 맞는 운동을 할 수 있도록 도와줍니다.</h3>
                <br></br><br></br>
                <div>
                    <ul>
                        <li className="func1">
                            <img src="./img/todolist.png" alt=""></img><br></br>
                            <h2>Diary</h2>
                            하루 동안의 운동을 기록하세요.
                        </li>
                        <li className="func2">
                            <img src="./img/machine.png" alt=""></img><br></br>
                            <h2>Recomman</h2>
                            원하는 부위의 운동을 추천받으세요.
                        </li>
                        <li className="func3">
                            <img src="./img/body.png" alt=""></img><br></br>
                            <h2>Manage</h2>
                            자신의 몸을 기록하세요.
                        </li>
                        <li className="func4">
                            <img src="./img/Q&amp;A.png" alt=""></img><br></br>
                            <h2>Q&amp;A</h2>
                            개발자에게 개선이 필요한 점을 알려주세요.
                        </li>
                    </ul>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
                <Footer />
            </div>
        )
    }
}
export default Main;