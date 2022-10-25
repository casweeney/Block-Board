import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

const NftCollection = () => {
    const params = useParams();
    const { address } = params;
    const history = useHistory();

    const [account, setAccount] = useState(address);
    const [protocol, setProtocol] = useState("ethereum");
    const [nfts, setNfts] = useState(null);

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

    const getNfts = async () => {
        if(account === "xxx") {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/assets?collection_id=4203aedd-7964-5fe1-b932-eb8c4fda7822`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
                }
            });

            const data = await response.json();

            setNfts(data);

        } else {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/${protocol}/mainnet/assets?wallet_address=${account}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
            }
            });
    
            const data = await response.json();

            setNfts(data);
        }
    }

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    useEffect(() => {
        getNfts();
    }, [address]);

    console.log(nfts);
    
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

            <div className="container-fluid mt-5">
                <div className="row">
                    { nfts !== null && nfts.data.length > 0 && nfts.data.map((nft) => {
                        let imgUrl;
                        if(isImage(nft.image_url)){
                            imgUrl = nft.image_url;
                        } else {
                            imgUrl = `${nft.image_url}.png`;
                        }

                        return (
                            <div className="col-md-3 mb-3" key={nft.id}>
                                <div className="module-border-wrap">  
                                    <div className="card extra-dark nft-card">
                                        {nft.image_url === "" ? <img src="/nft/noimage2.webp" alt="" /> : <img className="card-img-top" src={`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/media/${imgUrl}?apiKey=${process.env.REACT_APP_UBIQUITY_KEY}`} alt="Card image" />}
                                        <div className="card-body text-white">
                                            <h5 className="mt-2">{nft.name}</h5>
                                            <p className="text-info">ID: {nft.token_id}</p>
                                            <p style={{ fontSize: "12px" }}>Contract: {nft.contract_address.slice(0,6)} ... {nft.contract_address.slice(-6)}</p>
                                            <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    );
}

export default NftCollection;