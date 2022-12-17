import './App.css';
import Main from './Components/Main';
import Diary from "./Components/Diary";
import Recomman from "./Components/Recomman";
import Manage from "./Components/Manage";
import QA from "./Components/QA";
import Sign_in from './Components/Sign_in';
import Sign_up from './Components/Sign_up';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/Diary" element={<Diary />} />
           <Route path="/Recomman" element={<Recomman />} />
           <Route path="/Manage" element={<Manage />} />
           <Route path="/QA" element={<QA />} />
           <Route path="/Sign_in" element={<Sign_in />} />
           <Route path="/Sign_up" element={<Sign_up />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
