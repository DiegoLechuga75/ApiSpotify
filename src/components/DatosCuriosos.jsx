import styled from "styled-components";
import { Card, CenterSection, Container, Text } from "../UI/GlobalComponents";

const CardHover = styled(Card)`
    &:hover{
        transform: rotateY(180deg);
    }
`

const Side = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    backface-visibility: hidden;
`

const FrontTitle = styled.h4`
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 25px;
    color: white;
`

const BackSide = styled(Side)`
    height: 100%;
    width: 100%;
    transform: rotateY(180deg);
`

const BackTitle = styled.h4`
    color: white;
    text-align: center;
    margin-top: 15px;
`;

const FunFactsText = styled(Text)`
    color: white;
`

const FunFactsImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const DatosCuriosos = () => {
    return(
        <>
            <CenterSection>
            <Container>
            <CardHover>
                <Side>
                    <FrontTitle>Artic Monkeys</FrontTitle>
                    <FunFactsImage src="https://yt3.googleusercontent.com/AsSq27Ed0mQg5nkXPKMFurMWRakUujyspvg2B_t03dg7nkyIn11GeKRRKSLwK57zyUV11vVT=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </Side>

                <BackSide>
                    <BackTitle>Dato curioso:</BackTitle>
                    <FunFactsText>El álbum debut de Arctic Monkeys, "Whatever People Say I Am, That's What I'm Not", lanzado en 2006, se convirtió en el álbum debut más vendido en la historia del Reino Unido.</FunFactsText>
                </BackSide>
            </CardHover>
        </Container>

        <Container>
            <CardHover>
                <Side>
                    <FrontTitle>Lana del Rey</FrontTitle>
                    <FunFactsImage src="https://yt3.googleusercontent.com/o5_mjwl7QSyLQBguYioDM3wB4POD7tFbCOmBJn5SdpwZ5QvmrzoDG_lM_hgRma6qVKPHwqUJ2q8=s900-c-k-c0x00ffffff-no-rj" alt=""/>
                </Side>

                <BackSide>
                    <BackTitle>Dato curioso:</BackTitle>
                    <FunFactsText>Antes de adoptar el nombre artístico de Lana Del Rey, la cantante y compositora utilizó varios alias, como Lizzy Grant y May Jailer. Lana Del Rey se convirtió en su nombre artístico oficial en 2010.</FunFactsText>
                </BackSide>
            </CardHover>
        </Container>

        <Container>
            <CardHover>
                <Side>
                    <FrontTitle>The Strokes</FrontTitle>
                    <FunFactsImage src="https://garajedelrock.com/wp-content/uploads/2020/06/the-strokes-big-read-hero@2560x1707-1392x928-1.jpg" alt=""/>
                </Side>

                <BackSide>
                    <BackTitle>Dato curioso:</BackTitle>
                    <FunFactsText>Antes de alcanzar la fama, Julian Casablancas, el vocalista de The Strokes, trabajaba como mensajero de bicicleta en Nueva York. </FunFactsText>
                </BackSide>
            </CardHover>
        </Container>

        <Container>
            <CardHover>
                <Side>
                    <FrontTitle>Mac Miller</FrontTitle>
                    <FunFactsImage src="https://es.rollingstone.com/wp-content/uploads/2022/09/Los-ultimos-di%CC%81as-de-Mac-Miller-portada.jpg" alt=""/>
                </Side>

                <BackSide>
                    <BackTitle>Dato curioso:</BackTitle>
                    <FunFactsText>Malcolm James McCormick, además de su carrera musical,tocaba múltiples instrumentos. Mac Miller comenzó a tocar la guitarra a los 6 años y luego se interesó por la batería, el bajo y el teclado.</FunFactsText>
                </BackSide>
            </CardHover>
        </Container>
            </CenterSection>
        </>
    )
}

export default DatosCuriosos