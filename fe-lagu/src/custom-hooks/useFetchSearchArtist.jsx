import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, JSON_FORMAT } from '../api/base';
import { useDispatch } from 'react-redux'

export default function useFetchSearchArtist(name) {
    const dispatch = useDispatch()
    const [isLoadingSearchArtist, setLoadingSearchArtist] = useState(false);

    useEffect(() => {
        setLoadingSearchArtist(true);
        fetch(`${BASE_URL}method=artist.search&artist=${name}&api_key=${API_KEY}&limit=20${JSON_FORMAT}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: "SEARCH_ARTIST",
            payload: data.results.artistmatches.artist
        }))
        .catch(err => console.log(err))
        .finally(() => setLoadingSearchArtist(false))
    }, [name])
    
    return [isLoadingSearchArtist]; 
    
}