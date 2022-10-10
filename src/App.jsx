import './App.css';
import Home from './Layout/Home';
import logoimg from './img/pandaLogo.svg';
import Detail from './Components/Detail';
import { Routes, Route, Link } from 'react-router-dom';
import SearchResult from './Components/SearchResult';
import { GifsContextProvider } from './context/GifContext';
function App() {
  return (
      <div className="App">
        <div className="logoLink">
          <Link to="/">
            <img src={logoimg} alt="panda keyboard" />
            <div className='logoLink_name'><p>PANDA</p><p>GIF</p></div>
          </Link>
        </div>
        <GifsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchResult />} />
            <Route path="/gif/:id" element={<Detail />} />
          </Routes>
        </GifsContextProvider>
      </div>
  );
}

export default App;
