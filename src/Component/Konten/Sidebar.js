import React, { Component } from "react";

class Sidebar extends Component{
    render(){
        return(
                                <div className="product-table">
                                    <h4>Kategori</h4>
                                    <div className="product-table-cell">
                                        <div>Kendaraan</div>
                                        <div className="product-table-info">
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_width_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">(38)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell">
                                        <div>Alat Berat</div>
                                        <div className="product-table-info">
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_height_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">(32)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell">
                                        <div>Elektronik</div>
                                        <div className="product-table-info">
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_length_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">(21)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell no-border-bottom">
                                        <div>Olahraga</div>
                                        <div className="product-table-info">
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_weight_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">(24)</div>
                                        </div>
                                    </div>
                                </div>                
        )
    }
}

export default Sidebar;