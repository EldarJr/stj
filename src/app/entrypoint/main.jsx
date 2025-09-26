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
import DessertCatalog from "../../pages/DessertCatalog.jsx";
import ForMerried from "../../pages/GiftKits/forMerried.jsx";
import Card from "../../shared/Card.jsx";
import News from "../../pages/News.jsx";
import NewsCard from "../../pages/NewsCard.jsx";
import MnkValue from "../../pages/MadeNewKits/MnkValue.jsx";
import UC from "../../pages/GiftKits/UC.jsx";
import MnkDelis from "../../pages/MadeNewKits/MnkDelis.jsx";
import MnkDop from "../../pages/MadeNewKits/Mnk.Dop.jsx";
import ValuePrint from "../../pages/ConstructorPrint/ValuePrint.jsx";
import ChooseImg from "../../pages/ConstructorPrint/ChooseImg.jsx";
import PrintDop from "../../pages/ConstructorPrint/PrintDop.jsx";
import Error from "../../shared/Error404.jsx";
import ErrorTwo from "../../shared/Error.404.2.jsx";
import Politic from "../../pages/Politic.jsx";
import Auth from "../../pages/Auth&Login/Auth.jsx";
import Entrance from "../../pages/Auth&Login/Entrance.jsx";
import ForgotPass from "../../pages/Auth&Login/ForgotPass.jsx";
import ForgotPass2 from "../../pages/Auth&Login/ForgotPass2.jsx";
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
        {/* <Route path="/bigDelevery" element={<BigDelevery />} /> */}
        <Route path="/dessertCatalog" element={<DessertCatalog />} />
        <Route path="/forMerried" element={<ForMerried />} />
        <Route path="/card" element={<Card />} />
        <Route path="/news" element={<News />} />
        <Route path="/newsCard" element={<NewsCard />} />
        <Route path="/dessertCatalog" element={<DessertCatalog />} />
        <Route path="/mnkValue" element={<MnkValue />} />
        <Route path="/mnkDelis" element={<MnkDelis />} />
        <Route path="/mnkDop" element={<MnkDop />} />
        <Route path="/uc" element={<UC />} />
        <Route path="/vp" element={<ValuePrint />} />
        <Route path="/chooseImg" element={<ChooseImg />} />
        <Route path="/print" element={<PrintDop />} />
        <Route path="/error" element={<Error />} />
        <Route path="/errorTwo" element={<ErrorTwo />} />
        <Route path="/politic" element={<Politic />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/entrance" element={<Entrance />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
          <Route path="/forgotPass2" element={<ForgotPass2 />} />




      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);