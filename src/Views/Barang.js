import React, { Component } from "react";
import Cari from "../Component/Konten/Cari";
import ListBarang from "../Component/ListBarang";
import axios from 'axios';
import Sorting from "../Component/Konten/Sorting";
import Kategori from "../Component/Sidebars/Kategori";
import PaginationPage from "../Component/Pagination/PaginationPage";

class Barang extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        // axios.get('https://jsonplaceholder.typicode.com/albums?_sort=id')
        axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10')
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
                                    {
                                                this.state.post.map(post => {
                                                    return <ListBarang key={post.id} 
                                                    data={post}
                                                    goDetail={this.handleDetail}
                                                    />
                                                })
                                            }
                                    </div>
                            </div>
                            <Kategori/>
                        </div>
                    </div>
                </div>
                <PaginationPage/>                                  
            </div>
        </div>
        )
    }
}

export default Barang;