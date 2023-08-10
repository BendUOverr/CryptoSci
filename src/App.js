import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Signin } from "./routes/Signin";
import { Signup } from "./routes/Signup";
import { Account } from "./routes/Account";
import { CoinPage } from "./routes/CoinPage";
import axios from 'axios'
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
     // console.log(response.data)
    })
  },[url])
  return (
   <ThemeProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home coins={coins} />} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/account' element={<Account />} />
      <Route path='/coin/:coinId' element={<CoinPage />}>
        <Route path='coinId' />
      </Route>
    </Routes>
    <Footer />
   </ThemeProvider>
  );
}

export default App;
