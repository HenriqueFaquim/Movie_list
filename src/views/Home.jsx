import { useState, useEffect } from "react";
import { MovieService } from '../api/MovieService';
import MovieCard from "../components/MovieCard";
import '../sass/Home.scss'

const Home = ({searchValueProp}) => {
    const [movies, setMovies] = useState([]);

    async function getMovies(){
        const {data : {results}} = await MovieService.getMovies();
        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    async function getMoviesSearch(movieString){
        const {data : {results}} = await MovieService.searchMovies(movieString);
        setMovies(results);
    }

    useEffect(() => {
        if(searchValueProp){
            getMoviesSearch(searchValueProp);
        }else{
            getMovies();
        }
    }, [searchValueProp]);

    return (
        <div className="Home">
            {movies.map(({id: id,title: title,vote_average: vote_average,poster_path: poster_path,overview: overview})=>(
                <MovieCard key={id} title={title} score={vote_average} svg={poster_path} description={overview} id={id}/>
            ))

            }
        </div>
    );
}

export default Home;