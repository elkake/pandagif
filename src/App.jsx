import './App.css';
import ListOfGif from './Components/ListOfGif';
import { Link, Route } from 'wouter';
import Home from './Layout/Home';
import logoimg from './img/logo.png';
import Detail from './Components/Detail';
function App() {
  return (
    <div className="App">
      <div className="logoLink">
        <Link to="/">
          <img src={logoimg} alt="" />
        </Link>
      </div>

      <section>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={ListOfGif} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
