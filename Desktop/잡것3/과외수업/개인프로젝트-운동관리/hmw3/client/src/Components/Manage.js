import { Component } from "react";
import { Link } from "react-router-dom";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Manage extends Component {
    render() {
      return (
        <div className="App">
            <Header />
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br>
            <Footer />
        </div>
      );
    }
  }
  
  export default Manage;