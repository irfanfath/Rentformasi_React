import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Sidebar from "../Component/Konten/Sidebar";
import Kategori_barang from "../Component/Konten/Sorting";
import Cari from "../Component/Konten/Cari";
import ListBarang from "../Component/ListBarang";
import axios from 'axios';

class Barang extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums?_sort=id')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }

    handleDetail = (id) => {
        this.props.history.push(`/product_detail/${id}`);
    }

    render(){
        return(
        <div className="section">
            <Cari/>
            
            <div className="wrapper">
                <div className="shop-header">
                    <h3 className="no-margin w-hidden-small w-hidden-tiny">Semua Barang</h3>
                    <Kategori_barang/>
                    <div className="shop-header-line">
                        <div className="shop-header-color green w-hidden-small w-hidden-tiny"></div>
                    </div>
                </div>

                <div className="section no-padding-top">
                    <div className="full-width w-dyn-list">
                        <div className="boxbarang">
                            <div className="delivery-info w-richtext">
                                    <div className="products w-dyn-items">
                                    {
                                                this.state.post.map(post => {
                                                    return <ListBarang key={post.id} 
                                                    data={post}
                                                    goDetail={this.handleDetail }
                                                    />
                                                })
                                            }
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

export default Barang;