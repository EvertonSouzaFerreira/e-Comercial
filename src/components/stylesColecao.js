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
    height: 500px;
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

    @media (max-width: 550px) {
        padding:0;
        flex-direction: column;
        gap: 1rem;
    }
`

export const ContainerInput = styled.div`
        display: flex;
        width: 100%;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 0rem 1rem;
        @media (max-width: 1000px){
            flex-direction: column;
        }

`

export const Input = styled.input`
    width: 30%;
    min-width: 300px;
    height: 30px;
    background-color: hsl(25, 100%, 94%);
    border-radius: .3rem;
`