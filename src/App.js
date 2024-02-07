import { Link, Route, Routes} from "react-router-dom";
import "./styles.css";

import Home from "./Home/Home";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import Hooks from "./Hooks_2.0/Hooks2";
import Hooks_useCallback from "./Hooks_useCallback/Hooks_useCalback";
import Hooks_useRef from "./Hooks_useRef";

export default function App() {
  return (
    <div className="App">
      <h1>Первое react приложение</h1>
     
        <div className="router-nav-container ">
          <nav className="navigation-menu">
            <ul>
              <li>
                <Link to="/home" className="Link">
                  Домой
                </Link>
                <Link to="/about" className="Link">
                  О нас
                </Link>
                <Link to="/contacts" className="Link">
                  Контакты
                </Link>
                <Link to="/hooks" className="Link">
                  Hooks - 2.0
                </Link>
                <Link to="/hooksusecallback" className="Link">
                  Hooks - useCallback
                </Link>
                <Link to="/hooksuseref" className="Link">
                  Hooks - useRef
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/hooksusecallback" element={<Hooks_useCallback />}></Route>
          <Route path="/hooksuseref" element={<Hooks_useRef />}></Route>
        </Routes>
      
     
    </div>
  );
}