import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { useParams, Link } from 'react-router-dom';
import SearchBar from "../common/SearchBar";
import LoadingSpinner from "./UI/LoadingSpinner";

const Accounts = () => {
    const params = useParams();
    const { protocol, network, address } = params;

    const [accountData, setAccountData] = useState(null);
    const [accountTransactions, setAccountTransactions] = useState(null);

    const getAccountData = async () => {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${protocol}/${network}/account/${address}`, {
            headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
        });

        const data = await response.json();
        setAccountData(data);
    }

    const getAccountTransactions = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${protocol}/${network}/account/${address}/txs`, {
        headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
      });

      const data = await response.json();

      setAccountTransactions(data);
    }

    useEffect(() => {
        getAccountData();
        getAccountTransactions();
    }, [address, protocol]);

    const loggedAccount = address;
    const [filtered, setFiltered] = useState(null)

    let accountDetails = {
        name: "N/A",
        symbol: "N/A",
        decimal: "N/A",
        balance: "N/A"
    };

    if(accountData !== null) {
        accountDetails = {
            name: accountData[0].currency.name,
            symbol: accountData[0].currency.symbol,
            decimal: accountData[0].currency.decimals,
            balance: accountData[0].confirmed_balance
        }
    }

    const fetchFiltered = () => {
        if(accountTransactions !== null) {
            const filtered = accountTransactions.data.map((txn) => {
                return txn.events.filter((innerTxn) => innerTxn.source == loggedAccount || innerTxn.destination == loggedAccount)
            });
    
            setFiltered(filtered);
        }
    }

    useEffect(() => {
        fetchFiltered();
    }, [accountTransactions]);


    if(accountData === null) {
        return (
            <div className="text-center mt-5">
                <LoadingSpinner />
                <h3 className="text-center text-white mt-3">Loading...</h3>
            </div>
        )
    }

    return (
        <main>
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

            <div className="container-fluid mt-5">
                <div className="row mb-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card bg-dark-gray">
                            <div className="card-body">
                                <h4 className="text-white text-center">Account: <span className="ml-2">{address.slice(0,6)} ... {address.slice(-6)}</span></h4>
                                <hr className="border-white" />
                                <h5 className="text-white">Balance</h5>
                                <div className="row">
                                    <div className="col-md-6 col-6">
                                        <p className="text-white">Name <span className="badge badge-secondary text-success table-card ml-5">{accountDetails.name}</span></p>
                                        <p className="text-white">Symbol <span className="badge badge-secondary text-success table-card ml-5">{accountDetails.symbol}</span></p>
                                        <p className="text-white">Decimal <span className="badge badge-secondary text-success table-card ml-5">{accountDetails.decimal}</span></p>
                                    </div>

                                    <div className="col-md-6 col-6">
                                        <h5 className="text-white">{accountDetails.name}: {accountDetails.balance !== "N/A" && parseFloat(ethers.utils.formatUnits(accountDetails.balance, accountDetails.decimal)).toFixed(6)} ({accountDetails.symbol})</h5>
                                        <h2 className="text-primary">$7.22</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-white">Transactions</h4>
                        <div className="table-responsive">
                            <table className="table table-dark custom-tr table-striped">
                                <thead>
                                    <tr className="custom-tr text-danger">
                                        <th><span><i className="fa fa-list"></i></span></th>
                                        <th>Txn Hash</th>
                                        <th>Type</th>
                                        <th>Age</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className="micro-text">
                                    {filtered !== null && filtered.map((txn, index) => (
                                        txn.map((innerTxn, innerIndex) => (
                                            <tr className="custom-tr" key={innerTxn.id}>
                                                <td><span><i className="fa fa-cube"></i></span></td>
                                                <td><Link to={`/details/tx/${innerTxn.transaction_id}`}>{innerTxn.transaction_id.slice(0,10)}...{innerTxn.transaction_id.slice(-10)}</Link></td>
                                                <td>{innerTxn.type}</td>
                                                <td>{innerTxn.date}</td>
                                                <td>{innerTxn.source.slice(0,6)}...{innerTxn.source.slice(-6)}</td>
                                                <td>{innerTxn.destination ? `${innerTxn.destination.slice(0,6)}...${innerTxn.destination.slice(-6)}` : "Ethereum"}</td>
                                                <td>
                                                    <span className="badge badge-pill badge-success px-2 py-1">{innerTxn.amount}</span>
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline-primary btn-sm explore-btn"><Link to={`/details/tx/${innerTxn.transaction_id}`}>Explore Block</Link></button>
                                                </td>
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Accounts;