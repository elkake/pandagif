import './App.css';
import Home from './Layout/Home';
import logoimg from './img/logo.png';
import Detail from './Components/Detail';
import { Routes, Route, Link } from 'react-router-dom';
import SearchResult from './Components/SearchResult';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifContext';
function App() {
  return (
    <Context.Provider value={{ name: 'perez' }}>
      <div className="App">
        <div className="logoLink">
          <Link to="/">
            <img src={logoimg} alt="" />
          </Link>
        </div>
        <h2>Gifs mas populares</h2>
        <GifsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:keyword" element={<SearchResult />} />
            <Route path="/gif/:id" element={<Detail />} />
          </Routes>
        </GifsContextProvider>
      </div>
    </Context.Provider>
  );
}

export default App;
