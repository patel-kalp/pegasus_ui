import { NavBar, Footer } from './components';
import { Home, GettingStarted, HttpsRequests, SDK, Docs, LogIn } from './pages'
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
            <Route path="/gettingStarted" element={<GettingStarted />} />
            <Route path="/httpsExample" element={<HttpsRequests />} />
            <Route path="/sdkExmaple" element={<SDK />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/logIn" element={<LogIn />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;