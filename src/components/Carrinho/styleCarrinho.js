import styled from 'styled-components'

export const ContainerCarrinho = styled.div`
    display: flex;
    width: 50%;
    min-width: 500px;
    max-width: 800px;
    min-height: 250px;
    position: absolute;
    top: 11vh;
    right: 2rem;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    border-radius: 1rem;
    box-shadow: 10px 5px 5px 10px hsla(220, 14%, 75%, 0.31);
    background-color: white;
    padding: 1rem;
    gap: 2rem;

    @media (max-width: 550px){
        width: 100%;
        right: 0rem;
        min-width: 100%;
        padding: .1rem;

    }
`

export const InfoCarrinho =styled.div`
    display: flex;
    padding: .5rem 0;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    box-shadow: 5px 5px 10px grey;

    @media (max-width: 550px){
        width: 90%;
        
    }
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

export const ContainerBtns = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`