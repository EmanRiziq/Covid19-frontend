import { Route, Routes } from 'react-router-dom';
import './App.css';
import Country from './components/Country';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Record from './components/Record';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/allcountry" element={<Country />} />
          <Route path="/records" element={<Record />} />


        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
