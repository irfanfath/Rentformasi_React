import React, { Component } from "react";
import Related_Product from "../Component/Related_Product";
import axios from "axios"
import Modals from "../Component/Modals/Modals";
import Profile from "../Component/Card/Profile";
import Date_Form from "../Component/Forms/Date_Form"

class Product_Detail extends Component{
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.idBarang;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            console.log('result: ', res);
            let post = res.data;
            this.setState({
                post : {
                    title: post.title,
                    body: post.body
                }
            })
        })
        
    }

    render(){
        return(
            <div className="page-wrapper">   
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="product">
                            <div className="product-info">
                                <h1>{this.state.post.title}</h1>
                                <p className="text-grey">{this.state.post.body}</p>
                                <div className="product-price">$30.00</div>
                                <div className="full-width">
                                    <form data-node-type="commerce-add-to-cart-form" data-commerce-sku-id="5bae129d35e11310a69a82d2" data-loading-text="Adding to cart..." data-commerce-product-id="5bae129d1c68cc806025c48d" className="w-commerce-commerceaddtocartform add-to-cart">
                                        <label htmlFor="quantity-652131f9f904302b3296412795400fe8" className="label">Jumlah Sewa</label>
                                        <input type="bootstrap-datetimepicker" id="quantity-652131f9f904302b3296412795400fe8" name="commerce-add-to-cart-quantity-input" min="1" className="w-commerce-commerceaddtocartquantityinput input quantity-input" defaultValue="1" />
                                        <label htmlFor="quantity-652131f9f904302b3296412795400fe8" className="label">Tanggal Sewa</label>
                                        <Date_Form/>  
                                    </form>
                                    <Modals/>
                                </div>
                            </div>
                            <div className="product-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 76vw, 32vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" className="full-width" /></div>
                            <div className="product-details-wrapper">
                                <div className="shop-header">
                                    <h5 className="no-margin">Product Details</h5>
                                    <h5 className="no-margin">Ulasan</h5>
                                    <h5 className="no-margin">Pertanyaan</h5>
                                    <div className="sku">
                                        <div>ID Barang :</div>
                                        <div>35009</div>
                                    </div>
                                    <div className="shop-header-line">
                                        <div className="shop-header-color green"></div>
                                    </div>
                                </div>
                                <div className="product-details w-richtext">
                                    <h4>Add Your Product Description</h4>
                                    <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                                    <h4>Simple &amp; Elegant Template</h4>
                                    <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a className is added to the rich text element using the "When inside of" nested selector system.</p>
                                    <ul>
                                        <li>Beautifully Designed</li>
                                        <li>Fully Responsive</li>
                                        <li>CMS Content</li>
                                        <li>Smooth Animations</li>
                                    </ul>
                                    <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                                    <h5>Perfect Choice for Your Business</h5>
                                    <p>Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds. This is where your benefits come into play or a product description that sets your offer apart from the others.</p>
                                    <p>‍</p>
                                </div>
                                    <Profile/>
                            </div>
                        </div>
                    </div>
                    <Related_Product/>
                </div>
            </div>
        )
    }
}

export default Product_Detail;