import styled from "styled-components";

export const ContainerLogin = styled.div`
display: flex;
position: static;
gap: 1rem;
padding: 1rem;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 300px;
background-color: white;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const Btn = styled.button`
    margin: 1rem;
`

export const BackDrop = styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.882);

`