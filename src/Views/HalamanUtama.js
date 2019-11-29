import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BestRent from "../Component/Konten/BestRent";
import Penginapan from "../Component/Konten/Penginapan";
import Sport from "../Component/Konten/Sport";

class HalamanUtama extends Component{
    render(){
        return(
    <div className="page-wrapper">
        <div className="section hero-section">
            <div className="wrapper text-white">
                <div className="hero-intro"> 
                    <div className="title">
                        Penuhi Kebutuhan Anda Dengan Biaya Terjangkau
                    </div>
                    <h1>100% Aman & Nyaman</h1><NavLink to="/barang" className="button w-button">Lihat Katalog</NavLink>
                </div>
            </div>
        </div>
        {/* ini subheader */}

        <div id="Scroll-Section" className="section haze">
            <div className="wrapper">
                <div className="home-categories">
                    <div className="home-category-card"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png" sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className="home-category-image-1" />
                        <div className="home-category-info-1">
                            <h3>Sewa Barang</h3><NavLink to="/barang" className="button small white w-button">Lihat Semua</NavLink>
                        </div>
                    </div>
                    <div className="home-category-card red"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png" sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className="home-category-image-2" />
                        <div className="home-category-info-2">
                            <h3>Sewa Jasa</h3><NavLink to="/jasa" className="button small white w-button">Lihat Semua</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ini kategori barang dan jasa */}

        <div className="section haze no-padding-top">
            <div className="wrapper">
                <div className="shop-header">
                    <h3 className="no-margin">Sewa Penginapan</h3><a href="#" className="link arrow-link">Lihat Semua</a>
                    <div className="shop-header-line">
                        <div className="shop-header-color"></div>
                    </div>
                </div>
                <div className="full-width w-dyn-list">
                    <Penginapan/>
                </div>
            </div>
        </div>        
        <div className="section haze no-padding-top">
            <div className="wrapper">
                <div className="shop-header">
                    <h3 className="no-margin">Sewa Sarana Olahraga</h3><a href="/catalog" className="link arrow-link">Lihat Semua</a>
                    <div className="shop-header-line">
                        <div className="shop-header-color"></div>
                    </div>
                </div>
                <div className="full-width w-dyn-list">
                    <Sport/>
                </div>
            </div>
        </div>

        {/* ini kategori penginapan sama sarana olahraga */}

        <div id="More-About" className="sectionhomevendor">
            <div className="wrapper">
                <div className="shop-header">
                        <h3 className="no-margin">Paling Banyak Disewa</h3><a href="/catalog" className="link arrow-link">Lihat Lainnya</a>
                        <div className="shop-header-line">
                            <div className="shop-header-color"></div>
                        </div>
                </div>
                    <BestRent/>
            </div>
        </div>
        {/* ini paling banyak disewa */}


        <div className="section haze">
            <div className="wrapper">
                <div className="intro">
                    <div className="title">official vendor</div>
                    <h2 className="no-margin-bottom">Vendor Kami</h2>
                </div>
                <div className="instagram">
                    <a className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" className="full-width" /></a>
                    <a className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" className="full-width" /></a>
                    <a className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" className="full-width" /></a>
                    <a className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" className="full-width" /></a>
                    <a className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" className="full-width" /></a>
                    <a  className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" className="full-width" /></a>
                </div>
                <a href="https://instagram.com" target="_blank" className="button w-button">Lihat Lainnya</a>
            </div>
        </div>

    </div>
        )
    }
}

export default HalamanUtama;