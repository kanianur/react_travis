import React, { Component } from 'react';
import './Headline.css';
import LogoKecil from '../Images/Logokecil.jpg';
import Heart from '../Images/Heart.png';
import Chat from '../Images/Chat.png';
import Share from '../Images/Share.png';
import propTypes from 'prop-types';

const Headline = props => {
    return(
        <div className='headline-news'>
            <div className = 'header-gambar'>
                <div className="container">
                    <div className = "section-row">
                        <div className="row">
                            <div className="col-md-2">
                                <img className ='logoBerita' src={LogoKecil}/>
                            </div>
                            <div className="col-md-10">
                                <div>
                                    <p className='keterangan'><strong>kumparanNEWS</strong></p>
                                    <p className='tanggal'>Senin 29 Oktober 2018 13:11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <img src ={props.img} className='gambar'/>
            <div className= 'content-gambar'>
                <h4><a href={props.url}>{props.title}</a></h4>
                <p>{props.content}</p>
            </div>
            <div className='kategoriBerita'>News</div>
            <div className='jumlahLike'>1 Menyukai</div>
            <hr></hr> 
            <div className= 'footer-gambar'>
                <div className="container">
                    <div className= "section-row">
                        <div className="row">
                            <div className="col-md-4">
                                <img className='footer-icon'src={Heart}/>Sukai
                            </div>
                            <div className="col-md-4">
                                <img className='footer-icon'src={Chat}/>Komentar
                            </div>
                            <div className="col-md-4">
                                <img className='footer-icon'src={Share}/>Bagikan
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )

}

Headline.propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    img: propTypes.string
};

export default Headline