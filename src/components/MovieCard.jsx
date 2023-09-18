import '../sass/MovieCard.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({svg,title,score,description,id}) => {

    return (
        <Link to={`/movie/${id}`} className="Card">
            <div className="Card__image">
                <img src={`https://image.tmdb.org/t/p/w500${svg}`} alt="error"/>
            </div>

            <div className="Card__title">
                <h1>{title}</h1>
                <h1>{score}</h1>
            </div>

            <div className="Card__description">
                {description.length < 100 ?(
                    <p>{description}</p>
                ):(
                    <p>{description.substring(0, 100)}...</p>
                )
                }


            </div>


        </Link>
    );
}

export default MovieCard;
