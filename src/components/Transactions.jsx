import React from 'react';

const Transactions = () => {
    return (
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

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card table-card pb-3">
                            <div className="card-body">
                                <div style={{ display: "flex", justifyContent: "space-between"}}>
                                    <h6 className="mb-5 text-primary">Transactions</h6>
                                    <h6 className="mb-5 text-white-50">View All</h6>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>0x5B38Da6a.........</p>
                                                    <p>From:  0x5B38Da6a....</p>
                                                    <p>To: 0x5B38Da6a.....</p>
                                                    <p>0.15ETH</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>0x5B38Da6a.........</p>
                                                    <p>From:  0x5B38Da6a....</p>
                                                    <p>To: 0x5B38Da6a.....</p>
                                                    <p>0.15ETH</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>0x5B38Da6a.........</p>
                                                    <p>From:  0x5B38Da6a....</p>
                                                    <p>To: 0x5B38Da6a.....</p>
                                                    <p>0.15ETH</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>0x5B38Da6a.........</p>
                                                    <p>From:  0x5B38Da6a....</p>
                                                    <p>To: 0x5B38Da6a.....</p>
                                                    <p>0.15ETH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card table-card pb-3">
                            <div className="card-body">
                                <div style={{ display: "flex", justifyContent: "space-between"}}>
                                    <h6 className="mb-5 text-primary">Blocks</h6>
                                    <h6 className="mb-5 text-white-50">View All</h6>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>153526</p>
                                                    <p>MIner: Hackpool</p>
                                                    <p>148txn</p>
                                                    <p>0.002ETH</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>153526</p>
                                                    <p>MIner: Hackpool</p>
                                                    <p>148txn</p>
                                                    <p>0.002ETH</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>153526</p>
                                                    <p>MIner: Hackpool</p>
                                                    <p>148txn</p>
                                                    <p>0.002ETH</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>153526</p>
                                                    <p>MIner: Hackpool</p>
                                                    <p>148txn</p>
                                                    <p>0.002ETH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Transactions;