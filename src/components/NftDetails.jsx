import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";
import moment from 'moment';

const NftDetails = () => {
    const params = useParams();
    const { nftId } = params;
    const history = useHistory();

    const [account, setAccount] = useState("");
    const [protocol, setProtocol] = useState("ethereum");
    const [nftDetails, setNftDetails] = useState(null);

    const accountChangeHandler = (e) => {
        setAccount(e.target.value);
    }

    const protocolChangeHandler = (e) => {
        setProtocol(e.target.value);
    }

    const nftSearchSubmitHandler = async (e) => {
        e.preventDefault();

        if(account === "" || protocol === "") {
            alert("Account and protocol can't be empty");
        } else {
            console.log(account, " ", protocol);
            history.push(`/nft-collections/${account}`);
        }
    }

    const getNftDetails = async () => {
        try {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/asset/${nftId}?show_wallets=true`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
                }
            });

            const data = await response.json();

            setNftDetails(data);
        } catch (error) {
            console.log(error);
        }
    }

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    useEffect(() => {
        getNftDetails();
        // eslint-disable-next-line
    },[]);

    if(nftDetails === null) {
        return (
            <div className="text-center mt-5">
                <LoadingSpinner />
                <h3 className="text-center text-white mt-3">Loading...</h3>
            </div>
        )
    }

    console.log(nftDetails);

    let imgUrl;
    if(isImage(nftDetails.asset.media.image_url)){
        imgUrl = nftDetails.asset.media.image_url;
    } else {
        imgUrl = `${nftDetails.asset.media.image_url}.png`;
    }
    
    return (
        <main className="extra-dark pb-5">
            <div className="search-holder pt-4 pb-4">
                <div className="container-fluid">
                    <h3 className="text-white text-center mb-3">NFT Account Explorer on Different Chains</h3>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form onSubmit={nftSearchSubmitHandler}>
                                <div className="flex-holder">
                                    <div className="search-input">
                                        <input type="text" onChange={accountChangeHandler} className="form-control custom-search" placeholder="Fetch NFTs by Address" aria-describedby="basic-addon2" />
                                    </div>
                                    <div>
                                        <select onChange={protocolChangeHandler} className="form-control custom-search" name="" id="">
                                            <option value="ethereum">Ethereum</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button type="submit" className="input-group-text custom-search pl-3 pr-3" id="basic-addon2">Fetch NFT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-md-12" style={{ overflowX: "scroll" }}>
                        <h2 className="text-white text-center mb-5">{nftDetails.asset.name} #{nftDetails.asset.token_id}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                            {nftDetails.asset.media.image_url === "" ? <img src="/nft/noimage2.webp" alt="Not Found" /> : <img className="card-img-top" src={`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/media/${imgUrl}?apiKey=${process.env.REACT_APP_UBIQUITY_KEY}`} alt="NFT Item" />}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 text-gray">
                        <div className="card extra-dark border-blue mb-3">
                            <div className="card-body">
                                <h5 className="underline">Description</h5>
                                <p>{nftDetails.asset.description}</p>
                            </div>
                        </div>

                        <div className="card extra-dark border-blue mb-3">
                            <div className="card-body">
                                <h5 className="underline">Properties</h5>
                                <div className="row">
                                    {nftDetails.asset.attributes.length > 0 && 
                                        nftDetails.asset.attributes.map((attribute, index) => (
                                            <div className="col-md-4 col-6 mb-2" key={index}>
                                                <div className="card text-center bg-dark-gray text-white">
                                                    <div className="card-body">
                                                        <h6>{attribute.trait_type}</h6>
                                                        <h5>{attribute.value}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="card extra-dark border-blue mb-3">
                            <div className="card-body" style={{ overflowX: "scroll" }}>
                                <h5 className="underline">Details</h5>
                                <p className="flex-between">
                                    Contract Address 
                                    <span>{nftDetails.asset.contract_address}</span>
                                </p>
                                <p className="flex-between">
                                    Token ID 
                                    <span>{nftDetails.asset.token_id}</span>
                                </p>
                                <p className="flex-between">
                                    Token Type 
                                    <span>{nftDetails.asset.token_type}</span>
                                </p>
                                <p className="flex-between">
                                    Mint Date
                                    <span>{moment.unix(nftDetails.asset.mint_date).fromNow()}</span>
                                </p>
                                <p className="flex-between">
                                    <span className="text-info font-weight-bold">Holder(s)</span>
                                    {nftDetails.asset.wallets.length > 0 && 
                                        nftDetails.asset.wallets.map((wallet) => (
                                            <span className="font-weight-bold" key={wallet.address}>{wallet.address}</span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NftDetails;