import React from 'react';

const StakingReports = () => {
    return (
        <main>
            <div className="search-holder pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control search-gray search-bar-border txn-hash-search" placeholder="Enter your address here..." aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="input-group-text search-btn" id="basic-addon2">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card bg-dark-gray pb-5">
                            <div className="card-body">
                                <h4 className="text-primary mb-4">Current Balance</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="icon-text-holder">
                                            <img class="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="" />
                                            <div>
                                                <h6 className="text-white">Ethereum</h6>
                                                <span class="badge badge-success">11.40%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <h2 className="text-white">$2,066,292.26</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <h4 className="text-white">Transactions</h4>
                        <div className="table-responsive">
                            <table className="table table-dark custom-tr table-striped">
                                <thead>
                                    <tr className="custom-tr text-danger">
                                        <th>#</th>
                                        <th>Address</th>
                                        <th>Principal</th>
                                        <th>Rewards</th>
                                        <th>Balance</th>
                                        <th>Current Value</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>

                                <tbody className="micro-text">
                                    <tr className="custom-tr">
                                        <td>1</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>
                                    
                                    <tr className="custom-tr">
                                        <td>2</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>

                                    <tr className="custom-tr">
                                        <td>3</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>

                                    <tr className="custom-tr">
                                        <td>4</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>

                                    <tr className="custom-tr">
                                        <td>5</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>

                                    <tr className="custom-tr">
                                        <td>6</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6</td>
                                        <td>2ETH</td>
                                        <td>0.1ETH</td>
                                        <td>2.01ETH</td>
                                        <td>1,961,000</td>
                                        <td>
                                            <span className="badge badge-pill badge-primary px-2 py-1">High</span>
                                        </td>
                                        <td>3-2-21</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default StakingReports;