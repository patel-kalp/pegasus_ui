import { NavBar, Footer } from './components';
import { Home, GettingStarted, Examples, Docs, LogIn,SDK} from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/GettingStarted" element={<GettingStarted />} />
            <Route path="/Examples" element={<Examples />} />
            <Route path="/SDK" element={<SDK />} />
            <Route path="/Docs" element={<Docs />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;