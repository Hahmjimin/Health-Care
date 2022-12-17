import { Component } from "react";
import { Link } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import '../Recomman.css'

class Recomman extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br></br>
        <div className="option">
          <button>가슴</button>
          <button>복근</button>
          <button>등</button>
          <button>종아리</button>
          <button>어깨</button>
          <br></br>
          <br></br>
          <button>하체</button>
          <button>팔</button>
          <button>종아리</button>
          <button>스트레칭</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Recomman;
