import React from 'react';

const CardTrack = ({ artist, track }) => {
    return (    
        <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {track.substring(0, 18)}
                {
                    track.length > 18 ? <span>...</span> : null
                }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{artist}</p>
        </a>
    )
}

export default CardTrack;