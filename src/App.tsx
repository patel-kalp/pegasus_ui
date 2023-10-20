import { NavBar, Footer } from './components';
import { Home, GettingStarted, Examples, Docs, LogIn } from './pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GettingStarted" element={<GettingStarted />} />
          <Route path="/Examples" element={<Examples />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </Router>
      <div className="content">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;