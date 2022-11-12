import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';
import LoadingSpinner from "./UI/LoadingSpinner";

const TxDetails = () => {
    const [transactionDetails, setTransactionDetails] = useState(null);

    const params = useParams();
    const { protocol, transactionId } = params;

    const dataProtocol = protocol.charAt(0).toUpperCase() + protocol.slice(1);

    // console.log(transactionId);
    console.log(transactionDetails);

    const getTransctionById = async () => {
        try {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${protocol}/mainnet/tx/${transactionId}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
            }
            });
    
            const data = await response.json();
            setTransactionDetails(data);
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTransctionById();
        // eslint-disable-next-line
    }, []);

    if(transactionDetails == null) {
        return (
            <div className="text-center mt-5">
                <LoadingSpinner />
                <h3 className="text-center text-white mt-3">Loading...</h3>
            </div>
        )
    }

    return (
        <main className="extra-dark pb-5">
            <div className="search-holder pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" style={{ overflowX: "scroll" }}>
                            <p className="text-white" style={{ fontSize: "24px"}}><span className="text-info font-weight-bold mr-5">Blockchain: </span>{dataProtocol}</p>
                            <p className="text-white"><span className="text-info font-weight-bold mr-5">Txn Hash: </span>{transactionDetails != null ? transactionDetails.id : "loading..."}</p>
                            <p className="text-white"><span className="text-info font-weight-bold mr-5">Block: </span>{transactionDetails != null ? transactionDetails.block_number : "loading..."}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-dark-blue">
                            <div className="card-body">
                                <h5 className="text-danger mb-5">Transaction Details</h5>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card custom-tr text-white mb-2">
                                            <div className="card-body">
                                                <div className="micro-text table-responsive">
                                                    <p>Transaction Hash: {transactionDetails.id}</p>
                                                    <p>Status: <span className={transactionDetails.status === "completed" ? "text-success" : "text-danger"}>{transactionDetails.status}</span></p>
                                                    <p>Timestamp: {moment.unix(transactionDetails.date).fromNow()}</p>
                                                    <p>Confirmations: {transactionDetails.confirmations}</p>
                                                    <h5>Transaction Events ({transactionDetails.num_events}):</h5>
                                                    <div className="row">
                                                        {transactionDetails.events.length > 0 && transactionDetails.events.map((event) => (
                                                            <div className="col-md-12 mb-3" key={event.id}>
                                                                <div className="card bg-dark-dark">
                                                                    <div className="card-body">
                                                                        <p className="font-weight-bold">Transaction Type: {event.type}</p>
                                                                        <hr className="border-white" />
                                                                        <p className="font-weight-bold text-info">Amount: {event.amount / (1 * 10 ** event.decimals)}</p>
                                                                        <p>Denomination: {event.denomination}</p>
                                                                        <p>Decimals: {event.decimals}</p>
                                                                        <p>From: {event.source}</p>
                                                                        {event.type === "transfer" &&
                                                                            <p>To: {event.destination}</p>
                                                                        }

                                                                        {protocol === "ethereum" && event.type === "fee" &&
                                                                            <div>
                                                                                <h6 className="font-weight-bold">Meta data</h6>
                                                                                <p>Base fee: {event.meta.base_fee}</p>
                                                                                <p>Fee burned: {event.meta.fee_burned}</p>
                                                                                <p>Gas limit: {event.meta.gas_limit}</p>
                                                                                <p>Gas price: {event.meta.gas_price}</p>
                                                                                <p>Gas used: {event.meta.gas_used}</p>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        }
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
            </div>
        </main>
    );
}

export default TxDetails;