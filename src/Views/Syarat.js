import React, { Component } from "react";
import Isi from "../Component/Konten/Isi_Syarat";

class Bantuan extends Component{
    render(){
        return(
    <div className="section">
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <h3 className="no-margin w-hidden-small w-hidden-tiny">Syarat & Ketentuan</h3>
                    </div>
                </div>

        <div className="section no-padding-top">
            <div className="wrapper side-paddings">
                <Isi/>
            </div>
        </div>
    </div>
        )
    }
}

export default Bantuan;