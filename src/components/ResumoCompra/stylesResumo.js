import styled from "styled-components";

export const ContainerResumo = styled.div`

display: flex;
    width: 500px;
    min-height: 450px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
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

export const BackDrop = styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.882);

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