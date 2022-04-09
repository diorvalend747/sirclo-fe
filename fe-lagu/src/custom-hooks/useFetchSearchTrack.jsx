import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, JSON_FORMAT } from '../api/base';
import { useDispatch } from 'react-redux'

export default function useFetchSearchTrack(title) {
    const dispatch = useDispatch()
    const [isLoadingSearchTrack, setLoadingSearchTrack] = useState(false);

    useEffect(() => {
        setLoadingSearchTrack(true);
        fetch(`${BASE_URL}method=track.search&track=${title}&api_key=${API_KEY}&limit=20${JSON_FORMAT}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: "SEARCH_TRACK",
            payload: data.results.trackmatches.track
        }))
        .catch(err => console.log(err))
        .finally(() => setLoadingSearchTrack(false))
    }, [title])
    
    return [isLoadingSearchTrack]; 
    
}