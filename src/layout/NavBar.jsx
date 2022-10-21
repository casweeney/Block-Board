import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ onProtocolChangeSubmit }) => {
    const [defaultProtocol, setDefaultProtocol] = useState("");

    const chainChangeHandler = (e) => {
        e.preventDefault();
        setDefaultProtocol(e.target.value);
    }

    const chainSubmitHandler = (e) => {
        e.preventDefault();

        if(defaultProtocol === "") {
            alert("Select a protocol");
        } else {
            onProtocolChangeSubmit(defaultProtocol);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark extra-dark">
            <div className="container">
                <Link className="navbar-brand font-weight-bold" to="/">BlockBoard</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Transactions <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/explorer">Explorer</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/staking-reports">Staking Reports</Link>
                        </li> */}
                        

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/gas-fee">Gas Fee Estimate</Link>
                        </li> */}


                        <li className="nav-item">
                            <Link className="nav-link" to="/nft-collections">NFT & Collections</Link>
                        </li>
                    </ul>

                    <form onSubmit={chainSubmitHandler} className="form-inline">
                        <div className="input-group">
                        <select onChange={chainChangeHandler} className="form-control text-white search-gray search-bar-border" aria-label="protocol-name" aria-describedby="basic-addon1">
                            {/* <option value="algorand">Algorand</option> */}
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bitcoincash">Bitcoin Cash</option>
                            <option value="dogecoin">Dogecoin</option>
                            <option value="ethereum">Ethereum</option>
                            <option value="litecoin">Litecoin</option>
                            <option value="polkadot">Polkadot</option>
                            <option value="stellar">Stellar</option>
                            <option value="tezos">Tezos</option>
                            {/* <option value="xrp">XRP</option> */}
                        </select>
                        <div className="input-group-append">
                            <button className="input-group-text btn btn-secondary" id="basic-addon1">Change Protocol</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;