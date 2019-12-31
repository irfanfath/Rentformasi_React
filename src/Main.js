import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import HalamanUtama from "./Views/HalamanUtama";
import Barang from "./Views/Barang";
import Bantuan from "./Views/Bantuan";
import Jasa from "./Views/Jasa";
import Header from "./Component/Konten/Header"
import Footer from "./Component/Konten/Footer";
import About from "./Views/About";
import Syarat from "./Views/Syarat";
import Product_Detail from "./Views/Product_Detail";
import Proses_Transaksi from "./Views/Proses_Transaksi";
import Konfirmasi from "./Views/Konfirmasi";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import SelesaiTransaksi from "./Views/SelesaiTransaksi";
import Sewaan from "./Views/Sewaan";
import Cart from "./Views/Cart";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <Header/>
          <DynamicScrollToTop/>
            <Route exact path="/" component={HalamanUtama}/>
            <Route path="/barang" component={Barang}/>
            <Route path="/jasa" component={Jasa}/>
            <Route path="/bantuan" component={Bantuan}/>
            <Route path="/about" component={About}/>
            <Route path="/syarat" component={Syarat}/>
            <Route path="/product_detail/:idBarang" component={Product_Detail}/>
            <Route path="/proses_transaksi" component={Proses_Transaksi}/>
            <Route path="/konfirmasi" component={Konfirmasi}/>
            <Route path="/selesaitransaksi" component={SelesaiTransaksi}/>
            <Route path="/sewaan" component={Sewaan}/>
            <Route path="/cart" component={Cart}/>
          <Footer/>
        </HashRouter>
    );
  }
}

 
export default Main;



