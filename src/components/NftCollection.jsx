import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const NftCollection = () => {
    const params = useParams();
    const { address } = params;
    const history = useHistory();

    const [account, setAccount] = useState(address);
    const [protocol, setProtocol] = useState("ethereum");
    const [nfts, setNfts] = useState(null);
    const [collections, setCollections] = useState(null);

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
        if(account === "default") {
            const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/assets?collection_id=4203aedd-7964-5fe1-b932-eb8c4fda7822`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
                }
            });

            const data = await response.json();

            setNfts(data);

        } else {
            if(account.length === 42) {
                const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/${protocol}/mainnet/assets?wallet_address=${account}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
                }
                });
        
                const data = await response.json();

                setNfts(data);
            } else {
                const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/assets?collection_id=${account}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
                    }
                });

                const data = await response.json();

                setNfts(data);
            }
        }
    }

    const getCollections = async () => {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/collections`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
            }
        });

        const data = await response.json();

        setCollections(data);
    }

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    useEffect(() => {
        getNfts();
        getCollections();
        // eslint-disable-next-line
    }, [address]);

    console.log(nfts);

    if(nfts === null && collections === null) {
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
                <h5 className="text-white">Explore Popular Collections</h5>
                <OwlCarousel items={8} margin={8} autoplay={true} loop={true}>
                    {collections.data.length > 0 && collections.data.map((collection, index) => {
                        return (
                            <div className='item' key={index}>
                                <a href={`/nft-collections/4203aedd-7964-5fe1-b932-eb8c4fda7822`} className="btn btn-dark btn-block" style={{ fontSize: "10px" }}>
                                    <img src={`/nft/${index + 1}.png`} className="img-fluid rounded" alt="" />
                                    {collection.name === "" ? "No Name" : collection.name}
                                </a>
                            </div>
                        );
                    })}
                </OwlCarousel>

                <hr className="border-white" />

                <div className="row">
                    { nfts !== null && nfts.data.length > 0 && nfts.data.map((nft) => {
                        let imgUrl;
                        if(isImage(nft.image_url)){
                            imgUrl = nft.image_url;
                        } else {
                            imgUrl = `${nft.image_url}.png`;
                        }

                        return (
                            <div className="col-md-3 col-sm-6 col-6 mb-3" key={nft.id}>
                                <div className="module-border-wrap">  
                                    <div className="card extra-dark nft-card">
                                        <Link to={`/nft-details/${nft.id}`}>
                                            {nft.image_url === "" ? <img src="/nft/noimage2.webp" className="card-img-top" alt="Not Found" /> : <img className="card-img-top" src={`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/media/${imgUrl}?apiKey=${process.env.REACT_APP_UBIQUITY_KEY}`} alt="NFT Item" />}
                                        </Link>
                                        
                                        <div className="card-body text-white">
                                            <h5 className="mt-2">{nft.name}</h5>
                                            <p className="text-info">ID: {nft.token_id}</p>
                                            <p style={{ fontSize: "11px" }}>Contract: {nft.contract_address}</p>
                                            <Link to={`/nft-details/${nft.id}`} className="btn btn-secondary btn-block bid-btn pl-5 pr-5 pt-2 pb-2">Details</Link>
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