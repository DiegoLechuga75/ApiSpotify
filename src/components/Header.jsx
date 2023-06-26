import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/GlobalComponents";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: black;
    padding-bottom: 15px;
`

const TitleHeader = styled.h1`
    color: white;
`

const Header = (props) =>{

    const search = props.search
    const setTracks = props.setTracks

    const [artistInput, setArtistInput] = useState("")

    return(
        <HeaderStyle>
            <TitleHeader>Line</TitleHeader>
            <SearchBar 
                val={artistInput}
                setVal={setArtistInput}
            />
            <Button onClick={()=> {
                search(artistInput)
                setTracks([])
                }}>Buscar</Button>
        </HeaderStyle>
        
    )
}

export default Header