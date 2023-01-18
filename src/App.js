
import './App.css';
import AllMovies from './pages/AllMovies';
import Favorites from './pages/Favorites';
import NewMovie from './pages/NewMovie';
import {Route, Routes} from "react-router-dom"
import WebsiteNavigation from './components/layout/WebsiteNavigation';

function App() {
  return (
    <div className="App">
      <WebsiteNavigation/>
      <Routes>
        <Route path="/" element={<AllMovies/>}/>
        <Route path="/new-movie" element={<NewMovie/>} />
        <Route path="/favorites" element={<Favorites/>} />
     </Routes>
    </div>
  );
}

export default App;
