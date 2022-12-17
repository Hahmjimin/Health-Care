import { Component } from "react";
import { Link } from "react-router-dom";
import '../Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1><Link to='/' className='link' style={{ textDecoration: 'none' }}><img src="./img/logo.png" alt="{logo}"/></Link></h1>
                    <nav>
                        <ul>
                            <li className="center-li1"><Link to='/Diary'>운동일지</Link></li>
                            <li className="center-li2"><Link to='/Recomman'>운동추천</Link></li>
                            <li className="center-li3"><Link to='/Manage'>내 운동 관리</Link></li>
                            <li className="center-li4"><Link to='/QA' className='link'>Q&amp;A</Link></li>
                            <li className="right-li"><button><Link to='/Sign_in'>로그인</Link></button></li>
                            <li className="right-li"><button><Link to='/Sign_up'>회원가입</Link></button></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header;