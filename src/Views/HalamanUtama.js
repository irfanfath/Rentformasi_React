import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                            <h3>Sewa Barang</h3><a href="#" className="button small white w-button">Lihat Semua</a>
                        </div>
                    </div>
                    <div className="home-category-card red"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png" sizes="(max-width: 479px) 100vw, (max-width: 991px) 176px, 220px" alt="" className="home-category-image-2" />
                        <div className="home-category-info-2">
                            <h3>Sewa Jasa</h3><a href="#" className="button small white w-button">Lihat Semua</a>
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
                    <div className="products w-dyn-items">
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://asset.kompas.com/crops/rFCYbdP6GH_KyJwc3BidJG7ALcc=/0x0:2630x1753/750x500/data/photo/2019/06/01/1905591455.jpg" /></div>
                                <h6 className="product-card-heading">Apartemen</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </a>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://www.pegipegi.com/travel/wp-content/uploads/2018/01/hotel-kuala-lumpur.jpg" /></div>
                                <h6 className="product-card-heading">Hotel</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </a>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://cdn.vox-cdn.com/thumbor/59HfKxqDGlZ8eh6Sbkx5K0XeN9Q=/0x0:1014x672/1200x800/filters:focal(426x255:588x417)/cdn.vox-cdn.com/uploads/chorus_image/image/64789367/1.0.jpg" /></div>
                                <h6 className="product-card-heading">Villa</h6>
                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">Selengkapnya</div>
                            </a>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <a className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://odis.homeaway.com/odis/listing/c363f638-3e03-4c0e-8bce-fbc720219660.f6.jpg"/></div>
                                <h6 className="product-card-heading">Bungalow</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </a>
                        </div>
                    </div>
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
                    <div className="products w-dyn-items">
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper">
                                    <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 14vw" 
                                /></div>
                                <h6 className="product-card-heading">Happy Flower</h6>
                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$38.00</div>
                            </a>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="/product/lift-machine" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper">
                                    <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 14vw"/>
                                </div>
                                <h6 className="product-card-heading">Lift Machine</h6>
                                <div className="product-card-price">$24.00</div>
                            </a>
                        </div>
                        <div data-w-id="a677a252-157c-7121-064d-fe101c861b40" className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper">
                                    <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 14vw"/>
                                </div>
                                <h6 className="product-card-heading">Wooden Camera</h6>
                                <div className="product-card-price">$32.00</div>
                            </a>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <a href="#" className="product-card w-inline-block">
                                <div className="product-card-image-wrapper">
                                    <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 14vw"/>
                                </div>
                                <h6 className="product-card-heading">Little Rabbit</h6>
                                <div className="product-card-price">$16.00</div>
                            </a>
                        </div>
                    </div>
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
                    <div className="full-width w-dyn-list">
                        <div className="products w-dyn-items">
                            <div className="product-card-wrapper w-dyn-item">
                                <a href="#" className="product-card w-inline-block">
                                    <div className="product-card-image-wrapper">
                                        <img src="https://asset.kompas.com/crops/rFCYbdP6GH_KyJwc3BidJG7ALcc=/0x0:2630x1753/750x500/data/photo/2019/06/01/1905591455.jpg" />
                                    </div>
                                    <h6 className="product-card-heading">Apartemen</h6>
                                    <div className="product-card-price">Selengkapnya</div>
                                </a>
                            </div>
                            <div className="product-card-wrapper w-dyn-item">
                                <a href="#" className="product-card w-inline-block">
                                    <div className="product-card-image-wrapper">
                                        <img src="https://www.pegipegi.com/travel/wp-content/uploads/2018/01/hotel-kuala-lumpur.jpg" />
                                    </div>
                                    <h6 className="product-card-heading">Hotel</h6>
                                    <div className="product-card-price">Selengkapnya</div>
                                </a>
                            </div>
                            <div className="product-card-wrapper w-dyn-item">
                                <a href="#" className="product-card w-inline-block">
                                    <div className="product-card-image-wrapper">
                                        <img src="https://cdn.vox-cdn.com/thumbor/59HfKxqDGlZ8eh6Sbkx5K0XeN9Q=/0x0:1014x672/1200x800/filters:focal(426x255:588x417)/cdn.vox-cdn.com/uploads/chorus_image/image/64789367/1.0.jpg" />
                                    </div>
                                    <h6 className="product-card-heading">Villa</h6>
                                    <div className="product-card-price">Selengkapnya</div>
                                </a>
                            </div>
                            <div className="product-card-wrapper w-dyn-item">
                                <a href="#" className="product-card w-inline-block">
                                    <div className="product-card-image-wrapper"><img src="https://odis.homeaway.com/odis/listing/c363f638-3e03-4c0e-8bce-fbc720219660.f6.jpg"/></div>
                                    <h6 className="product-card-heading">Bungalow</h6>
                                    <div className="product-card-price">Selengkapnya</div>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        {/* ini paling banyak disewa */}


        <div className="section haze">
            <div className="wrapper">
                <div className="intro">
                    <div className="title">official vendor</div>
                    <h2 className="no-margin-bottom">Vendor Kami</h2>
                </div>
                <div data-w-id="6e1d3527-5090-7380-17f7-30bf0f5a58b4" className="instagram">
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" className="full-width" /></a>
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" className="full-width" /></a>
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" className="full-width" /></a>
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" className="full-width" /></a>
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" className="full-width" /></a>
                    <a href="https://instagram.com" target="_blank" className="instagram-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" className="full-width" /></a>
                </div>
                <a href="https://instagram.com" target="_blank" className="button w-button">Lihat Lainnya</a>
            </div>
        </div>

    </div>
        )
    }
}

export default HalamanUtama;