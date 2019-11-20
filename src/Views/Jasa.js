import React, { Component } from "react";
import Sidebar from "../Component/Konten/Sidebar";
import Cari from "../Component/Konten/Cari";
import Sorting from "../Component/Konten/Sorting";

class Jasa extends Component{
    render(){
        return(
            <div className="section">
            <Cari/>
            <div className="wrapper">
                <div className="shop-header">
                    <h3 className="no-margin w-hidden-small w-hidden-tiny">Semua Jasa</h3>
                    <Sorting/>
                    <div className="shop-header-line">
                        <div className="shop-header-color green w-hidden-small w-hidden-tiny"></div>
                    </div>
                </div>

                <div className="section no-padding-top">
                    <div className="full-width w-dyn-list">
                        <div className="boxbarang">
                            <div className="delivery-info w-richtext">
                                <div className="products w-dyn-items">
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/teddy-bear" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Teddy Bear</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$30.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/happy-flower" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Happy Flower</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$38.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/mega-plush-toy" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Mega Plush Toy</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$38.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/lift-machine" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Lift Machine</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$24.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/cute-dog" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Cute Dog</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$24.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/wooden-camera" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Wooden Camera</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$32.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/little-rabbit" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min-p-800.png 800w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min-p-1080.png 1080w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Little Rabbit</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$16.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/little-friend" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Little Friend</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$27.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/christmas-deer" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Christmas Deer</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$19.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/rainbow-truck" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Rainbow Truck</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$28.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/pluto-yellow-dog" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Pluto Yellow Dog</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$28.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/happy-dog" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Happy Dog</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$30.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/caterpillar" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Caterpillar</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$18.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/grey-elephant" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Grey Elephant</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$45.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/wooden-tractor" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min-p-800.png 800w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Wooden Tractor</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$22.00</div>
                                        </a>
                                    </div>
                                    <div className="product-barang-wrapper w-dyn-item">
                                        <a href="/product/funny-clown" className="product-card w-inline-block">
                                            <div className="product-card-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min.png 1200w" /></div>
                                            <h6 className="product-card-heading">Funny Clown</h6>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">$36.00</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       )
    }
}

export default Jasa;