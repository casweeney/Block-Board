import React from 'react';

const Explorer = () => {
    return (
        <main>
            <div className="search-holder pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input type="text" className="form-control search-gray search-bar-border txn-hash-search" placeholder="Search transactions, addresses, tokens" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="input-group-text search-btn" id="basic-addon2">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-white text-center mb-5"><strong>Protocol: </strong>Ethereum</h4>
                        <div className="table-responsive">
                            <table className="table table-dark custom-tr table-striped">
                                <thead>
                                    <tr className="custom-tr text-danger">
                                        <th>#</th>
                                        <th>Txn Hash</th>
                                        <th>Block</th>
                                        <th>Age</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className="micro-text">
                                    <tr className="custom-tr">
                                        <td>1</td>
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
                                    </tr>
                                    <tr className="custom-tr">
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>3</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>4</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>5</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>6</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>7</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>8</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>9</td>
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
                                    </tr>
                                    <tr className="custom-tr">
                                        <td>10</td>
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
                                    </tr>
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