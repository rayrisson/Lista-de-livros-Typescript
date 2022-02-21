import CardProps from "./Card.types";
import "./style.css"

const Card = ({author, title, url} : CardProps) => {
    return(
        <div className="Card">
            <span className="Author">👨🏽{author}</span>
            <span className="Title">📖{title}</span>
            <span className="Url">🔗<a href={url}>{url}</a></span>
        </div>
    )
}

export default Card;