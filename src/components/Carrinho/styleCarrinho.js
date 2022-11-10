import styled from 'styled-components'

export const ContainerCarrinho = styled.div`
    display: flex;
    width: 500px;
    min-height: 250px;
    position: absolute;
    top: 11vh;
    right: 4rem;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    border-radius: 1rem;
    box-shadow: 10px 5px 5px 10px hsla(220, 14%, 75%, 0.31);
    background-color: white;
    padding: 1rem;
    gap: 2rem;
`

export const InfoCarrinho =styled.div`
    display: flex;
    padding: .5rem 0;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    box-shadow: 5px 5px 10px grey;
`

export const BtnCheckOut = styled.button`
    display: flex;
    width: 80%;
    margin: 0 auto;
    border: none;
    padding: 1rem 0;
    justify-content: center;
    background-color: hsl(26, 100%, 55%);
    font-weight: 700;
    color: white;
    border-radius: 1rem;
`