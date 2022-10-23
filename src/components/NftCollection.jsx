import React, { useState, useEffect } from 'react';

const NftCollection = () => {
    const [account, setAccount] = useState("");
    const [nfts, setNfts] = useState(null);

    const accountChangeHandler = () => {

    }

    const protocolChangeHandler = () => {

    }

    const nftSearchSubmitHandler = () => {

    }

    const getNftsByCollectionId = async () => {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/nft/v1/ethereum/mainnet/assets?collection_id=4203aedd-7964-5fe1-b932-eb8c4fda7822`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });
  
        const data = await response.json();
        setNfts(data);
    }

    useEffect(() => {
        getNftsByCollectionId();
    }, []);

    if(nfts !== null && nfts.data.length > 0) {
        nfts.data.map(async (nft) => {
            console.log(nft);
        })
    }
    // console.log(nfts);
    
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
                                        <input type="text" value={account} onChange={accountChangeHandler} className="form-control custom-search" placeholder="Fetch NFTs by Address" aria-describedby="basic-addon2" />
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
                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39884.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Ready Players</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39885.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Dragon's Den</h5>
                                    <p className="mb-0">#128314</p>
                                    <p style={{ fontSize: "12px" }}>Contract: 0xE42caD6 ... 4ab177E306</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39886.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Crippled World</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39884.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Real Matters</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39884.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Ready Players</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39885.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Ready Players</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39886.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Ready Players</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="module-border-wrap">  
                            <div className="card extra-dark nft-card">
                                <img className="card-img-top" src="/nft/rectangle39884.png" alt="Card image" />
                                <div className="card-body text-white">
                                    <h5 className="mt-2">Ready Players</h5>
                                    <p className="">#128314</p>
                                    <button className="btn btn-secondary bid-btn pl-5 pr-5 pt-2 pb-2">Place a bid</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NftCollection;