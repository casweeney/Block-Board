import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../common/SearchBar";

const Transactions = ({defaultProtocol, blockIdentifiers, blockTransactions}) => {

    const dataProtocol = defaultProtocol.charAt(0).toUpperCase() + defaultProtocol.slice(1);
    console.log(defaultProtocol);
    console.log(dataProtocol);

    

    return (
        <main className="extra-dark pb-5">
            <div className="search-holder pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <SearchBar />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5" style={{ alignItems: "center" }}>
                    <div className="col-md-6" style={{ overflowX: "scroll" }}>
                        <iframe src={`https://coinhippo.io/token/${defaultProtocol}?view=widget&theme=dark`} title={dataProtocol} frameBorder="0" width="500" height="240"></iframe>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-md-12">
                                <div className="card bg-dark-gray text-white">
                                    <div className="card-body">
                                        <h5 style={{ lineHeight: "1.5" }}>Track your transactions in one place across multiple blockchains, not all over the place.</h5>
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
                                    <h6 className="mb-5 text-primary">Latest Block Transactions</h6>
                                    <h6 className="mb-5 text-white-50">View All</h6>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        {blockTransactions !== null && blockTransactions.txs.slice(0, 7).map((txn, index) => (
                                            <div key={txn.id} className="card custom-tr text-white mb-2">
                                                <div className="card-body">
                                                    <div className="micro-text table-responsive transaction-card">
                                                        <span><i className="fa fa-cube"></i></span>
                                                        <p>
                                                            Block: <br />
                                                            {txn.block_number}
                                                        </p>
                                                        <p>
                                                            Txn: <br />
                                                            <Link to={`/details/tx/${txn.id}`}>{txn.id.slice(0,6)}...{txn.id.slice(-6)}</Link>
                                                        </p>
                                                        <p>
                                                            Date: <br />
                                                            <span className="text-warning">{txn.date}</span>
                                                        </p>
                                                        <p className={txn.status === "completed" ? "text-success" : "text-danger"}>{txn.status}</p>
                                                        {/* <p>{innerTxn.amount}ETH</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>0x5B38Da6a.........</p>
                                                    <p>From:  0x5B38Da6a....</p>
                                                    <p>To: 0x5B38Da6a.....</p>
                                                    <p>0.15ETH</p>
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card table-card pb-3">
                            <div className="card-body">
                                <div style={{ display: "flex", justifyContent: "space-between"}}>
                                    <h6 className="mb-5 text-primary">Blocks Identifiers</h6>
                                    <h6 className="mb-5 text-white-50">View All</h6>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        {blockIdentifiers !== null && blockIdentifiers.data.slice(0,7).map((txn) => (
                                            <div className="card custom-tr text-white mb-2" key={txn.id}>
                                                <div className="card-body">
                                                    <div className="micro-text table-responsive transaction-card">
                                                        <span><i className="fa fa-cube"></i></span>
                                                        <p>
                                                            ID: <br />
                                                            {txn.id.slice(0,6)} ... {txn.id.slice(-6)}
                                                        </p>
                                                        <p>
                                                            Parent ID: <br />
                                                            {txn.parent_id.slice(0,6)} ... {txn.parent_id.slice(-6)}
                                                        </p>
                                                        <p>
                                                            Date: <br />
                                                            <span className="text-warning">{txn.date}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        

                                        {/* <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive transaction-card">
                                                    <p>153526</p>
                                                    <p>MIner: Hackpool</p>
                                                    <p>148txn</p>
                                                    <p>0.002ETH</p>
                                                </div>
                                            </div>
                                        </div> */}
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