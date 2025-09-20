import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Header from "../../pages/header.jsx";
import Footer from "../../pages/footer.jsx";
import App from "../../pages/App.jsx";
import Basket from "../../pages/Basket.jsx";
import Contacts from "../../pages/Contacts.jsx";
import MadeNewDisyn from "../../pages/MadeNewDisyn.jsx";
import TeasteGuarantee from "../../pages/TeasteGuarantee.jsx";
import Delevery from "../../pages/Delevery.jsx";
import CorporateGifts from "../../pages/CorporateGifts.jsx";
import RedyKits from "../../pages/RedyKits.jsx";
import BigDelevery from "../../pages/BigDelevery.jsx";
import DessertCatalog from "../../pages/DessertCatalog.jsx";
import ForMerried from "../../pages/GiftKits/forMerried.jsx";
import Card from "../../shared/Card.jsx";
import News from "../../pages/News.jsx";
import NewsCard from "../../pages/NewsCard.jsx";
import MnkValue from "../../pages/MadeNewKits/MnkValue.jsx";
import UC from "../../pages/GiftKits/UC.jsx";
import "../styles/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delevery" element={<Delevery />} />
        <Route path="/teasteGuarantee" element={<TeasteGuarantee />} />
        <Route path="/corporateGifts" element={<CorporateGifts />} />
        <Route path="/redyKits" element={<RedyKits />} />
        <Route path="/madeNewDisyn" element={<MadeNewDisyn />} />
        <Route path="/bigDelevery" element={<BigDelevery />} />
        <Route path="/dessertCatalog" element={<DessertCatalog />} />
        <Route path="/forMerried" element={<ForMerried />} />
        <Route path="/card" element={<Card />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsCard" element={<NewsCard />} />
        <Route path="/dessertCatalog" element={<DessertCatalog />} />
        <Route path="/mnkValue" element={<MnkValue />} />
        <Route path="/uc" element={<UC />} />
       
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);