import React, { useState, useEffect } from 'react';
import moment from 'moment';
import SearchBar from "../common/SearchBar";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";

const BlockTransactions = () => {
    const params = useParams();
    const { protocol, blockNumber } = params;

    const [blockTransactions, setBlockTransactions] = useState(null);

    const getBlockTransactions = async () => {
        try {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${protocol}/mainnet/block/${blockNumber}`, {
            headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
            });
    
            const data = await response.json();
    
            setBlockTransactions(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlockTransactions();
        // eslint-disable-next-line
    }, [blockNumber]);


    if(blockTransactions === null) {
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
                            <SearchBar currentProtocol={protocol} />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-white text-center mb-5">{blockTransactions.txs.length} transactions on {protocol} block: <strong>{blockNumber}</strong></h4>
                        <div className="table-responsive">
                            <table className="table table-dark custom-tr table-striped">
                                <thead>
                                    <tr className="custom-tr text-danger">
                                        <th>#</th>
                                        <th>Txn Hash</th>
                                        <th>Block</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                        <th>Events</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className="micro-text">
                                    {blockTransactions !== null && 
                                        blockTransactions.txs.length > 0 && 
                                        blockTransactions.txs.map((item, index) => (
                                            <tr className="custom-tr" key={item.id}>
                                                <td>{index + 1}</td>
                                                <td><Link className="text-info" to={`/details/tx/${protocol}/${item.id}`}>{item.id}</Link></td>
                                                <td>{protocol === "bitcoin" ? blockTransactions.number : item.block_number}</td>
                                                <td>{moment.unix(item.date).fromNow()}</td>
                                                <td className={item.status === "completed" ? "text-success" : "text-danger"}>{item.status}</td>
                                                <td>{item.num_events}</td>
                                                <td>
                                                    <button className="btn btn-outline-primary btn-sm explore-btn"><Link className="text-white" to={`/details/tx/${protocol}/${item.id}`}>Explore Block</Link></button>
                                                </td>
                                            </tr>
                                        ))

                                    }
                                    {/* <tr className="custom-tr">
                                        <td>2</td>
                                        <td>0x282a66ad....5bb0b72d0b</td>
                                        <td>5500535</td>
                                        <td>1min Ago</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6	</td>
                                        <td>0x395388c5e22ab1b6fb3ad7ace45dd21406a60ac6	</td>
                                        <td>
                                            <span className="badge badge-pill badge-success px-2 py-1">High</span>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-primary btn-sm explore-btn">Explore Block</button>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlockTransactions;