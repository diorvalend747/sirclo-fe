import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, JSON_FORMAT } from '../api/base';
import { useDispatch } from 'react-redux'

export default function useFetchArtist() {
    const dispatch = useDispatch()
    const [isLoadingArtist, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}method=chart.gettopartists&api_key=${API_KEY}&limit=20${JSON_FORMAT}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: "SET_ARTIST",
            payload: data.artists.artist
        }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
    return [isLoadingArtist]; 
    
}