import React from "react";
import { NavLink } from "react-router-dom";

const SelesaiTransaksi = () => {
  return (
    <div className="page-wrapper">
      <div className="section hero-section">
            <div className="wrapper text-white">
                <div className="hero-intro"> 
                    <div className="title">
                        Apabila 1 X 24 jam pesanan anda belum terkonfirmasi harap hubungi kami 
                    </div>
                    <h1>Terima Kasih Atas Kepercayaan Anda</h1><NavLink to="/barang" className="button w-button">Lihat Status Pesanan</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SelesaiTransaksi;