import styled from 'styled-components'

export const Div = styled.div`
    text-align: center; 
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const ButtonArrows = styled.button`
    background-color: none;
    border: none;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
    color:  ${props => props.theme.colors.azulFraco};
    opacity: 1;
    transition: .4s;

    
    &:hover {
        color: ${props => props.theme.colors.azulForte};
    }

    &:active {
        font-size: 28px;
    }
`