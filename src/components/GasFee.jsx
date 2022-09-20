import React, { useState, useEffect } from "react";

const GasFee = () => {
    const [ethFees, setEthFees] = useState(null);
    const [btcFees, setBtcFees] = useState(null);
    const [bchFees, setBchFees] = useState(null);
    const [ltcFees, setLtcFees] = useState(null);

    const getEthGasFee = async () => {
        try {
            const response = await fetch("https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/tx/estimate_fee", {
                headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
            });
            const data = await response.json();
            setEthFees(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getBtcGasFee = async () => {
        try {
            const response = await fetch("https://ubiquity.api.blockdaemon.com/v1/bitcoin/mainnet/tx/estimate_fee", {
                headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
            });
            const data = await response.json();
            setBtcFees(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getBchGasFee = async () => {
        try {
            const response = await fetch("https://ubiquity.api.blockdaemon.com/v1/bitcoincash/mainnet/tx/estimate_fee", {
                headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
            });
            const data = await response.json();
            setBchFees(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getLtcGasFee = async () => {
        try {
            const response = await fetch("https://ubiquity.api.blockdaemon.com/v1/litecoin/mainnet/tx/estimate_fee", {
                headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
            });
            const data = await response.json();
            setLtcFees(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEthGasFee();
        getBtcGasFee();
        getBchGasFee();
        getLtcGasFee();
    }, []);

    let ethFeeHolder = {
        fast: "N/A",
        medium: "N/A",
        slow: "N/A",
        recentBlock: "N/A"
    };

    let btcFeeHolder = {
        fast: "N/A",
        medium: "N/A",
        slow: "N/A",
        recentBlock: "N/A"
    }

    let bchFeeHolder = {
        fast: "N/A",
        medium: "N/A",
        slow: "N/A",
        recentBlock: "N/A"
    }

    let ltcFeeHolder = {
        fast: "N/A",
        medium: "N/A",
        slow: "N/A",
        recentBlock: "N/A"
    }
    
    if(ethFees !== null){
        ethFeeHolder = {
            fast: ethFees.estimated_fees.fast.max_total_fee,
            medium: ethFees.estimated_fees.medium.max_total_fee,
            slow: ethFees.estimated_fees.slow.max_total_fee,
            recentBlock: ethFees.most_recent_block
        };
    }

    if(btcFees !== null) {
        btcFeeHolder = {
            fast: btcFees.estimated_fees.fast,
            medium: btcFees.estimated_fees.medium,
            slow: btcFees.estimated_fees.slow,
            recentBlock: btcFees.most_recent_block
        }
    }

    if(bchFees !== null) {
        bchFeeHolder = {
            fast: bchFees.estimated_fees.fast,
            medium: bchFees.estimated_fees.medium,
            slow: bchFees.estimated_fees.slow,
            recentBlock: bchFees.most_recent_block
        }
    }

    if(ltcFees !== null) {
        ltcFeeHolder = {
            fast: ltcFees.estimated_fees.fast,
            medium: ltcFees.estimated_fees.medium,
            slow: ltcFees.estimated_fees.slow,
            recentBlock: ltcFees.most_recent_block
        }
    }

    return (
        <main className="extra-dark pb-4 main">
            <div className="container">
                <h3 className="text-danger pt-4 pb-2">Protocol Gas Fee Estimate</h3>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                        <div className="card-body">
                            <div className="main-flex">
                                <h6 className="text-white mb-3">Bitcoin Fee Estimate</h6>
                                <svg width="109" height="34" viewBox="0 0 109 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.51685L3.79739 6.03371H5.54575L7.99346 8.19101L11.1405 6.03371L13.5882 10.3483L14.9869 3.51685L16.3856 6.03371L18.134 3.51685V8.19101L21.9804 1L24.7778 10.3483L26.8758 8.19101L28.6242 17.1798L31.4216 13.9438L33.5196 25.4494L35.6176 17.1798L37.7157 20.0562L39.1144 17.1798L40.8627 20.0562L44.7092 13.9438L47.1569 17.1798L50.3039 13.9438L54.1503 20.0562L56.598 17.1798L60.7941 25.4494L62.8922 23.6517L65.3399 28.3258L67.0882 25.4494L69.8856 33L75.8301 20.0562L77.9281 21.8539L80.0261 15.382L81.7745 17.1798L89.4673 6.03371L91.915 10.3483L94.7124 6.03371L97.5098 10.3483L99.6078 8.19101L105.203 17.1798L108 13.9438" stroke="#16C784" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="icon-text-holder">
                                <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="" />
                                <div className="mr-5">
                                    <p className="text-white mini-text">Bitcoin</p>
                                    <p className="text-white mini-text">Fast: {btcFeeHolder.fast}</p>
                                    <p className="text-white mini-text">Medium: {btcFeeHolder.medium}</p>
                                    <p className="text-white mini-text">Slow: {btcFeeHolder.slow}</p>
                                    <p className="text-white mini-text">Most Recent Block: {btcFeeHolder.recentBlock}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div className="main-flex">
                                    <h6 className="text-white mb-3">Ethereum Fee Estimate</h6>
                                    <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.22472L3.84967 7.44944H5.63072L8.12418 10.2135L11.3301 7.44944L13.8235 12.9775L15.2484 4.22472L16.6732 7.44944L18.4542 4.22472V10.2135L22.3725 1L25.2222 12.9775L27.3595 10.2135L29.1405 21.7303L31.9902 17.5843L34.1275 32.3258L36.2647 21.7303L38.402 25.4157L39.8268 21.7303L41.6078 25.4157L45.5261 17.5843L48.0196 21.7303L51.2255 17.5843L55.1438 25.4157L57.6373 21.7303L61.9118 32.3258L64.049 30.0225L66.5425 36.0112L68.3235 32.3258L71.1732 42L77.2288 25.4157L79.366 27.7191L81.5033 19.427L83.2843 21.7303L91.1209 7.44944L93.6144 12.9775L96.4641 7.44944L99.3137 12.9775L101.451 10.2135L107.15 21.7303L110 17.5843" stroke="#EA3943" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                <div className="icon-text-holder">
                                    <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="" />
                                    <div className="mr-5">
                                        <p className="text-white mini-text">Ethereum</p>
                                        <p className="text-white mini-text">Fast: {ethFeeHolder.fast}</p>
                                        <p className="text-white mini-text">Medium: {ethFeeHolder.medium}</p>
                                        <p className="text-white mini-text">Slow: {ethFeeHolder.slow}</p>
                                        <p className="text-white mini-text">Most Recent Block: {ethFeeHolder.recentBlock}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div className="main-flex">
                                    <h6 className="text-white mb-3">Bitcoin Cash Fee Estimate</h6>
                                    <svg width="109" height="34" viewBox="0 0 109 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 3.51685L3.79739 6.03371H5.54575L7.99346 8.19101L11.1405 6.03371L13.5882 10.3483L14.9869 3.51685L16.3856 6.03371L18.134 3.51685V8.19101L21.9804 1L24.7778 10.3483L26.8758 8.19101L28.6242 17.1798L31.4216 13.9438L33.5196 25.4494L35.6176 17.1798L37.7157 20.0562L39.1144 17.1798L40.8627 20.0562L44.7092 13.9438L47.1569 17.1798L50.3039 13.9438L54.1503 20.0562L56.598 17.1798L60.7941 25.4494L62.8922 23.6517L65.3399 28.3258L67.0882 25.4494L69.8856 33L75.8301 20.0562L77.9281 21.8539L80.0261 15.382L81.7745 17.1798L89.4673 6.03371L91.915 10.3483L94.7124 6.03371L97.5098 10.3483L99.6078 8.19101L105.203 17.1798L108 13.9438" stroke="#16C784" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                <div className="icon-text-holder">
                                    <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png" alt="" />
                                    <div className="mr-5">
                                        <p className="text-white mini-text">Bitcoin Cash</p>
                                        <p className="text-white mini-text">Fast: {bchFeeHolder.fast}</p>
                                        <p className="text-white mini-text">Medium: {bchFeeHolder.medium}</p>
                                        <p className="text-white mini-text">Slow: {bchFeeHolder.slow}</p>
                                        <p className="text-white mini-text">Most Recent Block: {bchFeeHolder.recentBlock}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div className="main-flex">
                                    <h6 className="text-white mb-3">Litecoin Fee Estimate</h6>
                                    <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.22472L3.84967 7.44944H5.63072L8.12418 10.2135L11.3301 7.44944L13.8235 12.9775L15.2484 4.22472L16.6732 7.44944L18.4542 4.22472V10.2135L22.3725 1L25.2222 12.9775L27.3595 10.2135L29.1405 21.7303L31.9902 17.5843L34.1275 32.3258L36.2647 21.7303L38.402 25.4157L39.8268 21.7303L41.6078 25.4157L45.5261 17.5843L48.0196 21.7303L51.2255 17.5843L55.1438 25.4157L57.6373 21.7303L61.9118 32.3258L64.049 30.0225L66.5425 36.0112L68.3235 32.3258L71.1732 42L77.2288 25.4157L79.366 27.7191L81.5033 19.427L83.2843 21.7303L91.1209 7.44944L93.6144 12.9775L96.4641 7.44944L99.3137 12.9775L101.451 10.2135L107.15 21.7303L110 17.5843" stroke="#EA3943" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                <div className="icon-text-holder">
                                    <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="" />
                                    <div className="mr-5">
                                    <p className="text-white mini-text">Litecoin</p>
                                        <p className="text-white mini-text">Fast: {ltcFeeHolder.fast}</p>
                                        <p className="text-white mini-text">Medium: {ltcFeeHolder.medium}</p>
                                        <p className="text-white mini-text">Slow: {ltcFeeHolder.slow}</p>
                                        <p className="text-white mini-text">Most Recent Block: {ltcFeeHolder.recentBlock}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div className="main-flex">
                                    <h6 className="text-white mb-3">Polkadot Fee Estimate</h6>
                                    <svg width="111" height="43" viewBox="0 0 111 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.22472L3.84967 7.44944H5.63072L8.12418 10.2135L11.3301 7.44944L13.8235 12.9775L15.2484 4.22472L16.6732 7.44944L18.4542 4.22472V10.2135L22.3725 1L25.2222 12.9775L27.3595 10.2135L29.1405 21.7303L31.9902 17.5843L34.1275 32.3258L36.2647 21.7303L38.402 25.4157L39.8268 21.7303L41.6078 25.4157L45.5261 17.5843L48.0196 21.7303L51.2255 17.5843L55.1438 25.4157L57.6373 21.7303L61.9118 32.3258L64.049 30.0225L66.5425 36.0112L68.3235 32.3258L71.1732 42L77.2288 25.4157L79.366 27.7191L81.5033 19.427L83.2843 21.7303L91.1209 7.44944L93.6144 12.9775L96.4641 7.44944L99.3137 12.9775L101.451 10.2135L107.15 21.7303L110 17.5843" stroke="#EA3943" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>

                                <div className="icon-text-holder">
                                    <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="" />
                                    <div className="mr-5">
                                        <p className="text-white mini-text">Polkadot</p>
                                        <p className="text-white mini-text">Fast: N/A</p>
                                        <p className="text-white mini-text">Medium: N/A</p>
                                        <p className="text-white mini-text">Slow: N/A</p>
                                        <p className="text-white mini-text">Most Recent Block: N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div  className="main-flex">
                                    <h6 className="text-white mb-3">Ripple Fee Estimate</h6>
                                    <svg width="109" height="34" viewBox="0 0 109 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 3.51685L3.79739 6.03371H5.54575L7.99346 8.19101L11.1405 6.03371L13.5882 10.3483L14.9869 3.51685L16.3856 6.03371L18.134 3.51685V8.19101L21.9804 1L24.7778 10.3483L26.8758 8.19101L28.6242 17.1798L31.4216 13.9438L33.5196 25.4494L35.6176 17.1798L37.7157 20.0562L39.1144 17.1798L40.8627 20.0562L44.7092 13.9438L47.1569 17.1798L50.3039 13.9438L54.1503 20.0562L56.598 17.1798L60.7941 25.4494L62.8922 23.6517L65.3399 28.3258L67.0882 25.4494L69.8856 33L75.8301 20.0562L77.9281 21.8539L80.0261 15.382L81.7745 17.1798L89.4673 6.03371L91.915 10.3483L94.7124 6.03371L97.5098 10.3483L99.6078 8.19101L105.203 17.1798L108 13.9438" stroke="#16C784" strokeWidth="2" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="icon-text-holder">
                                    <img className="pr-1" src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="" />
                                    <div className="mr-5">
                                        <p className="text-white mini-text">Ripple</p>
                                        <p className="text-white mini-text">Fast: N/A</p>
                                        <p className="text-white mini-text">Medium: N/A</p>
                                        <p className="text-white mini-text">Slow: N/A</p>
                                        <p className="text-white mini-text">Most Recent Block: N/A</p>
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

export default GasFee;