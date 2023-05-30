import { useNavigate } from 'react-router-dom';

function SearchValid({searchResults}){
    const navigate = useNavigate();

    if (searchResults && searchResults.length > 0) {
        navigate('/search-results', { state: searchResults });
    }
    return null;
}

export default SearchValid;