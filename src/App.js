import './App.css';
import MainPage from './components/MainPage';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import ArtistData from './components/ArtistData';
import AlbumData from './components/AlbumData';
import DatosCuriosos from './components/DatosCuriosos';
import styled from 'styled-components';
import { Titles } from './UI/GlobalComponents';

const StyledAlbums = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledTracks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  background-image: url('https://www.todofondos.net/wp-content/uploads/papel-arrugado-textura-dorada-scaled.jpg');
  width: 30%;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  box-shadow: -8px 22px 26px -3px rgba(0,0,0,0.75);
  -webkit-box-shadow: -8px 22px 26px -3px rgba(0,0,0,0.75);
  -moz-box-shadow: -8px 22px 26px -3px rgba(0,0,0,0.75);
  font-family: 'Special Elite', cursive;
`

const PlayerImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const TitleDatosCuriosos = styled(Titles)`
`

function App() {

  const CLIENT_ID = "4362f4c0477549c08a1acef1f301ea2e";
  const CLIENT_SECRET = "a71c8f2f9dc2401b91562950558be54f";

  const [artistAlbums, setArtistAlbums] = useState([])
  const [artistName, setArtistName] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [tracks, setTracks] = useState([])

  useEffect(() =>{
    let authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  },[])


  async function search(artistName) {

    let artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + artistName + '&type=artist', artistParameters)
      .then(response => response.json())
      .then(data => data.artists.items[0].id)

      let artistTitle = await fetch('https://api.spotify.com/v1/search?q=' + artistName + '&type=artist', artistParameters)
      .then(response => response.json())
      .then(data => setArtistName(data.artists.items[0].name))

    let albums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&limit=50', artistParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setArtistAlbums(data.items)
      })
  }

  async function searchAlbum(albumID) {
    let albumParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    let tracks = await fetch('https://api.spotify.com/v1/albums/' + albumID + '/tracks?limit=50', albumParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTracks(data.items)
      })
    
  }

  console.log(tracks)

  return (
    <div className="App">
      <Header 
        search={search}
        setTracks={setTracks}
      />
      <MainPage />
      <Titles>{artistName}</Titles>
      <StyledAlbums>
        {artistAlbums.map((album, index) => {
          return(
          <ArtistData 
            title={album.name}
            image={album.images[1].url}
            searchAlbum={searchAlbum}
            albumID={album.id}
            key={index}
          />
          )
        })}
      </StyledAlbums>
      <StyledTracks>
      <h2>Canciones del album seleccionado:</h2>
        {tracks.map((track, index) => {
          return(
            <AlbumData 
              songName={track.name}
              preview={track.external_urls.spotify}
              key={index}
            />
          )
        })}
        <PlayerImage src='https://raw.githubusercontent.com/DiegoLechuga75/ApiSpotify/main/RepCo.png' alt='Reproductor' />
      </StyledTracks>
      <TitleDatosCuriosos>Datos Curiosos</TitleDatosCuriosos>
      <DatosCuriosos />
    </div>
  );
}


export default App;