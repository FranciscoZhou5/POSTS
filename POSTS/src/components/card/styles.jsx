import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 180px; 
    background-color: ${props => props.theme.colors.cinza};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.457);
`

export const Img = styled.img`
    height: 100px;
    max-width: 120px;
`

export const UserNameText = styled.p`
    color: ${props => props.theme.colors.azulFraco};
    font-weight: bold;
`