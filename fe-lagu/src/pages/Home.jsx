import {useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useFetchArtist,
  useFetchTrack,
  useFetchSearchArtist,
  useFetchSearchTrack
} from '../custom-hooks';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import CardTrack from '../components/CardTrack';
import CardArtist from '../components/CardArtist';

export default function Home() {
    const artists = useSelector(state => state.artists)
    const tracks = useSelector(state => state.tracks)
    const searchArtist = useSelector(state => state.searchedArtist)
    const searchTrack = useSelector(state => state.searchedTrack)
    const [searchInput, setSearchInput] = useState(null)

    const [isLoadingArtist] = useFetchArtist()
    const [isLoadingTrack] = useFetchTrack()
    const [isLoadingSearchArtist] = useFetchSearchArtist(searchInput)
    const [isLoadingSearchTrack] = useFetchSearchTrack(searchInput)
    
    const handleSearch=(event) => {
      setTimeout(() => {
        setSearchInput(event.target.value)
      }, 1200)
    }

    return (
      <>
        <div className="item-center justify-center p-3">
          <Navbar/>
          <SearchInput
            onChange={(event) => handleSearch(event)}
          />
          {
            searchInput && isLoadingSearchArtist ? 
            <>
              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Search result for "{searchInput}"</h1>
              </div>
              <p className="p-5  ml-2 text-white">Loading...</p>
            </>
            :
            searchInput && !isLoadingSearchArtist ? 
            <>
              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Search result for "{searchInput}"</h1>
              </div>

              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Artist</h1>
              </div>
              <div className="ml-2 p-5 grid grid-rows-4 grid-flow-col gap-3">
                {
                  isLoadingSearchArtist ?
                  <p className="text-white">Loading...</p> :
                  (searchArtist.map(item => {
                    return (
                      <CardArtist
                        artist={item.name}
                      />
                    )
                  }))
                }
              </div>
              
              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Song</h1>
              </div>
              <div className="ml-2 p-5 grid grid-rows-4 grid-flow-col gap-3">
                {
                  isLoadingSearchTrack ?
                  <p className="text-white">Loading...</p> :
                  (searchTrack.map(item => {
                    return (
                      <CardTrack
                        artist={item.artist}
                        track={item.name}
                      />
                    )
                  }))
                }
              </div> 
            </>
            : 
            <>
              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Top 20 Chart Artist</h1>
              </div>
              <div className="ml-2 p-5 grid grid-rows-4 grid-flow-col gap-3">
                {
                  isLoadingArtist ?
                  <p className="text-white">Loading...</p> :
                  (artists.map(item => {
                    return (
                      <CardArtist
                        artist={item.name}
                      />
                    )
                  }))
                }
              </div>

              <div className="mt-8 ml-2 p-5 text-white text-4xl">
                  <h1>Top 20 Chart Song</h1>
              </div>
              <div className="ml-2 p-5 grid grid-rows-4 grid-flow-col gap-3">
                {
                  isLoadingTrack ?
                  <p className="text-white">Loading...</p> :
                  (tracks.map(item => {
                    return (
                      <CardTrack
                        artist={item.artist.name}
                        track={item.name}
                      />
                    )
                  }))
                }
              </div>
            </>
          }
        </div>
      </>
    )
}