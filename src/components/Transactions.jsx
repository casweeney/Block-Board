import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import SearchBar from "../common/SearchBar";

const Transactions = ({defaultProtocol, blockIdentifiers, blockTransactions}) => {
    const dataProtocol = defaultProtocol.charAt(0).toUpperCase() + defaultProtocol.slice(1);

    console.log(defaultProtocol, " Transactions: ", blockTransactions);

    return (
        <main className="extra-dark pb-5">
            <div className="search-holder pt-4 pb-4">
                <div className="container-fluid">
                    <h3 className="text-white text-center mb-3">Explore {dataProtocol} Blockchain</h3>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <SearchBar />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-4 mb-3" style={{ alignItems: "center" }}>
                    <div className="col-md-12 mb-3">
                        <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-md-12">
                                <div className="card text-white" style={{ backgroundColor: "#0F172A" }}>
                                    <div className="card-body text-center">
                                        <h4 style={{ lineHeight: "1.5" }}>Track your transactions and assets in one place across multiple blockchains, not all over the place.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 text-center mb-4" style={{ overflowX: "scroll" }}>
                        <coingecko-coin-ticker-widget  coin-id={defaultProtocol === "bitcoincash" ? "bitcoin-cash" : defaultProtocol} currency="usd" locale="en" background-color="#000000"></coingecko-coin-ticker-widget>
                    </div>


                    <div className="col-md-6 text-center" style={{ height: "300px", overflowX: "scroll" }}>
                        <coin-stats-chart-widget type="large" coin-id={defaultProtocol === "bitcoincash" ? "bitcoin-cash" : defaultProtocol} style={{ width: "100%" }} chart-height="300" currency="USD" locale="en" bg-color="rgba(0,0,0,1)" text-color="#FFFFFF" status-up-color="#74D492" status-down-color="#FE4747" buttons-color="#1C1B1B" chart-color="#FFA959" chart-gradient-from="rgba(255,255,255,0.07)" chart-gradient-to="rgba(0,0,0,0)" chart-label-background="#000000" candle-grids-color="rgba(255,255,255,0.1)" border-color="rgba(137,132,132,0.15)" font="Roboto, Arial, Helvetica" btc-color="#6DD400" eth-color="#67B5FF"></coin-stats-chart-widget>
                        {/* <div style={{ height: "1259px", backgroundColor: "#000000", overflow: "hidden", boxSizing: "border-box", border: "1px solid #282E3B", borderRadius: "4px", textAlign: "right", lineHeight:"14px", fontSize: "12px", fontFeatureSettings: "normal", textSizeAdjust: "100%", boxShadow: "inset 0 -20px 0 0 #262B38", padding: "0px", margin: "0px", width: "100%" }}>
                            <div style={{ height: "1239px", padding: "0px", margin: "0px", width: "100%" }}>
                                <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=20&pref_coin_id=1505&graph=yes" width="100%" height="1235px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border: "0", margin: "0", padding: "0" }}></iframe>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="col-md-3 text-center" style={{ overflowX: "scroll" }}>
                        <iframe src="https://coinhippo.io?widget=dominance&theme=dark" title="Dominance" frameBorder="0" width="320" height="320"></iframe>
                    </div> */}

                    <div className="col-md-3 text-center"  style={{ overflowX: "scroll" }}>
                        <coingecko-coin-heatmap-widget  height="300" locale="en" background-color="#000000"></coingecko-coin-heatmap-widget>
                    </div>

                </div>

                <div className="row mt-5">
                    <div className="col-md-6 mb-3">
                        <div className="card table-card pb-3">
                            <div className="card-body">
                                <div style={{ display: "flex", justifyContent: "space-between"}}>
                                    <h6 className="mb-5 text-info">{dataProtocol} Latest Block Transactions</h6>
                                    {/* <h6 className="mb-5 text-white-50">View All</h6> */}
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
                                                            {defaultProtocol === "bitcoin" ? blockTransactions.number : txn.block_number}
                                                        </p>
                                                        <p>
                                                            Txn: <br />
                                                            <Link className="text-info" to={`/details/tx/${defaultProtocol}/${txn.id}`}>{txn.id.slice(0,6)}...{txn.id.slice(-6)}</Link>
                                                        </p>
                                                        <p>
                                                            Age: <br />
                                                            <span className="text-warning">{moment.unix(txn.date).fromNow()}</span>
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
                                    <h6 className="mb-5 text-info">{dataProtocol} Blocks Identifiers</h6>
                                    {/* <h6 className="mb-5 text-white-50">View All</h6> */}
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
                                                            Age: <br />
                                                            <span className="text-warning">{moment.unix(txn.date).fromNow()}</span>
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