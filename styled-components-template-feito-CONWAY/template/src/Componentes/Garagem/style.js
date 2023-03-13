import styled from "styled-components";

export const Botao = styled.button`
    border:none;
    background-color: orange;
    padding: 5px;

    :hover{
        background-color: red;
    }
`

export const GaragemContainer = styled.main`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem
`

export const Estacionamento = styled.section`
    background-color: green;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-areas: 
            "b b a"
            "b b c"
            "b b c"; */
    gap: 2rem;
    list-style:none;

    li{
        list-style:none
    }
`

export const Column = styled.div`
    border: 1px solid black;
    background-color: ${(props)=> (props.color)};
    /* grid-column: props.grid / props.grid-end; */
`


