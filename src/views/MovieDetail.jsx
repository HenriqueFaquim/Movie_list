import { Link, useParams } from 'react-router-dom';
import '../sass/MovieDetail.scss'
import { useEffect, useState } from 'react';
import { MovieService } from '../api/MovieService';

const MovieDetail = ({searchValueProp}) => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    async function getMovie(){
        const {data} = await MovieService.getMovieDetails(id);
        setMovie(data);
    }

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        console.log(searchValueProp);
    });


    //const item = data.find(movie => movie.id == id)

    return (
        <div className="MovieDetail">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <div className="MovieDetail__Details">
                <h1>{movie.title}</h1>
                <div className="MovieDetail__Details__plus">
                    <h2>{movie.release_date}</h2>
                    <h2>Linguagem: {movie.original_language} </h2>
                    <h2>Avaliação:{movie.vote_average} </h2>
                </div>
                <p>{movie.overview}</p>
                <Link to={'/'}>Voltar</Link>
            </div>
        </div>
    );
}

export default MovieDetail;
