import React from 'react';
import { ethers } from "ethers";

const Transactions = ({blockIdentifiers, blockTransactions}) => {

    // if(blockTransactions !== null) {
    //     blockTransactions.txs.map((txn) => (
    //         console.log(txn)
    //         // txn.events.map((innerTxn) => (
    //         //     console.log(innerTxn)
    //         // ))
    //     ))
    // }

    const accountSubmitHandler = () => {

    }

    const accountChangeHandler = () => {

    }

    const protocolChangeHandler = () => {

    }

    return (
        <main className="extra-dark pb-5">
            <div className="search-holder pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form onSubmit={accountSubmitHandler}>
                                <div className="flex-holder">
                                    <div className="search-input">
                                        <input type="text" onChange={accountChangeHandler} className="form-control custom-search" placeholder="Enter your address here..." aria-describedby="basic-addon2" />
                                    </div>
                                    <div>
                                        <select onChange={protocolChangeHandler} className="form-control custom-search" name="" id="">
                                            <option value="bitcoin">Bitcoin</option>
                                            <option value="ethereum">Ethereum</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="submit" className="input-group-text custom-search" id="basic-addon2">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5" style={{ alignItems: "center" }}>
                    <div className="col-md-6" style={{ overflowX: "scroll" }}>
                        <iframe src="https://coinhippo.io/token/ethereum?view=widget&theme=dark" title="Ethereum" frameBorder="0" width="500" height="240"></iframe>
                        {/* <img src="/chart.png" className="img-fluid" alt="" /> */}
                    </div>
                    
                    <div className="col-md-6">
                        <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-md-6">
                                <div className="card bg-dark-gray text-white">
                                    <div className="card-body">
                                        <h5>Track your trades in one place, not all over the place</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card bg-dark-gray text-white">
                                    <div className="card-body">
                                        <h5>Ethereum Transaction History</h5>
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
                                                        <p>
                                                            Txn: <br />
                                                            {txn.id.slice(0,6)}...{txn.id.slice(-6)}
                                                        </p>
                                                        <p>
                                                            Block: <br />
                                                            {txn.block_number}
                                                        </p>
                                                        <p>
                                                            Date: <br />
                                                            <span className="text-warning">{txn.date}</span>
                                                        </p>
                                                        <p className="text-success">{txn.status}</p>
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