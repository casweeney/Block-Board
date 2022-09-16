import React from 'react';
import { Link } from "react-router-dom";

const Transactions = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark extra-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Transactions <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/protocols">Protocols</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/staking-reports">Staking Reports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/nft-collections">NFT & Collections</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/gas-fee">Gas Fee Estimate</Link>
                    </li>
                </ul>

                <form className="form-inline">
                    <div className="input-group">
                        <input type="text" className="form-control text-white search-gray search-bar-border" placeholder="Enter protocol name" aria-label="protocol-name" aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="input-group-text search-btn" id="basic-addon1">Lookup</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </nav>

            <main className="extra-dark pb-5">
                <div className="search-holder pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <input type="text" className="form-control search-gray search-bar-border" placeholder="Search transactions, addresses, tokens" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="input-group-text search-btn" id="basic-addon2">Lookup</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt-5" style={{ alignItems: "center" }}>
                        <div className="col-md-6">
                            <img src="/chart.png" className="img-fluid" alt="" />
                        </div>
                        
                        <div className="col-md-6">
                            <div className="row" style={{ alignItems: "center" }}>
                                <div className="col-md-6">
                                    <div className="card bg-dark-gray text-white pt-4 pb-4">
                                        <div className="card-body">
                                            <h5>Track your trades in one place, not all over the place</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card bg-dark-gray text-white">
                                        <div className="card-body">
                                            <h5>Ethereum Transaction History</h5>
                                            <div className="line-holder">
                                                <svg width="200" height="75" viewBox="0 0 277 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.999756 7.57909L8.1893 13.2353H12.6828L18.9736 18.0835L27.0618 13.2353L33.3527 22.9317L36.9475 7.57909L40.5422 13.2353L45.0357 7.57909V18.0835L54.9213 1.92285L62.1109 22.9317L67.503 18.0835L71.9965 38.2844L79.186 31.0121L84.5782 56.8692L89.9703 38.2844L95.3625 44.7487L98.9573 38.2844L103.451 44.7487L113.336 31.0121L119.627 38.2844L127.715 31.0121L137.601 44.7487L143.892 38.2844L154.676 56.8692L160.068 52.829L166.359 63.3335L170.853 56.8692L178.042 73.8379L193.32 44.7487L198.712 48.7888L204.104 34.2442L208.598 38.2844L228.369 13.2353L234.66 22.9317L241.849 13.2353L249.039 22.9317L254.431 18.0835L268.81 38.2844L276 31.0121" stroke="#EA3943" stroke-width="2" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Transactions;