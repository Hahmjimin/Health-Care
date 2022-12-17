import { Component } from "react";
import { Link } from "react-router-dom";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class QA extends Component {
    render() {
      return (
        <div className="App">
            <Header />
                <h1>Q&amp;A</h1>
                <form method="post">
                     <form method="post">
                        <div class="reply_write">
                            <div class="form_content thema_apply">
                                <textarea id="comment"
                                name="comment"
                                placeholder="댓글을 입력해주세요."></textarea>
                                </div>
                                <div class="form_reg">
                                    <label><input type="checkbox" name="secret" />비밀글</label>
                                </div>
                                <div class="form_reg">
                                    <button type="button" class="btn_register thema_apply"
                                    onclick="addComment(this, 42); return false;">등록</button>
                            </div>
                        </div>
                    </form>
                </form>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
            <Footer />
        </div>
      );
    }
  }
  
  export default QA;