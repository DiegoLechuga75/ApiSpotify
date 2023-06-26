import styled from "styled-components";

const InputBar = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`

const InputText = styled.input`
    border-radius: 20px;
    padding: 5px 80px;
    text-align: center;
    font-weight: bolder;
    font-size: 1.2em;
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