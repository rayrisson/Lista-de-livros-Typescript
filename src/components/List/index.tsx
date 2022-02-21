import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../api/api";
import Card from "../Card";
import "./style.css"

const List = () => {
    const searchTerm = useSelector(state => state.toString());
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get(searchTerm);
            setBookList(response?.data.hits);
        }

        fetchData();
    }, [searchTerm])

    return (
        <div className="List">
            {bookList.map((item:any, index:number) => (
                <Card author={item.author} title={item.title} url={item.url} key={index}/>
            ))}
        </div>
    )
}

export default List;