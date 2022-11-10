import styled from 'styled-components'

export const ContainerImg = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem 0rem;
    padding: 16px;

`

export const ContainerInfo = styled.div`
    display: flex;
    padding: 1rem, 0rem;
    max-width: 380px;
    min-width: 200px;
    height: 60vh;
    gap: 4px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    box-shadow: 20px 20px 10px grey;
   
`

export const ContainerPrecoBtn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
`

export const ContainerInput = styled.div`
        display: flex;
        width: 100%;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 0rem 1rem;

`

export const Input = styled.input`
    width: 30%;
    height: 30px;
    background-color: hsl(25, 100%, 94%);
    border-radius: .3rem;
`