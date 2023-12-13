import styled from "styled-components";

const InputBar = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`

const InputText = styled.input`
    padding: 0.5rem 3.5rem;
    text-align: center;
    font-weight: bolder;
    font-size: 1.2em;
    ::placeholder{
        color: black;
    }
`

const SearchBar = (props) => {

    const handleInput = (e) => {
        props.setVal(e.target.value)
    }
    return(
        <InputBar>
            <InputText 
                placeholder="Busca a tu artista favorito"
                required
                value={props.val}
                onChange={handleInput}
                type="text"
            />
        </InputBar>
    )
}

export default SearchBar