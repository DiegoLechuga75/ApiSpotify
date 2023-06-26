import styled from "styled-components"
import { CenterSection, Text } from "../UI/GlobalComponents"

const TextMP = styled(Text)`
    margin: 3rem 10rem 0 10rem;
    font-weight: bold;
    font-size: 1.3em;
`


const MainPage = () =>{


    return(
        <CenterSection>
            <div>
                <TextMP>La página web que estás viendo fue creada utilizando React, Styled Components y la API de Spotify. Aquí puedes buscar a tu artista favorito y explorar sus álbumes. Además, al hacer clic en un álbum, podrás ver todas sus canciones. ¡Y eso no es todo! También encontrarás algunos datos curiosos sobre mis artistas favoritos a continuación. ¡Disfruta explorando la música!</TextMP>
            </div>
        </CenterSection>
    )
}

export default MainPage