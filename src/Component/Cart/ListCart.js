import React from "react";
import JumlahSewa from "../Forms/JumlahSewa";

const ListCart= (props) => {
    return(
                    <div className="modal-body">
                            <div className="w-commerce-commercecartitem">
                                <img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="50px" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" />
                                {/* <div className="quantitycart">
                                    <JumlahSewa/>
                                </div> */}
                                <div className="w-commerce-commercecartiteminfo">
                                    <div className="w-commerce-commercecartproductname">{props.data.name}</div>
                                    <div>$30.00</div>
                                    <button className="cart-remove-link" onClick={() => props.remove(props.data.id)}>Remove</button>
                                </div>
                            </div>
                    </div>
    )
}

export default ListCart;


                   
                   