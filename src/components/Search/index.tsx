import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {BsSearch} from "react-icons/bs";
import "./style.css"

const Search = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 200, parameter:term});
        /*searchCallback(term);*/
    }

    return (
        <form className="Search" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTerm(e.target.value)}/>
            <button type="submit"><BsSearch/></button>
        </form>
    )
}

export default Search;