import { useState, useEffect } from 'react';
import { BASE_URL, API_KEY, JSON_FORMAT } from '../api/base';
import { useDispatch } from 'react-redux'

export default function useFetchTrack() {
    const dispatch = useDispatch()
    const [isLoadingTrack, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}method=chart.gettoptracks&api_key=${API_KEY}&limit=20${JSON_FORMAT}`)
        .then(response => response.json())
        .then(data => dispatch({
            type: "SET_TRACK",
            payload: data.tracks.track
        }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
    return [isLoadingTrack];
    
}