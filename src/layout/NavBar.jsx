import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark extra-dark">
            <div className="container">
                <a className="navbar-brand font-weight-bold" href="#">BlockBoard</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Transactions <span className="sr-only">(current)</span></Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/explorer">Explorer</Link>
                    </li> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/staking-reports">Staking Reports</Link>
                    </li> */}
                    

                    <li className="nav-item">
                        <Link className="nav-link" to="/gas-fee">Gas Fee Estimate</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/accounts">Accounts</Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/nft-collections">NFT & Collections</Link>
                    </li> */}
                </ul>

                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control text-white search-gray search-bar-border" placeholder="Enter protocol name" aria-label="protocol-name" aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="input-group-text btn btn-primary" id="basic-addon1"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;