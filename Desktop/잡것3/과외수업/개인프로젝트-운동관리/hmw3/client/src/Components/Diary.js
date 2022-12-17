import { Component } from "react";
import { Link } from "react-router-dom";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import '../Header.css'

class Diary extends Component {
    render() {
      return (
        <div className="App">
            <Header />
                {/* <form className="TodoInsert" onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={value} placeholder="할 일을 입력하세요" />
                <button type="submit"></button>
                </form> */}
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
            <Footer />
        </div>
      );
    }
  }
  
  export default Diary;