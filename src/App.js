import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer';
import Listing from './Pages/Listing';
 // Đảm bảo đường dẫn đúng
 import Contact from './Pages/Contact/contact';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };

  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cat/:id' exact element={<Listing />} />
          <Route path='contact' exact element={<Contact />} />

        </Routes>

        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
