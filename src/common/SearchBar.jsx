import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [account, setAccount] = useState("");
    const [protocol, setProtocol] = useState("");
    const [currentBlock, setCurrentBlock] = useState(null);
    const history = useHistory();

    const accountChangeHandler = (e) => {
        e.preventDefault();
        setAccount(e.target.value);
    }

    const getCurrentBlock = async () => {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/sync/block_number`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });
  
        const data = await response.json();
        setCurrentBlock(data);
    }

    // const protocolChangeHandler = (e) => {
    //     e.preventDefault();
    //     setProtocol(e.target.value);
    // }

    useEffect(() => {
        const defaultChain = JSON.parse(localStorage.getItem('defaultProtocol'));
        setProtocol(defaultChain);
        getCurrentBlock();
    }, []);

    const accountSubmitHandler = (e) => {
        e.preventDefault();

        if(account === "" || protocol === "") {
            alert("Pass an account address and select protocol");
        } else {

            if(protocol === "ethereum") {
                if(account.length === 66){
                    history.push(`/details/tx/${protocol}/${account}`);
                }
    
                if(account.length === 42) {
                    history.push(`/accounts/${protocol}/mainnet/${account}`);
                }
    
                if(account.length <= String(currentBlock).length) {
                    history.push(`/block/${protocol}/${account}`);
                }
            }

            if(protocol === "bitcoin") {
                if(account.length === 64){
                    history.push(`/details/tx/${protocol}/${account}`);
                }
    
                if(account.length === 42) {
                    history.push(`/accounts/${protocol}/mainnet/${account}`);
                }
    
                if(account.length <= String(currentBlock).length) {
                    history.push(`/block/${protocol}/${account}`);
                }
            }
            
            setAccount("");
        }
    }

    return (
        <form onSubmit={accountSubmitHandler}>
            <div className="flex-holder">
                <div className="search-input">
                    <input type="text" value={account} onChange={accountChangeHandler} className="form-control custom-search" placeholder="Search by Address / Txn Hash / Block" aria-describedby="basic-addon2" />
                </div>
                {/* <div>
                    <select onChange={protocolChangeHandler} className="form-control custom-search" name="" id="">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                </div> */}
                <div>
                    <button type="submit" className="input-group-text custom-search pl-3 pr-3" id="basic-addon2">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;