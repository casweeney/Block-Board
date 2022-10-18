import React from 'react';
import SearchBar from "../common/SearchBar";
import { Link } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";

const Explorer = ({ latestTransactions }) => {
    // console.log(latestTransactions);

    if(latestTransactions === null) {
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
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-white text-center mb-5">25 Latest transactions on: <strong>Ethereum</strong></h4>
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
                                    {latestTransactions !== null && 
                                        latestTransactions.data.length > 0 && 
                                        latestTransactions.data.map((item, index) => (
                                            <tr className="custom-tr" key={item.id}>
                                                <td>{index + 1}</td>
                                                <td><Link className="text-info" to={`/details/tx/${item.id}`}>{item.id}</Link></td>
                                                <td>{item.block_number}</td>
                                                <td>{item.date}</td>
                                                <td className={item.status === "completed" ? "text-success" : "text-danger"}>{item.status}</td>
                                                <td>{item.num_events}</td>
                                                <td>
                                                    <button className="btn btn-outline-primary btn-sm explore-btn"><Link className="text-white" to={`/details/tx/${item.id}`}>Explore Block</Link></button>
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

export default Explorer;