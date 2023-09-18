import { FaSearch } from 'react-icons/fa';
import '../sass/Header.scss'
import { Link } from 'react-router-dom';

const Header = ({marmota}) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        const searchValue = event.target[0].value;
        marmota(searchValue);
    }

    return (
        <div className="header">
            <Link to='/'><h1>Movies List</h1></Link>
            <form onSubmit={handleSubmit} className='header__search'>
                <input type="text" placeholder='TITLE, PEOPLE, GENRES' name="" id="" />
                <button type='Submit'><FaSearch size={23} color='white'/></button>
            </form>
        </div>
    );
}

export default Header;
