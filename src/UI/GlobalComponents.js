import styled from "styled-components";

const CenterSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const Container = styled.div`
    height: 250px;
    width: 250px;
    margin-right: 25px;
    -webkit-perspective: 700;
`

const Card = styled.div`
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 5px black;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 2s;
`

const Text = styled.p`
    text-align: center;
    padding: 12px;
`

const Titles = styled.h1`
    text-align: center;
`

const Button = styled.button`
    background-image:linear-gradient(to right, #f35b6d 0%, #ee1b34  51%, #e60e28  100%);
    color:white;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    margin-top: 2rem;
    font-size: 1.2em;
`

export {
    Container,
    Card,
    CenterSection,
    Text,
    Titles,
    Button,
}