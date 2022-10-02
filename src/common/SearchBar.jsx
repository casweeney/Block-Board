import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [account, setAccount] = useState("");
    const [protocol, setProtocol] = useState("");
    const history = useHistory();

    const accountChangeHandler = (e) => {
        e.preventDefault();
        setAccount(e.target.value);
    }

    const protocolChangeHandler = (e) => {
        e.preventDefault();
        setProtocol(e.target.value);
    }

    const accountSubmitHandler = (e) => {
        e.preventDefault();

        if(account === "" || protocol === "") {
            alert("Pass an account address and select protocol");
        } else {

            if(account.length === 66){
                history.push(`/details/tx/${account}`);
            }

            if(account.length === 42) {
                history.push(`/accounts/${protocol}/mainnet/${account}`);
            }
            
            setAccount("");
        }
    }

    return (
        <form onSubmit={accountSubmitHandler}>
            <div className="flex-holder">
                <div className="search-input">
                    <input type="text" value={account} onChange={accountChangeHandler} className="form-control custom-search" placeholder="Enter your address here..." aria-describedby="basic-addon2" />
                </div>
                <div>
                    <select onChange={protocolChangeHandler} className="form-control custom-search" name="" id="">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className="input-group-text custom-search pl-3 pr-3" id="basic-addon2">Search</button>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;