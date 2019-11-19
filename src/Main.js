import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import HalamanUtama from "./Views/HalamanUtama";
import Barang from "./Views/Barang";
import Bantuan from "./Views/Bantuan";
import Jasa from "./Views/Jasa";
import Header from "./Component/Konten/Header"
import Footer from "./Component/Konten/Footer";
import About from "./Views/About";
import Syarat from "./Views/Syarat";
import Barang_Hasil from "./Component/Barang_Hasil";
import Product_Detail from "./Views/Product_Detail";
import Proses_Transaksi from "./Views/Proses_Transaksi";
import Cart from "./Component/Cart";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <Header/>
            <Route exact path="/" component={HalamanUtama}/>
            <Route path="/barang" component={Barang}/>
            <Route path="/jasa" component={Jasa}/>
            <Route path="/bantuan" component={Bantuan}/>
            <Route path="/about" component={About}/>
            <Route path="/syarat" component={Syarat}/>
            <Route path="/barang_hasil" component={Barang_Hasil}/>
            <Route path="/product_detail/:idBarang" component={Product_Detail}/>
            <Route path="/proses_transaksi" component={Proses_Transaksi}/>
            <Route path="/cart" component={Cart}/>
          <Footer/>
        </HashRouter>
    );
  }
}

 
export default Main;


