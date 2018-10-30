import React from 'react';
import './Header.css';
import Logo from '../Images/Logo.png'; 
import Search from '../Images/Search.png' 

const Header = ()=>{
    return(
    <header className="App-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
            <div className='box-header'>
                <div className="container">
                    <div className= "section-row">
                        <div className="row">
                            <div className="col-md-2">
                                <a className="navbar-brand" href=""><img src={Logo} className='Logo'/></a>
                            </div>
                            <div className="col-md-10">
                                <div className='Kotak-search-login'>
                                    <div className= "section-row">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Search"/>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"><img className='Search-icon' src ={Search}/></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="button-login"> 
                                                    <div className="navbar-nav">
                                                       <a className="nav-item nav-link" href="#">
                                                            <div className='tombol-login'>Log In /</div>
                                                       </a>
                                                        <a className="nav-item nav-link" href="#">
                                                            <div className='tombol-login'>Sign Up</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link" href="#">Indonesia vs Jepang</a>
                                    <a className="nav-item nav-link" href="#">Video</a>
                                    <a className="nav-item nav-link" href="#">Honor</a>
                                    <a className="nav-item nav-link" href="#">News</a>
                                    <a className="nav-item nav-link" href="#">Sepak Bola</a>
                                    <a className="nav-item nav-link" href="#">Ekonomi</a>
                                    <a className="nav-item nav-link" href="#">Politik</a>
                                    <a className="nav-item nav-link" href="#">Hiburan</a>
                                    <a className="nav-item nav-link" href="#">More</a>
                                </div>
                             </div>
                        </div>    
                    </div>
                </div>
            </div>
        </nav>
    </header>)
}
export default Header